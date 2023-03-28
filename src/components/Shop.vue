<template>
  <div class="shop">
    <div class="shop-item" @click="goShopDetail">
      <img src="https://ts1.cn.mm.bing.net/th/id/R-C.7ddef7789726d5f08a66f6e9e2754761?rik=gMApgCsDki1l3A&riu=http%3a%2f%2fwww.jiamengfei.cn%2fuploads%2fproject%2f2020%2f12%2f22%2f1608603113704.jpg&ehk=hFr%2bMNDXZju%2bKPzHJ3MfbUPtlF9jHTYFH1c1guuQkBc%3d&risl=&pid=ImgRaw&r=0" class="shopList-img" alt />
      <div>
        <div class="shop-item-det">
          <p class="shop-item-det-tit txtEllipsis shop-item-det-tit-w">山姆会员店</p>
          <div class="shop-item-det-typ">
            品牌好店
          </div>
          <div class="shop-item-det-loc">
            <div class="shop-item-det-loc-dist alignCenter">
              <p class="det-loc-font det-loc-marg1 txtEllipsis">陆家嘴</p>
              <div class="det-loc-sepa det-loc-marg2"/>
              <p class="det-loc-font">乐享生活</p>
            </div>
            <div class="shop-item-det-loc-dist alignCenter">
              <img class="shop-local" src="../assets/locate.svg" alt />
              <p class="det-loc-font">1.2km</p>
            </div>
          </div>
        </div>

        <div class="act-item alignCenter">
          <p class="C act-item-icon">券</p>
          <p class="act-item-name txtEllipsis">99包邮</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";



const router = useRouter();
const goShopDetail = function(){
  console.log(321)
  router.push({path:'/shopDetail'})
}


</script>

<style scoped>
.shop{
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  width: 343px;
  margin: 1.87vw 4vw 4.8vw;
  padding: 4vw 3.2vw;
  background-color: #fff;
  border-radius: 3.2vw;
  box-shadow: 0 2px 6px 2px rgba(102, 102, 102, .08);
}
.shop-item{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.shop-item > img{
  width: 22.4vw;
  height: 16.8vw;
  background-color: #eee;
  border-radius: 1.6vw;
  margin-right: 3.2vw;
}
.shop-item-det{
  display: flex;
  flex-direction: column;
  min-height: 16.8vw;
  justify-content: space-between;
  width: 58.4vw;
  margin-bottom: 3vw;
}
.shop-item-det-else{
  display: flex;
  flex-direction: column;
  min-height: 10.8vw;
  justify-content: space-between;
  width: 58.4vw;
  margin-bottom: 3vw;
}
.shop-item-det-tit{
  font-size: 4.27vw;
  font-weight: bold;
  line-height: 6vw;
  color: #333;
  width: 48vw;
}
.shop-item-det-tit-w {
  width: 100%;
}
.shop-item-det-typ {
  background-color: rgba(0, 184, 147, .17);
  color: #00B893;
  font-size: 13px;
  padding: 3px 5px;
  line-height: 1;
  border-radius: .8vw;
  width: fit-content;
}
.shop-item-det-loc{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 3.5vw;
}
.shop-item-det-loc-dist{
  flex-direction: row;
  justify-content: flex-end;
  line-height: 1.2;
}
.det-loc-font{
  color: #666;
}
.det-loc-marg1{
  margin-left: .7vw;
  max-width: 20vw;
}
.det-loc-marg2{
  margin: 0 1.5vw;
}
.det-loc-sepa{
  height: 1.9vw;
  width: 1px;
  background-color: #666;
}
.act-item{
  flex-direction: row;
  justify-content: start;
  margin-bottom: 4px;
}
.act-item:last-child {
  margin-bottom: 0;
}
.act-item-icon{
  width: 23px;
  height: 23px;
  text-align: center;
  line-height: 23px;
  border-radius: .53vw;
  font-size: 13px;
}

.C {
  background-color: #D6F7F0;
  color: #00CCA3;
}
.act-item-name{
  margin-left: 1.1vw;
  font-size: 3.5vw;
  max-width: 52vw;
  color: #333;
}
.shop-near{
  padding-top: 2.9vw;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
  border-top: 1px solid #e5e5e5;
}
.shop-near-left{
  flex-direction: row;
  justify-content: start;
}
.shop-near-text{
  margin-left: 1.1vw;
  color: #333;
  font-size: 13px;
}
.am-icon{
  color: #C4C4C4;
  font-size: 12px;
}
.shop-near-list{
  margin-top: 1.5vw;
  min-height: 14vw;
  max-height: 57vw;
  z-index: 0;
}
.shop-near-item{
  height: 13.9vw;
}
.shop-near-img{
  width: 12.8vw;
  height: 9.6vw;
  border-radius: 1vw;
  background-color: #eee;
  margin-right: 3.2vw;
}
.shop-near-det{
  height: 13.9vw;
  width: 67.3vw;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #E5E5E5;
}
.shop-near-det-name{
  font-size: 3.7vw;
  font-weight: bold;
  max-width: 48vw;
  color: #333;
}
.shop-near-det-loc{
  flex-direction: row;
  justify-content: flex-end;
}
img.shop-local {
  width: 3.5vw;
  height: 3.5vw;
}

.top-right-corner {
  position: absolute;
  right: 0;
  top: 0;
  color: #B1753C;
  font-size: 2.67vw;
  line-height: 2.67vw;
  background: linear-gradient(90deg, #F9EBDD 0%, #F0D3B7 100%);
  border-radius: 0 0 0 3.2vw;
  padding: 1.2vw 1.33vw 1.6vw;
}
.shop-near-list .noShop {
  text-align: center;
  font-size: 26rpx;
  color: #666;
  padding-top: 5vw;
}

</style>
