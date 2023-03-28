<template>
  <div class="detail-head">
    <div class="detail-head-up alignCenter">
      <div class="shop-pic alignCenter">
        <img class="curShopImg"
             src="https://ts1.cn.mm.bing.net/th/id/R-C.7ddef7789726d5f08a66f6e9e2754761?rik=gMApgCsDki1l3A&riu=http%3a%2f%2fwww.jiamengfei.cn%2fuploads%2fproject%2f2020%2f12%2f22%2f1608603113704.jpg&ehk=hFr%2bMNDXZju%2bKPzHJ3MfbUPtlF9jHTYFH1c1guuQkBc%3d&risl=&pid=ImgRaw&r=0"
             alt />
      </div>
      <div style="width:68.2vw;">
        <div class='hd-title'>山姆会员店</div>
        <div class="detail-subtitle justifyBetween">
          <div class="subtitle">浦东新区</div>
          <div class="share alignCenter" @click="clickShare">
            <Icon name="share" size="16" color="#27D5C2"/>
            <p>分享</p>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-head-down">
      <div style="width:75vw;" @click="goMap">
        <div class="shop-addr">
          <img class="detail-head-local" src="../assets/locate.svg" alt/>
          <p style="width:90%;">上海市高科西路2110号</p>
        </div>
        <div class="head-distance">500m</div>
      </div>
      <div class="phone-box phone" @click="makePhoneCall"/>
    </div>
  </div>

  <Part title="在线买单" className="ol-part">
    <div v-for="(rule, index) in aRuleList" :key="index"
         class="olBuy justifyBetween" :class="index%2===1?'olBuy-gray':''">
        <div class="alignCenter aRuleName">
          <p class="txtEllipsis">{{rule.ruleName}}</p>
          <div class="aRuleInf" @click="jumpToARule" />
        </div>
        <div class="justifyBetween ruleLi-info"><p class="tc-ruleName">支付优惠</p></div>
    </div>
    <button class="orderBtn aRuleListNullBtn" @click="goPayTheBill">买单</button>
  </Part>

  <!--  <div id="recdish" style="background-color:#fff;">-->
  <!--    <shopinf shopImgUrl="{{shopImgUrl}}" shopInf="{{shopDetail.brandDesp}}" dishNameList="{{shopDetail.recDishNameList}}" dishPicList="{{shopDetail.recDishPicList}}"/>-->
  <!--  </div>-->

  <Part title="所在商圈">
    <div class="com-body-ct alignCenter justifyBetween" @click="goComArea">
      <div class="alignCenter" style="width:100%;">
        <div class="com-more alignCenter justifyCenter">
          <img src="#" class="curShopImg" />
        </div>
        <div class="com-body-ct-r justifyBetween">
          <div class="com-hd-title justifyBetween txtEllipsis">
            外高桥商圈
            <Icon name="arrow" size="16"/>
          </div>
          <div class="belongCommer-shopNum">
            <div>9家优惠美食商户</div>
            <div class="belongCommer-shopNum-market">16家购物</div>
          </div>
        </div>
      </div>
    </div>
  </Part>

  <Part title="附近吃喝玩乐">
    <div class="shop-list-item" v-for="(a,i) in [1,2,3,4,5]" :key="i+a">
      <Shop />
    </div>
<!--        <abc-none showNone="{{loadedFlg}}" />-->
<!--        <abc-loading showLoading="{{loadingFlg}}"/>-->
  </Part>
</template>

<script setup>
import {ref} from "vue";

const aRuleList = ref([{ruleName:'消费满300减20'},{ruleName:'满198免运费'},{ruleName:'刷卡满500减50'}]);
</script>

<style scoped>
.detail-subtitle {
  margin-top: 2.93vw;
  display: flex;
  align-items: baseline;
}

.share {
  background-color: rgba(39, 213, 194, .1);
  font-size: 3.5vw;
  padding: 0 4.3vw 0 3.1vw;
  border-radius: 4vw 0 0 4vw;
  height: 7vw;
}

.share p {
  margin: 0 1vw;
  color: #27D5C2;
}

.v {
  font-size: 4vw;
  line-height: 20px;
  margin-left: 1.5vw;
  width: 58vw;
  color: #333;
}

.detail-head {
  background-color: #fff;
  padding-bottom: 5.3vw;
  margin-bottom: 2.7vw;
}

.curShopImg {
  height: calc(20vw - 2px);
  width: calc(26.67vw - 2px);
  border-radius: 1.3vw;
  background-color: #eee;
  border: 1px solid #ebebeb;
}

.detail-head-up {
  padding-top: 4vw;
  margin-left: 4.8vw;
}

.detail-head-down {
  display: flex;
  align-items: flex-start;
  margin-left: 4.8vw;
  margin-top: 5.3vw;
}

.detail-head-local {
  width: 3.2vw;
  height: 3.73vw;
  margin-right: 2vw;
}

.phone-box {
  border-left: 1px solid #d8d8d8;
  flex-grow: 1;
  height: 24px;
  width: 24px;
  background-size: 100% 100%;
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDhweCIgaGVpZ2h0PSI0OHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+5YiH54mHPC90aXRsZT4KICAgIDxnIGlkPSLpobXpnaItMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IjA1X+mXqOW6l+ivpuaDheWkh+S7vS00IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY5LjAwMDAwMCwgLTQxOC4wMDAwMDApIiBmaWxsPSIjMTJDN0IyIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iaWNvbi9waG9uZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjY3LjEyNDYxNSwgNDE3LjYxNTk0OCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuNjE4MDkyMTksMy4wOTc0NDgzNCBMMy4yNDUwMDk3LDcuNzc3MjMwOTEgQzIuMDU1MzQ3NDcsOS4wNTAyMDIyOSAxLjYwNDY0MDA0LDEwLjgzNTIxOTUgMi4wMzU0MTc3OSwxMi41MjMwODUgQzQuMzk1OTkzODMsMjEuNzcwNTQ4OSA5Ljg2MjMyMDg3LDI5LjU1MzM3OTUgMTcuNTc2NTg3MSwzNS45NzcxMzEgQzIzLjA2ODA4ODMsNDAuNTQ5OTYyNCAyOS4xMzA3OCw0My45OTQwNjEgMzQuOTQ0OTU3NCw0Ni40MjQyNDA2IEMzNy4xNzYyNjUyLDQ3LjM1NjkxOTMgMzkuNzU4MTc2Miw0Ni44MTQwMzU1IDQxLjQxOTk0OTksNDUuMDY3OTE2NiBMNDUuODM1NTgxOSw0MC40Mjk0ODkyIEM0Ny4zNDUwNTY2LDM4LjgzNDE0NyA0Ny4xOTE4NDgxLDM2LjMxNTU4NCA0NS41MDEwOTgsMzQuOTEzMDkyNSBMMzkuMjM3NTQ0NywyOS43MTY0ODk1IEMzNy40NTEwNywyOC4yMzQzOTg3IDM0LjgxOTU4MDQsMjguMzM2NzI3MyAzMy4xNTU4NDU3LDI5Ljk1MjE4IEwzMC40NTE4MTI3LDMyLjU3ODAyMjUgQzMwLjIzMzYwNzQsMzIuNzg5OTU0MSAyOS45MTYzNjA3LDMyLjg0ODkwNDggMjkuNjU2MjU5NiwzMi43MzI4ODM2IEMyMy40MDQ3ODkyLDI5Ljk0NTE3MjIgMTguNzc4ODgyNSwyNC42Njg0NDY4IDE1Ljc4MDg4NDMsMTkuMDcwMTM5NiBDMTUuNjMxNzUzNCwxOC43OTE3NjU0IDE1LjY3MDAwODQsMTguNDUyNTAyIDE1Ljg3NTQ2NzcsMTguMjE3MDA5NSBMMTguMzk3ODk0NiwxNS4zMjc0NzIzIEMxOS44MjE1ODk0LDEzLjY5NjU4NTIgMTkuODcwNzMyNCwxMS4yOTQwNDkgMTguNTE0ODE2NSw5LjYwNzk0NjIyIEwxMy40NTMyNzc3LDMuMzExODQ0MjEgQzExLjk4NjA0NjcsMS40ODY4NTY3OCA5LjIxODY0Njg4LDEuMzg0ODEyNDggNy42MTgwOTIxOSwzLjA5NzQ0ODM0IFogTTExLjc3MDkzNDYsNC42MTQyODQ5NCBMMTYuODMyNTM0NSwxMC45MTA0NjMgQzE3LjU1NDMwMjcsMTEuODA3OTkzMSAxNy41MjgwNDU4LDEzLjA5MTY1OTYgMTYuNzcwNDk0OCwxMy45NTk0NTc5IEwxNC4yNDc4NzQyLDE2Ljg0OTIxNzEgQzEzLjQ3MDQ1MzQsMTcuNzQwMjc4MiAxMy4zMjczNTg5LDE5LjAwOTMwNjcgMTMuODg0MDYzMywyMC4wNDg0NzUxIEMxNy4wODI4MTgzLDI2LjAyMTY2NTIgMjEuOTk2ODczOCwzMS42MjcwNzkxIDI4Ljc2OTYxNjgsMzQuNjQ3MjQwOSBDMjkuODQ3MjY4MiwzNS4xMjc5NDA0IDMxLjExNTE5MDksMzQuODkyMzM1MyAzMS45NTkxNjUzLDM0LjA3MjYyNTkgTDM0LjY2MzA5MjcsMzEuNDQ2ODg2IEMzNS41MzgyMjA4LDMwLjU5NzE1NDQgMzYuOTE1NDI0NCwzMC41NDM2MDAyIDM3Ljg1NDA0OSwzMS4zMjIyOTk2IEw0NC4xMTc2NTU0LDM2LjUxODk0NjcgQzQ0Ljg3NDIxMTIsMzcuMTQ2NTE2MiA0NC45NDMyODk2LDM4LjI4MjA4MjIgNDQuMjY3NDUyNCwzOC45OTYzNjgxIEwzOS44NTM5NDAyLDQzLjYzMjU2MTcgQzM4LjgwNTY3NTcsNDQuNzM0MDMyIDM3LjE4NDc3MDEsNDUuMDc0ODUwNyAzNS43ODQ3MDc4LDQ0LjQ4OTYyOTcgQzMwLjE1NDE2MjQsNDIuMTM2MjAzNiAyNC4yNzIyMDQyLDM4Ljc5NDc3NjIgMTguOTYzMDY0NCwzNC4zNzM3OTkxIEMxMS41Njc4MTc1LDI4LjIxNTY5ODQgNi4zNTYxNjQ3NSwyMC43OTU0NjcyIDQuMTE0MDc2OTEsMTIuMDEyMTc2MSBDMy44NTcxOTA5NCwxMS4wMDU2NTAyIDQuMTI0Mzg1MTksOS45NDc0MzMxMSA0LjgyNDM0NTgxLDkuMTk4NDU1OTUgTDkuMTk3NDI3OTMsNC41MTg2NzM3OCBDOS45MDUyNzI3LDMuNzYxMjYxMTYgMTEuMTIxMTc2OCwzLjgwNjA5NjA1IDExLjc3MDkzNDYsNC42MTQyODQ5NCBaIiBpZD0iU3Ryb2tlLTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0LjM3NTM4NSwgMjQuMzc1Mzg1KSByb3RhdGUoNS4wMDAwMDApIHRyYW5zbGF0ZSgtMjQuMzc1Mzg1LCAtMjQuMzc1Mzg1KSAiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+');
}

.hd-title {
  font-size: 4.27vw;
  font-weight: bold;
  display: block;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #111;
  line-height: 6vw;
  margin-right: 4.3vw;
}

.com-hd-title {
  font-size: 4.3vw;
  line-height: 6vw;
  font-weight: bold;
  color: #333;
}

.shop-addr {
  min-height: 3.73vw;
  display: flex;
  font-size: 3.73vw;
  font-weight: bold;
  color: #333;
  word-break: break-all;
  word-wrap: normal;
}

.orderBtn {
  width: 71px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  background: #FFA900;
  font-size: 13px;
  color: #fff;
  border-radius: 12px;
  position: absolute;
  right: 0;
}

.ol-part {
  position: relative;
  padding-bottom: 4vw;
}

.ol-part .part-head {
  padding: 0 4.3vw;
  margin-bottom: 0;
}

.ol-part .part-head .part-title {
  line-height: 25px;
}

.aRuleListNullBtn {
  position: absolute;
  right: 16px;
  top: 0;
}

.olBuy {
  padding: 1.5vw 4.3vw .3vw;
  display: flex;
  flex-direction: column;
}

.olBuy .subtext {
  margin-top: 2vw;
  font-size: 13px;
}

.olBuy-gray {
  background-color: #f8f8f8;
}
.aRuleInf {
  margin-left: 8px;
  width: 16px;
  height: 16px;
  background-size: 100%;
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aWNvbi9xdWVzdGlvbjwvdGl0bGU+CiAgICA8ZyBpZD0i6aG16Z2iLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSIwNV/pl6jlupfor6bmg4XlpIfku70tNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI2NS4wMDAwMDAsIC02NTYuMDAwMDAwKSI+CiAgICAgICAgICAgIDxyZWN0IGZpbGw9IiNGRkZGRkYiIHg9IjAiIHk9IjAiIHdpZHRoPSI3NTAiIGhlaWdodD0iMzU4MCI+PC9yZWN0PgogICAgICAgICAgICA8ZyBpZD0i57yW57uELTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA1NzcuMDAwMDAwKSIgZmlsbD0iIzk5OTk5OSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTExIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMi4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IuWIl+ihqCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDc0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i5q2j56GuLOmAmui/hyzlr7nli75fanVyYXNzaWMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzMy4wMDAwMDAsIDUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTYsMCBDNy4xNzg1NzE0MywwIDAsNy4xNzg1NzE0MyAwLDE2IEMwLDI0LjgyMTQyODYgNy4xNzg1NzE0MywzMiAxNiwzMiBDMjQuODIxNDI4NiwzMiAzMiwyNC44MjE0Mjg2IDMyLDE2IEMzMiw3LjE3ODU3MTQzIDI0LjgyMTQyODYsMCAxNiwwIFogTTE2LDI5LjcxNDI4NTcgQzguNDM1NzE0MjksMjkuNzE0Mjg1NyAyLjI4NTcxNDI5LDIzLjU2NDI4NTcgMi4yODU3MTQyOSwxNiBDMi4yODU3MTQyOSw4LjQzNTcxNDI5IDguNDM1NzE0MjksMi4yODU3MTQyOSAxNiwyLjI4NTcxNDI5IEMyMy41NjQyODU3LDIuMjg1NzE0MjkgMjkuNzE0Mjg1Nyw4LjQzNTcxNDI5IDI5LjcxNDI4NTcsMTYgQzI5LjcxNDI4NTcsMjMuNTY0Mjg1NyAyMy41NjQyODU3LDI5LjcxNDI4NTcgMTYsMjkuNzE0Mjg1NyBaIiBpZD0i5b2i54q2IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNi4xNjkwNzM1LDYuOTA5NDM5MiBDMTcuODU2NTczNSw2LjkwOTQzOTIgMTkuMjUzMjY3MSw3LjM5NjM2NjEgMjAuMzU2MzgxLDguNDkwMTk2MDggQzIxLjI0MzE0MjksOS4zNjk0OTQ4NSAyMS44MDc5ODk5LDEwLjcwOTQ5NzggMjEuODA3OTg5OSwxMi4yMTU2ODYzIEMyMS43NjgyMTIsMTMuNTQwODk5OSAyMS41MTc2OTkyLDE0LjUxNzAyNjUgMjAuNTU3MTU5LDE1Ljc1ODUxMzMgQzE5LjU5NjYxODksMTcgMTcuNzEzNzM5MSwxOC40ODQ5MDExIDE3LjU3MzU2NjgsMTguNjkzMzQ1NCBDMTcuNDQ4OTY5MiwxOC44Nzg2MjkyIDE3LjMzOTYwMzQsMTkuMTQ3MTI3MiAxNy4zMTY4MzgyLDE5LjU5Njk4NTYgTDE3LjMxMjUsMTkuNzc0Mzc1NSBMMTcuMzEyNSwyMC4xNDY5MjQ1IEwxNy4zMDEyNDg1LDIwLjE0NzQxMDcgQzE3LjI5NDc0MSwyMC45MTUwMzA0IDE2LjY3MDQ1NTYsMjEuNTM1Mjk0MSAxNS45MDEyOTk4LDIxLjUzNTI5NDEgQzE1LjEyODEwMTIsMjEuNTM1Mjk0MSAxNC41MDEyOTk4LDIwLjkwODQ5MjggMTQuNTAxMjk5OCwyMC4xMzUyOTQxIEwxNC41MDIsMjAuMTQ2NDM5MiBMMTQuNSwyMC4xNDY5MjQ1IEwxNC41LDE5Ljc3NDM3NTUgQzE0LjUsMTguODQzMDAyOSAxNC42MTQwMTYsMTguNDIzMzM0NSAxNC44NzUsMTcuOTkwMTk2MSBDMTUuNDE4NzI5NywxNy4yMzk5MTQ5IDE2LjgxNTQ3OTMsMTUuOTc1ODA3NCAxNy44LDE1LjE0NTI0ODIgQzE4Ljc4NDUyMDcsMTQuMzE0Njg4OSAxOS4xODc1LDEyLjk2MDc4NDMgMTkuMTg3NSwxMi4yMTU2ODYzIEMxOS4xODc1LDExLjQ3MDU4ODIgMTksMTAuNzI1NDkwMiAxOC40Mzc1LDEwLjE2NjY2NjcgQzE3Ljg3NSw5LjYwNzg0MzEzIDE3LjEyNSw5LjQyMTU2ODYxIDE2LjE4NzUsOS40MjE1Njg2MSBDMTQuODc1LDkuNDIxNTY4NjQgMTQuMTI1LDkuNzk0MTE3NjQgMTMuNTYyNSwxMC41MzkyMTU3IEMxMywxMS4wOTgwMzkyIDEyLjgxMjUsMTIuMDI5NDExOCAxMi44MTI1LDEzLjE0NzA1ODggQzEyLjgxMjUsMTMuOTIwMjU3NSAxMi4xODU2OTg2LDE0LjU0NzA1ODggMTEuNDEyNSwxNC41NDcwNTg4IEMxMC42ODQ3ODM2LDE0LjU0NzA1ODggMTAuMDg2NzQ3OSwxMy45OTE4Mjk5IDEwLjAxODkwODgsMTMuMjgxODg4MiBMMTAuMDEyNSwxMy4xNDcwNTg4IEwxMCwxMy4xNDcwNTg4IEMxMCwxMS4yODQzMTM3IDEwLjc2MjYxNzgsOS41Mjk5MzgzMiAxMS44MzI1NDA0LDguNDkwMTk2MDggQzEyLjk0NjExNDgsNy41MDEyNDE3NCAxNC4yOTQwNzM1LDYuOTA5NDM5MiAxNi4xNjkwNzM1LDYuOTA5NDM5MiBaIE0xNS45MDEyOTk4LDI1LjQyMzU4NDUgQzE2LjY3NDQ5ODUsMjUuNDIzNTg0NSAxNy4zMDEyOTk4LDI0Ljc5Njc4MzEgMTcuMzAxMjk5OCwyNC4wMjM1ODQ1IEMxNy4zMDEyOTk4LDIzLjI1MDM4NTggMTYuNjc0NDk4NSwyMi42MjM1ODQ1IDE1LjkwMTI5OTgsMjIuNjIzNTg0NSBDMTUuMTI4MTAxMiwyMi42MjM1ODQ1IDE0LjUwMTI5OTgsMjMuMjUwMzg1OCAxNC41MDEyOTk4LDI0LjAyMzU4NDUgQzE0LjUwMTI5OTgsMjQuNzk2NzgzMSAxNS4xMjgxMDEyLDI1LjQyMzU4NDUgMTUuOTAxMjk5OCwyNS40MjM1ODQ1IFoiIGlkPSLlvaLnirbnu5PlkIgiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i5q2j56GuLOmAmui/hyzlr7nli75fanVyYXNzaWMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzMy4wMDAwMDAsIDUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTYsMCBDNy4xNzg1NzE0MywwIDAsNy4xNzg1NzE0MyAwLDE2IEMwLDI0LjgyMTQyODYgNy4xNzg1NzE0MywzMiAxNiwzMiBDMjQuODIxNDI4NiwzMiAzMiwyNC44MjE0Mjg2IDMyLDE2IEMzMiw3LjE3ODU3MTQzIDI0LjgyMTQyODYsMCAxNiwwIFogTTE2LDI5LjcxNDI4NTcgQzguNDM1NzE0MjksMjkuNzE0Mjg1NyAyLjI4NTcxNDI5LDIzLjU2NDI4NTcgMi4yODU3MTQyOSwxNiBDMi4yODU3MTQyOSw4LjQzNTcxNDI5IDguNDM1NzE0MjksMi4yODU3MTQyOSAxNiwyLjI4NTcxNDI5IEMyMy41NjQyODU3LDIuMjg1NzE0MjkgMjkuNzE0Mjg1Nyw4LjQzNTcxNDI5IDI5LjcxNDI4NTcsMTYgQzI5LjcxNDI4NTcsMjMuNTY0Mjg1NyAyMy41NjQyODU3LDI5LjcxNDI4NTcgMTYsMjkuNzE0Mjg1NyBaIiBpZD0i5b2i54q2IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNi4xNjkwNzM1LDYuOTA5NDM5MiBDMTcuODU2NTczNSw2LjkwOTQzOTIgMTkuMjUzMjY3MSw3LjM5NjM2NjEgMjAuMzU2MzgxLDguNDkwMTk2MDggQzIxLjI0MzE0MjksOS4zNjk0OTQ4NSAyMS44MDc5ODk5LDEwLjcwOTQ5NzggMjEuODA3OTg5OSwxMi4yMTU2ODYzIEMyMS43NjgyMTIsMTMuNTQwODk5OSAyMS41MTc2OTkyLDE0LjUxNzAyNjUgMjAuNTU3MTU5LDE1Ljc1ODUxMzMgQzE5LjU5NjYxODksMTcgMTcuNzEzNzM5MSwxOC40ODQ5MDExIDE3LjU3MzU2NjgsMTguNjkzMzQ1NCBDMTcuNDQ4OTY5MiwxOC44Nzg2MjkyIDE3LjMzOTYwMzQsMTkuMTQ3MTI3MiAxNy4zMTY4MzgyLDE5LjU5Njk4NTYgTDE3LjMxMjUsMTkuNzc0Mzc1NSBMMTcuMzEyNSwyMC4xNDY5MjQ1IEwxNy4zMDEyNDg1LDIwLjE0NzQxMDcgQzE3LjI5NDc0MSwyMC45MTUwMzA0IDE2LjY3MDQ1NTYsMjEuNTM1Mjk0MSAxNS45MDEyOTk4LDIxLjUzNTI5NDEgQzE1LjEyODEwMTIsMjEuNTM1Mjk0MSAxNC41MDEyOTk4LDIwLjkwODQ5MjggMTQuNTAxMjk5OCwyMC4xMzUyOTQxIEwxNC41MDIsMjAuMTQ2NDM5MiBMMTQuNSwyMC4xNDY5MjQ1IEwxNC41LDE5Ljc3NDM3NTUgQzE0LjUsMTguODQzMDAyOSAxNC42MTQwMTYsMTguNDIzMzM0NSAxNC44NzUsMTcuOTkwMTk2MSBDMTUuNDE4NzI5NywxNy4yMzk5MTQ5IDE2LjgxNTQ3OTMsMTUuOTc1ODA3NCAxNy44LDE1LjE0NTI0ODIgQzE4Ljc4NDUyMDcsMTQuMzE0Njg4OSAxOS4xODc1LDEyLjk2MDc4NDMgMTkuMTg3NSwxMi4yMTU2ODYzIEMxOS4xODc1LDExLjQ3MDU4ODIgMTksMTAuNzI1NDkwMiAxOC40Mzc1LDEwLjE2NjY2NjcgQzE3Ljg3NSw5LjYwNzg0MzEzIDE3LjEyNSw5LjQyMTU2ODYxIDE2LjE4NzUsOS40MjE1Njg2MSBDMTQuODc1LDkuNDIxNTY4NjQgMTQuMTI1LDkuNzk0MTE3NjQgMTMuNTYyNSwxMC41MzkyMTU3IEMxMywxMS4wOTgwMzkyIDEyLjgxMjUsMTIuMDI5NDExOCAxMi44MTI1LDEzLjE0NzA1ODggQzEyLjgxMjUsMTMuOTIwMjU3NSAxMi4xODU2OTg2LDE0LjU0NzA1ODggMTEuNDEyNSwxNC41NDcwNTg4IEMxMC42ODQ3ODM2LDE0LjU0NzA1ODggMTAuMDg2NzQ3OSwxMy45OTE4Mjk5IDEwLjAxODkwODgsMTMuMjgxODg4MiBMMTAuMDEyNSwxMy4xNDcwNTg4IEwxMCwxMy4xNDcwNTg4IEMxMCwxMS4yODQzMTM3IDEwLjc2MjYxNzgsOS41Mjk5MzgzMiAxMS44MzI1NDA0LDguNDkwMTk2MDggQzEyLjk0NjExNDgsNy41MDEyNDE3NCAxNC4yOTQwNzM1LDYuOTA5NDM5MiAxNi4xNjkwNzM1LDYuOTA5NDM5MiBaIE0xNS45MDEyOTk4LDI1LjQyMzU4NDUgQzE2LjY3NDQ5ODUsMjUuNDIzNTg0NSAxNy4zMDEyOTk4LDI0Ljc5Njc4MzEgMTcuMzAxMjk5OCwyNC4wMjM1ODQ1IEMxNy4zMDEyOTk4LDIzLjI1MDM4NTggMTYuNjc0NDk4NSwyMi42MjM1ODQ1IDE1LjkwMTI5OTgsMjIuNjIzNTg0NSBDMTUuMTI4MTAxMiwyMi42MjM1ODQ1IDE0LjUwMTI5OTgsMjMuMjUwMzg1OCAxNC41MDEyOTk4LDI0LjAyMzU4NDUgQzE0LjUwMTI5OTgsMjQuNzk2NzgzMSAxNS4xMjgxMDEyLDI1LjQyMzU4NDUgMTUuOTAxMjk5OCwyNS40MjM1ODQ1IFoiIGlkPSLlvaLnirbnu5PlkIgiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+');
}

.aRuleName {
  color: #333;
  max-width: 100%;
  font-size: 15px;
  width:100%;
  position:relative;
}

.aRuleName p {
  max-width: 315px;
}

.recdish-btn {
  position: absolute;
  background-color: #f7f7f7;
  border-radius: 5px;
  color: #555;
  font-size: 14px;
  line-height: 2.2;
  width: 80px;
  text-align: center;
  top: 8px;
  left: 120px;
}

.shop-pic {
  height: 20vw;
  width: 26.67vw;
  overflow: hidden;
  margin-right: 3.2vw;
  border-radius: 1.3vw;
}

.subtitle {
  margin-top: 2.67vw;
  font-size: 13px;
  color: #666;
}

.head-distance {
  font-size: 13px;
  color: #666;
  margin-top: 1.5vw;
  margin-left: 5.2vw;
}

.title {
  font-weight: bold;
  letter-spacing: 0;
}

.com-more {
  width: 26.67vw;
  height: 20vw;
}

.com-body-ct {
  margin-top: 3.6vw;
  padding: 0 4.3vw 4vw;
}

.com-body-ct .am-icon {
  font-size: 3.2vw;
  color: #c6c6c6;
  font-weight: bold;
}

.com-body-ct-r {
  margin-left: 4vw;
  width: 90%;
  height: 20vw;
  flex-direction: column;
}

.com-subtitle {
  font-size: 2.93vw;
  margin-top: 1.6vw;
}

.com-subtitle p {
  color: #27D5C2;
  background-color: rgba(39, 213, 194, .1);
  padding: 1vw 2vw;
  border-radius: 1.33vw;
  line-height: 4.93vw;
}

.com-dist {
  font-size: 13px;
  color: #666;
  line-height: 13px;
}

.detail-com-local {
  width: 2.67vw;
  height: 3.33vw;
  margin-right: 1vw;
}

.part .shop-list-item:last-child {
  padding-bottom: 4vw;
}

.ruleLi-item {
  margin: 3.2vw 4.8vw 3vw;
}

.ruleLi-info {
  margin-left: 5.76vw;
  padding-bottom: 1.6vw;
  align-items: flex-start;
  border-bottom: #ebebeb 1px solid;
}

.olBuy .ruleLi-info {
  border-bottom: none;
  margin-left: 0;
  margin-top: 2vw;
}

.ruleLi-item:last-child div {
  border-bottom: none;
}

.ruleLi-item:last-child {
  margin-bottom: 0;
}

.tc-ruleName {
  font-size: 13px;
  line-height: 5.2vw;
  border-radius: 1vw;
  padding: 0 2vw;
  color: #ffa900;
  border: #ffa900 1px solid;
}

.detail-head .share {
  font-size: 3.2vw;
  line-height: 4.4vw;
}

.belongCommer-shopNum {
  font-size: 13px;
  line-height: 5.33vw;
  display: flex;
}

.belongCommer-shopNum div {
  color: #ffa900;
  border: #ffa900 1px solid;
  border-radius: 1vw;
  padding: 0 1.6vw;
  margin-right: 1.6vw;
}

.belongCommer-shopNum .belongCommer-shopNum-market {
  color: #0D83C9;
  border: #0d83c9 1px solid;
}

</style>
