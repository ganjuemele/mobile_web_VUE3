<template>
  <!-- 公告组件 -->
  <div class="placard">
    <img class="placard-icon" alt="" src="../assets/placard.svg" />

    <Swipe class="placard-txt" :autoplay="10000" vertical :show-indicators="false">
      <SwipeItem :key="item.title" v-for="(item) in placardList">
        <div style="display:flex;height:100%;align-items:center" @click="jumpToPlacard(item)">
<!--            <p>-->
<!--              <p v-if="item.isNew" class="placard-new">最新</p>-->
            {{item.title}}
<!--            </p>-->
        </div>
      </SwipeItem>
    </Swipe>
  </div>
</template>

<script setup>
const {placardList} = defineProps(['placardList'])

  // console.log(placardList)
const jumpToPlacard = function (el){
  // console.log(el.url)
}
</script>

<style scoped>
.placard {
  display: flex;
  overflow: hidden;
  margin: 16px auto;
  padding: 4px 0 4px 8px;
  width: 343px;
  background: #FFF;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, .08);
  border-radius: 10px;
  font-size: 13px;
}
.placard > img {
  width: 44px;
  height: 42px;
}
.placard-txt {
  margin-left: 12px;
  margin-right: 9px;
  flex-grow: 1;
  height: 42px;
}
.placard-new {
  border: 1px solid #ff4a59;
  color: #ff4a59;
  border-radius: 4px;
  padding: 1px 4px;
  margin-right: 6px;
}
.placard .placard-txt > * {
  height: 42px;
}
.placard van-swipe-item {
  height: 42px;
  line-height: 42px;
}

</style>
