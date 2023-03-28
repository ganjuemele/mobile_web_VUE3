<template>
  <div class="part {{className}}">
    <div class="part-head alignCenter">
      <p class="part-title" v-if="title">{{title}}</p>
      <p class="part-subtitle" v-if="subtitle">{{subtitle}}</p>
      <img v-if="titleImg" class="part-title-img"
             :src="imgUrl"/>
<!--      <p v-if="{{time}}" class="part-time">-->
<!--        <p class="timetxt">{{countdownPrev}}</p>-->
<!--        <p class="time">{{clock.hr}}</p>:-->
<!--        <p class="time">{{clock.min}}</p>:-->
<!--        <p class="time">{{clock.sec}}</p>-->
<!--      </p>-->
      <Icon v-if="right" name="right" :className="`part-ico`" size="18" />
    </div>

    <slot />
  </div>
</template>

<script setup>
import {ref} from 'vue'

let {title,subtitle,titleImg,right} = defineProps(['title','subtitle','titleImg','right']);
//引入图片
const imgUrl = ref('');
const reqImg = async (e)=>{
  let m = await import('../assets/part_'+e+'.svg');
  imgUrl.value = m.default;
}
reqImg('deli')
</script>

<style scoped>
.part {
  margin-top: 3.33vw;
  padding-top: 3.33vw;
}
.part-head {
  padding: 0 4.3vw;
  margin-bottom: 3.53vw;
}
.part-title {
  font-size: 4.8vw;
  font-weight: bold;
  color: #333;
  margin-right: 2.67vw;
}
.part-subtitle {
  font-size: 13px;
  color: #666;
}
.part-title-img {
  /*width: 341px;*/
  height: 20px;
}
.part-ico {
  position: absolute;
  right: 4.27vw;
  font-weight: bold;
  font-size: 15px;
}
.part-time {
  border: 1px solid #FA5F37;
  border-radius: 4vw;
  padding-right: 2.5vw;
  color: #F95D34;
  font-weight: bold;
  font-size: 3.2vw;
  letter-spacing: 1px;
  position: relative;
  bottom: .4vw;
}
.part-time text.timetxt {
  color: #FFF;
  background: linear-gradient(149deg, #FDAF6B 0%, #FA5D36 100%);
  border-radius: 3vw;
  padding: 0 8px;
  margin-right: 2.5vw;
}
.part-time text.time {
  width: 16px;
  display: inline-block;
  text-align: center;
}

.new-countdown .part-time {
  border: none;
}
.new-countdown .timetxt {
  display: none;
}
.new-countdown text.time {
  color: #fff;
  line-height: 20px;
  margin: 0 5px;
  padding: 0 4px;
  border-radius: 4px;
  background-color: #ff5353;
}

</style>
