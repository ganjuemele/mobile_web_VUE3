<template>

</template>

<script>
import {h} from "vue";
import Placard from '../components/Placard.vue'
import Entry from '../components/Entry.vue'
import {componentsList} from "../../public/constant"
import {store} from "../store/store";

//根据level进行排序
let compare = function(level){
  return function(a, b){
    let val1 = a[level], val2 = b[level];
    return val1 - val2
  }
}
componentsList.sort(compare('level'))

let entryList,
    hotSearchList,
    lifePage = [];
componentsList.forEach( el => {
  if(el.name === 'SingleNavigation'){
    lifePage.push(h(Entry,{entryList: el.paramsA.list}))
  }else if(el.name === 'Search'){
    hotSearchList = el.paramsA.list
  }else if(el.name === 'Placard'){
    lifePage.push(h(Placard,{placardList: el.paramsA.list}))
  }
})

export default {
  setup() {
    store.increment(hotSearchList)
    return () => h(
        'div',{id:'life'},
        lifePage
    )
  }
}
</script>

<style scoped>
#life {
  padding: 84px 0 69px;
}
</style>
