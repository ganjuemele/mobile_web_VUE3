<script setup>
import Delicious from './Delicious.vue'
import Life from './Life.vue'
import Mine from './Mine.vue'
import {ref, reactive} from 'vue'
import { store } from '../store/store.js'
import {markRaw} from 'vue'

//引入图片
// const imgUrl = ref('');
// const reqImg = async (e)=>{
//   let m = await import('./assets/icon_'+e+'.png');
//   imgUrl.value = m.default;
// }
// reqImg('life')

const getIcon = (name) => {
  return new URL(`../assets/icon_${name}.png`, import.meta.url).href
}
let hotSearchList = ref(store.hotSearch);

let currentTab = ref(0);//底部tab
const tabList = reactive([
  {name: '饭票', icon: 'deli', page: markRaw(Delicious)},
  {name: '享生活', icon: 'life', page: markRaw(Life)},
  {name: '我的', icon: 'mine', page: markRaw(Mine)}
])
</script>

<template>
  <SearchBar :showSearchBar="currentTab!==2" :hotSearchList="hotSearchList" :share="false" />

  <component :is="tabList[currentTab].page" />

  <div class="tab-bar justifyAround">
    <div class="alignCenter"
         :class="currentTab===index?'tab-bar-selected':''"
         v-for="(item, index) in tabList"
         @click="currentTab=index,a"
    >
      <img class="tab-bar-icon" :src="getIcon(item.icon)" alt="" />
      {{ item.name }}
    </div>
  </div>
</template>

<style scoped>
.tab-bar {
  width: 100vw;
  position: fixed;
  bottom: 0;
  background-color: #ede7e1;
  font-size: 14px;
  padding-top: 5px;
}

.tab-bar div {
  width: 33.33%;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  height: 13vw;
}

.tab-bar-icon {
  width: 8vw;
  height: 8vw;
  position: absolute;
  top: 0;
}

.tab-bar-selected img {
  top: -4vw;
  width: 12vw;
  height: 12vw;
}
</style>
