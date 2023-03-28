<template>
  <div class="deli">
    <img class="deli-swipe" src="../assets/credit_welf_delicious.jpeg" alt="" />

    <div class="deli-entry justifyBetween">
      <div v-for="(item,i) in entry">
        <img :src="getIcon(item.icon)" alt="" />
        <p>{{ item.txt }}</p>
      </div>
    </div>

    <div class="deli-gate justifyBetween">
      <div v-for="(item , i) in gate"
                   class="justifyBetween alignCenter"
                   @click="goTo(item.path)"
      >
        <div><p class="gate-title">{{ item.title }}</p>
          <p class="gate-subtitle">{{ item.subtitle }}</p></div>
        <img :src="getIcon(item.icon)" alt="" />
      </div>
    </div>

    <!-- 超值优选 -->
    <Part titleImg="part_deli" :right="true">
      <div class="czyx-top">
        <div v-for="(item,i) in czyx_tab" :key="item.name"
             class="justifyCenter"
             :class="czyx_tab_selected===i?'czyx-selected':''"
             @click="czyx_tab_selected=i, czyx_List = brandShop[i]">
          <p>{{ item.name }}</p>
          <p>{{ item.sub }}</p>
        </div>
      </div>
      <div class="scroll-view_H">
        <div class="brand-store" v-for='(item, i) in czyx_List' data-shopDetail='{{item}}' @click='goShopList'>
          <div class="brand-store-img">
            <img class="anim_fade_image" :src="czyx_url + item.img" alt="" />
          </div>
          <div class="brand-store-name txtEllipsis">
            {{ item.title }}
          </div>
          <div class="brand-store-subname txtEllipsis">
            {{ item.subTitle }}
          </div>
        </div>
        <div style="width: 4vw;border:.5px solid #fff;"/>
      </div>
    </Part>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
import {store} from "../store/store";
import {useRouter,useRoute} from 'vue-router'

//热搜词条
store.increment([{hotTag: '热搜一'}, {hotTag: '热搜二'}, {hotTag: '热搜三'}, {hotTag: '热搜四'}])
const entry = reactive([
  {txt: '见面礼', icon: 'ticket'}, {txt: '优惠券', icon: 'ticket'},
  {txt: '周末半价', icon: 'ticket'}, {txt: '同城优惠', icon: 'ticket'}
]);
const gate = reactive([
  {title: '听听音乐', subtitle: '放松心情', icon: 'music', path:'/cloudMusic'},
  {title: '喝喝咖啡', subtitle: '加个班提个神', icon: 'cafe', path:'/shoplist'},
  {title: '出去走走', subtitle: '这个世界很大', icon: 'map'},
  {title: '买好物', subtitle: '对自己好点', icon: 'du'}
]);
const getIcon = (name) => {
  return new URL(`../assets/${name}.svg`, import.meta.url).href
}

const czyx_tab = [
  // {i: 0, name: "本地推荐", sub: '地道美食5折起'},
  {i: 1, name: "品牌好店", sub: "优选品质商户"},
  {i: 2, name: "甄选零售", sub: '好物享好价'},
  {i: 3, name: "元气下午茶", sub: '甜美一刻好心情'}
];
let czyx_tab_selected = ref(0);
const czyx_url = 'https://wxcredit.test.abchina.com/MB_Credit/img/welfCenter/credit_welf_optim/';
const brandShop = [
  [{title: "麦当劳", subTitle: "25元购30元代金券", img: "brandShop/麦当劳.png"},
    {title: "呷哺呷哺", subTitle: "42元购50元代金券", img: "brandShop/呷哺呷哺.png"},
    {title: "肯德基", subTitle: "25元购30元代金券", img: "brandShop/肯德基.jpg"},
    {title: "达美乐", subTitle: "42元购50元代金券", img: "brandShop/达美乐.png"},
    {title: "好利来", subTitle: "42元购50元代金券", img: "brandShop/好利来.jpg"},
    {title: "汉堡王", subTitle: "32元购40元皇堡套餐券", img: "brandShop/汉堡王.jpg"}],
  [{title: "百果园", subTitle: "42元购50元代金券", img: "retail/百果园.jpg"},
    {title: "叮咚买菜", subTitle: "42元购50元代金券", img: "retail/叮咚.jpg"},
    {title: "屈臣氏", subTitle: "90元购100元代金券", img: "retail/屈臣氏.jpg"},
    {title: "本来生活", subTitle: "42元购50元代金券", img: "retail/本来生活网.jpg"}],
  [{title: "奈雪的茶", subTitle: "25元购30元代金券", img: "afternoontea/奈雪的茶.jpg"},
    {title: "瑞幸咖啡", subTitle: "12.9元购32元代金券", img: "afternoontea/瑞幸.jpg"},
    {title: "喜茶", subTitle: "25元购30元代金券", img: "afternoontea/喜茶.jpg"},
    {title: "星巴克", subTitle: "25元购30元代金券", img: "afternoontea/星巴克.jpg"},
    {title: "CoCo", subTitle: "16元购20元代金券", img: "afternoontea/CoCo.jpg"},
    {title: "书亦烧仙草", subTitle: "25元购30元代金券", img: "afternoontea/书亦烧仙草.jpg"}]
];
let czyx_List = ref(brandShop[0])

const router = useRouter();

const goTo = function(e){
  router.push({path: e})
}
</script>

<style scoped>
.deli {
  padding-top: 84px;
  padding-bottom: 69px;
}

.deli-swipe {
  width: 343px;
  display: block;
  margin: 0 auto;
  border-radius: 10px;
}

.deli-entry {
  width: 343px;
  margin: 18px auto;
}

.deli-entry > div {
  text-align: center;
}

.deli-entry img {
  width: 12vw;
}

.deli-gate {
  display: flex;
  flex-wrap: wrap;
  width: 343px;
  margin: 18px auto;
}

.deli-gate > div {
  width: 167px;
  margin: 10px 0 0;
  box-shadow: 0 2px 6px 2px rgba(102, 102, 102, .1);
  border-radius: 10px;
}

.deli-gate > div > div {
  margin-left: 8px;
}

.gate-title {
  font-weight: bold;
  color: #333;
  font-size: 18px;
}

.gate-subtitle {
  color: #666;
  font-size: 14px;
}

.deli-gate img {
  width: 40px;
  height: 40px;
  margin: 7px 10px 7px 0;
}

.czyx-top {
  display: flex;
  text-align: center;
  width: 100vw;
  height: 54px;
  overflow: scroll;
  padding: 0 16px;
}

.czyx-top div {
  width: 103px;
  height: 48px;
  border-right: 1px solid #ebebeb;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  flex-direction: column;
}

.czyx-top > div > p:first-child {
  font-weight: bold;
  color: #333;
  font-size: 15px;
}

.czyx-top > div > p:last-child {
  color: #666;
  font-size: 13px;
}

.czyx-top > div.czyx-selected {
  background-color: #ee5249;
  border-radius: 4px;
  position: relative;
}

.czyx-top > div.czyx-selected p {
  color: #fff !important;
}

.czyx-selected::before {
  content: '';
  position: absolute;
  display: block;
  border-top: 8px solid #ee5249;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  z-index: 2;
  left: calc(50% - 7px);
  bottom: -5px;
}

.scroll-view_H {
  width: 100vw;
  padding: 0 16px;
  display: flex;
  overflow: scroll;
  margin-top: 8px;
}

.brand-store {
  border-radius: 3.2vw;
  margin: 0 12px 2vw 0;
  flex-shrink: 0;
  width: 100px;
  box-shadow: 0 .53vw 1.6vw .53vw rgba(102, 102, 102, .08);
  overflow: hidden;
}

.brand-store .brand-store-img {
  width: 100%;
  height: 75px;
  border-radius: 3.2vw 3.2vw 0 0;
  display: flex;
}

.brand-store-name {
  margin: 1vw 2vw 0;
  line-height: 25px;
  font-weight: bold;
  font-size: 15px;
}

.brand-store-subname {
  margin: 0 2vw 2vw;
  font-size: 13px;
  color: #666;
}
</style>
