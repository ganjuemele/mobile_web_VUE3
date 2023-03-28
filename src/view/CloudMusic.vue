<template>
<!--  <SearchBar :showSearchBar="true" :hotSearchList="false"></SearchBar>-->

</template>

<script>
import {h} from "vue";
import Entry from '../components/Entry.vue'
import Part from '../components/Part.vue'
import SearchBar from '../components/SearchBar.vue'
import axios from "axios";

const entryList = [{title: '每日推荐', picDe: 'takeaway.svg', url: ''},
                  {title: '私人FM', picDe: 'car.svg', url: ''},
                  {title: '歌单', picDe: 'film.svg', url: 'https://co.maoyan.com/?merCode=1000136'},
                  {title: '排行榜', picDe: 'recharge.svg', url: ''},
                  {title: '新歌', picDe: 'coupon.svg', url: ''}];
let life = [
    h(SearchBar,{hotSearchList:false, showSearchBar:true}),
    h('div',{id:'musicSwipe'}),
    h(Entry,{entryList}),
    h(Part, {title:'热门歌单',right:!0})
];

const playlists = axios.get('http://101.43.109.126:3000/top/playlist/欧美?limit=7')
    .then(res => {
      console.log('欧美',res.data.playlists)
      return res.data.playlists
    })
    .catch();
// axios.get('http://101.43.109.126:3000/top/song?type=0')//类型：全部0华语7欧美96日本8韩国16
//     .then(res => {
//       console.log(res.data.data.slice(0, 10))
//       let newSongList = res.data.data.slice(0, 10)
//     })
//     .catch()
export default {
  setup(props,{slots}) {
    return () => h(
        'div',{id: 'music'},
        life
    )
  }
}
</script>

<style >
#app {
  background-color: #ede7e1;

}
#app #search-box {
  background-color: transparent;
}
#music {
  padding-top: 36px;
  color: #fff;
  width: 100%;
}
#musicSwipe {
  height: 90px;
  background-color: #f8f8f8;
  width: 92vw;
  margin: 16px auto;
  border-radius: 8px;
}
</style>
