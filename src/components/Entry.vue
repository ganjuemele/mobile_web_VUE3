<template>
  <!-- 导航入口组件 -->

  <div class="entry anim_fade_image twoLine">
    <div v-for="(item,index) in entryList" :key="index"
         class="alignCenter" @click="entryJump">
      <img :src="getIcon(item.picDe)" lazy-load alt="" />
      <p>{{ item.title.slice(0, 5) }}</p>
    </div>
  </div>

  <!--  <div id="entry">-->
  <!--    <swiper class="entry {{twoLine?'twoLine':'oneLine'}}" style="{{disStyle}}"-->
  <!--            duration="500" onChange="swiperChange">-->
  <!--      <swiper-item a:key="*this" a:for="{{newEntry}}">-->
  <!--        <block a:for="{{item}}" a:key="index">-->
  <!--          <div style="flex-direction: column;display: flex" data-url="{{item.url}}" catchTap="{{item.url?'entryJump':''}}">-->
  <!--            <image src="{{!!item.pic?componentImgUrl+'&fileId='+item.pic.split('.')[0] +'&fileType='+item.pic.split('.')[1]:item.picDe}}" data-url="{{item.url}}" />-->
  <!--            <text style="text-align: center">{{item.title.slice(0,5)}}</text>-->
  <!--          </div>-->
  <!--        </block>-->
  <!--      </swiper-item>-->
  <!--    </swiper>-->

  <!--    <div class="dots justifyCenter">-->
  <!--      <block a:for="{{newEntry}}" a:key="*">-->
  <!--        <div class="dot {{index == current ? 'active' : ''}}"/>-->
  <!--      </block>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script setup>
import {ref} from "vue";

const {entryList} = defineProps(['entryList'])

const getIcon = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href
}
// const newEntry = ref(entryList)
</script>

<style scoped>
.entry {
  padding: 0;
  font-size: 13px;
  font-weight: bold;
  /*color: transparent;*/
  margin: 16px 0;
}
/*.entry swiper-item {*/
/*  display: flex;*/
/*}*/

.entry.oneLine {
  height: 65px!important;
  display: flex;
}
/*.entry > view, .entry swiper-item > view {*/
.entry > div {
  flex-direction: column;
  width: 75px;
  height: 57px;
}
.entry.twoLine {
  /*height: 130px!important;*/
  flex-wrap: wrap;
  display: flex;
}
/*.twoLine swiper-item {*/
/*  display: flex;*/
/*  flex-wrap: wrap;*/
/*  height: 100%;*/
/*}*/
/*.entry swiper-item > view, .twoLine > view {*/
/*  margin-bottom: 15rpx;*/
/*}*/
.entry img {
  width: 45px;
  height: 30px;
  margin: 0 auto;
}
#entry .dots {
  margin-top: -1vw!important;
}
</style>
