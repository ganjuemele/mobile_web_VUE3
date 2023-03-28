<template>
  <!--   3.0我的优惠券页面   -->
  <div class="mine">
    <div class="mine-top alignCenter">
      <div class="mine-top-user justifyCenter alignCenter" style="width:343px;">
        <img class="avatar" src="#" alt="" />
        <div style="flex-grow:1;">1390****789</div>
        <div class="user-icon service" />
        <div class="user-icon mail" />
      </div>
      <div class="quick-actions">
        <div @click="jumpAct"
             v-for="(item,index) in hasCardNav" :key="index">
          <div class="quick-actions-nav" :class="item.imgName" />
          <div class="tabNav-border">{{item.txt}}</div>
        </div>
      </div>
    </div>

    <div class="mine-credit-apply" v-if="!hasCard" >
      <div class="mine-credit-apply-block">
        <div class="justifyCenter alignCenter">
          <img class="welf-sticks" alt=""/>
          <p class="mine-credit-apply-title">信用卡申请</p>
          <img class="welf-sticks" style="transform: rotateY(180deg)"/>
        </div>
        <div class="mine-credit-apply-subtitle">先消费后还款，可分期可取现，畅享信用人生</div>
        <div class="credit-apply-welfare">
          <div class="alignCenter"><img class="welf-class" />星级会员送优惠</div>
          <div class="alignCenter"><img class="welf-circle" />新户好礼等您拿</div>
          <div class="alignCenter"><img class="welf-cash-rmb" />最高额度5万元</div>
        </div>
      </div>
      <div class="chains"><div/><div/></div>
      <div class="mine-credit-apply-block">
        <div class="justifyCenter alignCenter">
          <Icon name="fire" color="#ee0a24" />
          <p class="mine-credit-apply-title">爆款信用卡</p>
          <Icon name="fire" color="#ee0a24" />
        </div>
        <div class="hot-credit-card">
          <img src="#" alt="" />
          <div style="flex-grow:1;">
            <div>
              <div class="alignCenter justifyBetween">
                <p class="hot-credit-card-name">国家宝藏卡</p><Icon name="arrow" />
              </div>
              <p class="li-dot alignCenter">1元机场贵宾/高级贵宾</p>
              <p class="li-dot alignCenter">新户抢国家宝藏纪念周边</p>
              <p class="li-dot alignCenter">卡面随您所愿，卡号随您所选</p>
            </div>
          </div>
        </div>
      </div>

      <div class="chains"><div/><div/></div>
      <div class="mine-credit-apply-block">
        <div class="justifyCenter alignCenter">
          <Icon name="arrow" class="white-right"/><Icon name="arrow" class="white-right"/>
          <p class="mine-credit-apply-title">更多信用卡</p>
          <Icon name="arrow" class="green-right"/><Icon name="arrow" class="green-right"/>
        </div>
        <div class="more-credit-card justifyBetween">
          <div v-for="(item, index) in moreCardList" :key="item.name"
                :class="index===1?'center-card':''" @click="changeCenterCard(index)">
            <img src="#" alt=""/>
            <div>{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>

<!--    <div v-else class="mine-orders">-->
<!--      <part title='我的订单'/>-->
      <!-- tab选项卡 -->
<!--      <div class="coupon-type">-->
<!--        <scroll-view class="coupon-tab justifyBetween" scroll-x>-->
<!--          <div class="{{index===TabCur?'selected':''}} {{index===beforeTab?'unselect':''}}"-->
<!--               onTap='tabSelect' v-for="{{tabNav}}" a:key="{{item.index}}" data-id="{{index}}"-->
<!--               data-TabCur="{{TabCur}}" data-FilterCur="{{FilterCur}}">-->
<!--            <text>{{ tabNav[index] }}</text>-->
<!--            <div class="tabNav-border"></div>-->
<!--          </div>-->
<!--        </scroll-view>-->
<!--        <div class="ct-filter justifyBetween">-->
<!--          <div class="filter-btn {{index ===FilterCur? 'filter-btn-sel' : ''}}"-->
<!--               catchTap="filterSelect"-->
<!--               a:for="{{filterTab}}" a:key="{{index}}"-->
<!--               data-id="{{index}}" data-filterTxt="{{item}}"-->
<!--          >-->
<!--            {{ item }}-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

      <!--      <template a:if="{{ListNull || !ifLogin}}" is="listNull" data="{{ifLogin, imgUrl, TabCur, tabNav, filterTxt}}"/>-->

      <!-- 票券列表 -->
      <!--      <scroll-view a:else scroll-y class="scrollView">-->
      <!--        <div class="coupon-list filterTop" a:for="{{myList}}" a:key="{{index}}">-->
      <!--          <template is="{{TabCur===3?'swipe':TabCur===4?'repay':TabCur===5?'benefit':'coupon'}}" data="{{item, imgUrl, tCStatusImg, actPicUrl}}"/>-->
      <!--        </div>-->

      <!--        <div class="abc-hint filterTop" a:if="{{noMoreFlg}}">-->
      <!--          <text>没有更多了</text>-->
      <!--        </div>-->

      <!--        <div a:if="{{loadingFlg}}" style="padding:2vw 0;position:relative;" class="filterTop">-->
      <!--          <abc-loading showLoading="{{loadingFlg}}"/>-->
      <!--        </div>-->
      <!--      </scroll-view>-->

      <!-- 选择门店 -->
      <!--      <template is="selectStore" data="{{shopList, showSelectStore, tabbarHeight, acNo, selStoreNoMoreFlg, selStoreIsLoadingMore}}"/>-->
<!--    </div>-->

    <!--    <ol-service showService="{{ifLogin}}" hiddenService="{{hiddenService}}"/>-->
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";

const hasCard = ref(false);
const hasCardNav = [
  {txt: '我要还款', appId: '30509021', imgName: 'repay'},
  {txt: '银行卡', appId: '', imgName: 'card'},
  {txt: '积分查询', appId: '30724024', imgName: 'point'},
  {txt: '额度调整', appId: '30724031', imgName: 'edu'}
],
noCardNav = [
  {txt: '积分商城', appId: '', imgName: 'point'},
  {txt: '影票', appId: '', imgName: 'movie'},
  {txt: '权益精选', appId: '', imgName: 'curation'},
  {txt: '高端专享', appId: '', imgName: 'highend'}
],
moreCardList = reactive([{name: '生肖卡国潮版'}, {name: '星座卡'}, {name: '大闹天宫卡'}]);
function changeCenterCard(e) { //切换中间的卡片
  let cur = moreCardList[e];
  moreCardList[e] = moreCardList[1];
  moreCardList[1] = cur;
}
</script>

<style scoped>
.mine {
  padding-bottom: 88px;
}
.mine-top, .mine-top * {
  box-sizing: border-box;
}
.mine-top {
  flex-direction: column;
  background-color: #fff;
  padding-top: 6px;
  padding-bottom: 12px;
}
.mine-top .avatar {
  width: 44px;
  height: 44px;
  margin-right: 14px;
  border-radius: 50%;
  border: 1px solid red;
}
.mine-top-user {
  margin-bottom: 16px;
}
.mine-top .user-icon {
  width: 20px;
  height: 20px;
  margin-left: 16px;
  background-size: 100% 100%;
}
.user-icon.service {
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+a2VmdTwvdGl0bGU+CiAgICA8ZyBpZD0i6aG16Z2iLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLmiJHnmoRf5pyJ5Y2h5peg6K6i5Y2V5aSH5Lu9LTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MDIuMDAwMDAwLCAtMjEyLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0ia2VmdSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjAyLjAwMDAwMCwgMjEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9ouWkh+S7vS0xNyIgc3Ryb2tlPSIjOTc5Nzk3IiBmaWxsPSIjRDhEOEQ4IiBvcGFjaXR5PSIwIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtMzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDAwMDAwLCA1LjAwMDAwMCkiIHN0cm9rZT0iIzU1NTU1NSIgc3Ryb2tlLXdpZHRoPSIzIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjguMDY0NTE2MSwxMi41ODA2NDUyIEMyOC4wNjQ1MTYxLDUuNjMyNTQ2NyAyMi40MzE5Njk0LDAgMTUuNDgzODcxLDAgQzguNTM1NzcyNSwwIDIuOTAzMjI1ODEsNS42MzI1NDY3IDIuOTAzMjI1ODEsMTIuNTgwNjQ1MiIgaWQ9Iui3r+W+hCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgeD0iMjUuMTYxMjkwMyIgeT0iMTMuNTQ4Mzg3MSIgd2lkdGg9IjUuODA2NDUxNjEiIGhlaWdodD0iOS42Nzc0MTkzNSIgcng9IjIiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjguMDY0NTE2MSwyMy4yMjU4MDY1IEwyOC4wNjQ1MTYxLDI1LjE2MTI5MDMgQzI4LjA2NDUxNjEsMjcuODMzNjM1OSAyNS44OTgxNTIsMzAgMjMuMjI1ODA2NSwzMCBMMTUuNDgzODcxLDMwIiBpZD0i6Lev5b6EIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2i5aSH5Lu9LTIwIiB4PSIwIiB5PSIxMy41NDgzODcxIiB3aWR0aD0iNS44MDY0NTE2MSIgaGVpZ2h0PSI5LjY3NzQxOTM1IiByeD0iMiI+PC9yZWN0PgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");
}
.user-icon.mail {
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+eGluZmVuZzwvdGl0bGU+CiAgICA8ZyBpZD0i6aG16Z2iLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLmiJHnmoRf5pyJ5Y2h5peg6K6i5Y2V5aSH5Lu9LTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NzQuMDAwMDAwLCAtMjEyLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0ieGluZmVuZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjc0LjAwMDAwMCwgMjEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9ouWkh+S7vS0xNyIgc3Ryb2tlPSIjOTc5Nzk3IiBmaWxsPSIjRDhEOEQ4IiBvcGFjaXR5PSIwIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxwb2x5bGluZSBpZD0i6Lev5b6EIiBzdHJva2U9IiM1NTU1NTUiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC4wMDAwMDAsIDE3LjUwMDAwMCkgc2NhbGUoMSwgLTEpIHRyYW5zbGF0ZSgtMjAuMDAwMDAwLCAtMTcuNTAwMDAwKSAiIHBvaW50cz0iNCAyMiAyMCAxMyAzNiAyMiI+PC9wb2x5bGluZT4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIHN0cm9rZT0iIzU1NTU1NSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHg9IjQiIHk9IjgiIHdpZHRoPSIzMiIgaGVpZ2h0PSIyNCIgcng9IjQiPjwvcmVjdD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");
}
.quick-actions {
  width: 343px;
  background: #FFF;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, .08);
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding: 0 16px;
  font-size: 14px;
}
.quick-actions > div {
  padding: 16px 0;
  width: 100%;
}
.quick-actions .quick-actions-nav {
  width: 32px;
  height: 32px;
  margin: 0 auto 10px;
  background-size: 100% 100%;
}
.mine-top-level {
  background-color: #f7f7f8;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,.08);
  border-radius: 10px;
  padding: 2px 6px;
  width: fit-content;
  color: #666;
  margin-top: 4px;
}
.point {
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+amlmZW5jaGF4dW48L3RpdGxlPgogICAgPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5oiR55qEX+acieWNoeWkh+S7vS01IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDIyLjAwMDAwMCwgLTM0MC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMi4wMDAwMDAsIDMwOC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLpgJrnlKhf56ev5YiGaWNvbivmloflrZflpIfku70tMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQ3LjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IumAmueUqF/np6/liIYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQzLjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9ouWkh+S7vS05IiBmaWxsPSIjQkZCRkJGIiBvcGFjaXR5PSIwIiB4PSIwIiB5PSIwIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0xOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuMDAwMDAwLCAxMC4wMDAwMDApIiBzdHJva2Utd2lkdGg9IjMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBzdHJva2U9IiM1NTU1NTUiIGN4PSIyMiIgY3k9IjIyIiByPSIyMiI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjcuMjY0NjEyNiwxOC4zMDI0OTg3IEMyNy4yNzg4MTg5LDE1LjQ0OTkzMjcgMjUuNDk0NDkzMywxNC4wMjM2NDk3IDIxLjkxMTYzNTgsMTQuMDIzNjQ5NyBDMTguMzI4Nzc4MiwxNC4wMjM2NDk3IDE2LjYwMzU5NzYsMTUuNDQ5OTMyNyAxNi43MzYwOTM5LDE4LjMwMjQ5ODcgQzE2LjUzMTA1MSwyMC42MTQzMzQ5IDE4LjI4NDYzNjksMjEuNzcwMjUzMSAyMS45OTY4NTE1LDIxLjc3MDI1MzEgQzI1LjcwOTA2NjIsMjEuNzcwMjUzMSAyNy40NjQ5ODY1LDIzLjAwODQzNTkgMjcuMjY0NjEyNiwyNS40ODQ4MDE1IEMyNy4yNjQxOTIxLDI4LjQ3OTE2NzMgMjUuNTA5MzMzOSwyOS45NzYzNTAzIDIyLjAwMDAzNzksMjkuOTc2MzUwMyBDMTguNDkwNzQxOSwyOS45NzYzNTAzIDE2LjczNjA5MzksMjguNDc5MTY3MyAxNi43MzYwOTM5LDI1LjQ4NDgwMTUiIGlkPSLot6/lvoQtMiIgc3Ryb2tlPSIjMDBCODkzIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT0iMjEuOTExNjM1OCIgeTE9IjEzLjAyNzA2NTEiIHgyPSIyMS45MTE2MzU4IiB5Mj0iMTEuNjIxNDg3MyIgaWQ9Iui3r+W+hC0zIiBzdHJva2U9IiMwMEI4OTMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9saW5lPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9IjIxLjkxMTYzNTgiIHkxPSIzMS45MzQ1MDIzIiB4Mj0iMjEuOTExNjM1OCIgeTI9IjMwLjUyODkyNDUiIGlkPSLot6/lvoQtM+Wkh+S7vSIgc3Ryb2tlPSIjMDBCODkzIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");
}
.edu {
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+ZWR1dGlhb3poZW5nPC90aXRsZT4KICAgIDxnIGlkPSLpobXpnaItMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuaIkeeahF/mnInljaHlpIfku70tNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU3OS4wMDAwMDAsIC0zNDAuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzIuMDAwMDAwLCAzMDguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i5pyJ5Y2hX+mineW6puiwg+aVtGljb24r5paH5a2X5aSH5Lu9IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MDQuMDAwMDAwLCAzMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i5pyJ5Y2hX+mineW6puiwg+aVtCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDMuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2i5aSH5Lu9LTYiIGZpbGw9IiNCRkJGQkYiIG9wYWNpdHk9IjAiIHg9IjAiIHk9IjAiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC4wMDAwMDAsIDEwLjAwMDAwMCkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00NCwyMC4yODMxNDggTDQ0LDQyLjMwNzY5MjMgQzQ0LDQzLjI0MjMyOCA0My4yNDIzMjgsNDQgNDIuMzA3NjkyMyw0NCBMMS42OTIzMDc2OSw0NCBDMC43NTc2NzE5NjIsNDQgMCw0My4yNDIzMjggMCw0Mi4zMDc2OTIzIEwwLDEuNjkyMzA3NjkgQzAsMC43NTc2NzE5NjIgMC43NTc2NzE5NjIsMCAxLjY5MjMwNzY5LDAgTDI1LjA0NTU4NDUsMCIgaWQ9Iui3r+W+hCIgc3Ryb2tlPSIjNTU1NTU1Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT0iNy4zMzMzMzMzMyIgeTE9IjI3LjUiIHgyPSIyNC4wOTUyMzgxIiB5Mj0iMjcuNSIgaWQ9Iui3r+W+hC04IiBzdHJva2U9IiM1NTU1NTUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvbGluZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5lIHgxPSI3LjMzMzMzMzMzIiB5MT0iMzUuODgwOTUyNCIgeDI9IjM2LjY2NjY2NjciIHkyPSIzNS44ODA5NTI0IiBpZD0i6Lev5b6ELTjlpIfku70iIHN0cm9rZT0iIzU1NTU1NSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9saW5lPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSLot6/lvoQtMTEiIHN0cm9rZT0iIzAwQjg5MyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgcG9pbnRzPSI3LjMzMzMzMzMzIDE2Ljc2MTkwNDggMTUuNzE0Mjg1NyA3LjI1Njg5MTE2IDI2LjMyMTQxMjYgMTYuNzYxOTA0OCA0NCAwIDM4LjE2MjU5NjIgMCI+PC9wb2x5bGluZT4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");
}
.repay {
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+6YCa55SoX+enr+WIhjwvdGl0bGU+CiAgICA8ZyBpZD0i6aG16Z2iLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLmiJHnmoRf5pyJ5Y2h5aSH5Lu9LTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDcuMDAwMDAwLCAtMzQwLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i57yW57uELTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMyLjAwMDAwMCwgMzA4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IumAmueUqF/np6/liIZpY29uK+aWh+Wtl+Wkh+S7vS0xMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzIuMDAwMDAwLCAzMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i6YCa55SoX+enr+WIhiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDMuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2i5aSH5Lu9LTkiIGZpbGw9IiNCRkJGQkYiIG9wYWNpdHk9IjAiIHg9IjAiIHk9IjAiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iaG9tZV9pY29uX2hvbWVpbXByb3ZlbWVudCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2i5aSH5Lu9LTE1IiBmaWxsLW9wYWNpdHk9IjAiIGZpbGw9IiNEOEQ4RDgiIHg9IjAiIHk9IjAiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0xNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuMDAwMDAwLCAxNC4wMDAwMDApIiBzdHJva2Utd2lkdGg9IjMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNC4zOSwzNS43ODI5NTc4IEwyLjQ3MSwzNS43ODI5NTc4IEMxLjEwNiwzNS43ODI5NTc4IDAsMzQuNjUyMjE2MyAwLDMzLjI1NjY4MSBMMCwyLjUyNjI3NjgyIEMwLDEuMTMwNzQxNDcgMS4xMDYsMCAyLjQ3MSwwIEw0MS41MywwIEM0Mi44OTQsMCA0NCwxLjEzMDc0MTQ3IDQ0LDIuNTI2Mjc2ODIgTDQ0LDE3LjMwMTU3MTMiIGlkPSJTdHJva2UtMeWkh+S7vS0yIiBzdHJva2U9IiM1NTU1NTUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtMTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMyLjgyNjU5NSwgMjUuMjUxNDIzKSIgc3Ryb2tlPSIjMDBDQ0EzIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT0iMC40NTQ5NTMzOTYiIHkxPSI5LjE2Mzk1MDc4IiB4Mj0iMC41MDE1NjgzNDQiIHkyPSIwLjQ1OTk4ODA4IiBpZD0iU3Ryb2tlLTXlpIfku70tNyI+PC9saW5lPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT0iMC40NTQ5NTMzOTYiIHkxPSIwLjQ1OTk4ODA4IiB4Mj0iOS4wNjM2NDkwNSIgeTI9IjAuNTA3MTE4ODg3IiBpZD0iU3Ryb2tlLTXlpIfku70tOCI+PC9saW5lPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOC4xNTk0NDk3MSwxMS43NDg1NzcgQzcuNzUzNTQyOTIsNi4yNDgwNTU1IDUuMjAwOTE1NzksMi43ODc3MjQ1IDAuNTAxNTY4MzQ0LDEuMzY3NTg0IiBpZD0i6Lev5b6ELTYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9IjAuOTU2NTIxNzM5IiB5MT0iMTMuMDU1OTQ0MSIgeDI9IjQzLjg4MjE4MSIgeTI9IjEyLjgyODM4MzgiIGlkPSJTdHJva2UtN+Wkh+S7vSIgc3Ryb2tlPSIjNTU1NTU1Ij48L2xpbmU+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");
}
.card {
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+6YCa55SoX+enr+WIhjwvdGl0bGU+CiAgICA8ZyBpZD0i6aG16Z2iLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLmiJHnmoRf5pyJ5Y2h5aSH5Lu9LTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNjQuMDAwMDAwLCAtMzQwLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i57yW57uELTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMyLjAwMDAwMCwgMzA4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IumAmueUqF/np6/liIZpY29uK+aWh+Wtl+Wkh+S7vS0xMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg5LjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IumAmueUqF/np6/liIYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQzLjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9ouWkh+S7vS05IiBmaWxsPSIjQkZCRkJGIiBvcGFjaXR5PSIwIiB4PSIwIiB5PSIwIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9ImhvbWVfaWNvbl9ob21laW1wcm92ZW1lbnQiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9ouWkh+S7vS0xNSIgZmlsbC1vcGFjaXR5PSIwIiBmaWxsPSIjRDhEOEQ4IiB4PSIwIiB5PSIwIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLjAwMDAwMCwgMTMuMDAwMDAwKSIgc3Ryb2tlLXdpZHRoPSIzIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNCwwIEw0MCwwIEM0Mi4yMDkxMzksLTQuMDU4MTIyNTFlLTE2IDQ0LDEuNzkwODYxIDQ0LDQgTDQ0LDMzIEM0NCwzNS4yMDkxMzkgNDIuMjA5MTM5LDM3IDQwLDM3IEw0LDM3IEMxLjc5MDg2MSwzNyAyLjcwNTQxNWUtMTYsMzUuMjA5MTM5IDAsMzMgTDAsNCBDLTIuNzA1NDE1ZS0xNiwxLjc5MDg2MSAxLjc5MDg2MSw0LjA1ODEyMjUxZS0xNiA0LDAgWiIgaWQ9IuefqeW9ouWkh+S7vSIgc3Ryb2tlPSIjNTU1NTU1Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9IjAiIHkxPSIxMy40NTQ1NDU1IiB4Mj0iNDQiIHkyPSIxMy40NTQ1NDU1IiBpZD0i6Lev5b6ELTE5IiBzdHJva2U9IiM1NTU1NTUiPjwvbGluZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT0iNy4yNTY1NzI5NiIgeTE9IjIzLjc4Njk1MjQiIHgyPSIxNy40MTA0MTkxIiB5Mj0iMjMuNzg2OTUyNCIgaWQ9Iui3r+W+hC0yMCIgc3Ryb2tlPSIjMDBDQ0EzIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");
}
.movie {
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+eWluZ3BpYW88L3RpdGxlPgogICAgPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5oiR55qEX+aXoOWNoeWkh+S7vS02IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjY0LjAwMDAwMCwgLTM0MC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0zNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIxLjAwMDAwMCwgMzQwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0yMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDMuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaLlpIfku70iIHN0cm9rZT0iIzk3OTc5NyIgc3Ryb2tlLXdpZHRoPSIyLjEzMzMzMzMzIiBmaWxsPSIjRDhEOEQ4IiBvcGFjaXR5PSIwIiB4PSIwIiB5PSIwIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLjAwMDAwMCwgMTAuMDAwMDAwKSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTM3LjE3NzEyMjMsMzcuOTI2NjAzOCBDNDEuMzgwNjA4MywzMy45MTk3MjU5IDQ0LDI4LjI2NTc1ODggNDQsMjIgQzQ0LDkuODQ5NzM1NSAzNC4xNTAyNjQ1LDAgMjIsMCBDOS44NDk3MzU1LDAgMCw5Ljg0OTczNTUgMCwyMiBDMCwzNC4xNTAyNjQ1IDkuODQ5NzM1NSw0NCAyMiw0NCBMNDEuOTcwMTM5Miw0NCIgaWQ9Iui3r+W+hCIgc3Ryb2tlPSIjNTU1NTU1IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBzdHJva2U9IiNGRDgyN0EiIGN4PSIyMy44MzMzMzMzIiBjeT0iMzMiIHI9IjMuNjY2NjY2NjciPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIblvaLlpIfku70tMiIgc3Ryb2tlPSIjRkQ4MjdBIiBjeD0iMzMiIGN5PSIyMC4xNjY2NjY3IiByPSIzLjY2NjY2NjY3Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2i5aSH5Lu9LTMiIHN0cm9rZT0iI0ZEODI3QSIgY3g9IjExIiBjeT0iMjMuODMzMzMzMyIgcj0iMy42NjY2NjY2NyI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9IuakreWchuW9ouWkh+S7vS01IiBzdHJva2U9IiNGRDgyN0EiIGN4PSIyMC4xNjY2NjY3IiBjeT0iMTEiIHI9IjMuNjY2NjY2NjciPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");
}
.highend {
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+Z2FvZHVhbnpodWFueGlhbmc8L3RpdGxlPgogICAgPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5oiR55qEX+aXoOWNoeWkh+S7vS02IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTc5LjAwMDAwMCwgLTM0MS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC00MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTM2LjAwMDAwMCwgMzQwLjUwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0xNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDMuMDAwMDAwLCAwLjUwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIHN0cm9rZT0iIzk3OTc5NyIgZmlsbD0iI0Q4RDhEOCIgb3BhY2l0eT0iMCIgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI2MyIgaGVpZ2h0PSI2MyI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLjAwMDAwMCwgMTIuMDAwMDAwKSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjMiPgogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0i55+p5b2iIiBzdHJva2U9IiM1NTU1NTUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBvaW50cz0iNy45NTQ2NDk2MSAwIDM2LjIyMjU1OTQgMCA0NCAxNC4zOTYwNjk2IDIyLjA4ODYwNDUgNDAgMi45MDU3NDEwMmUtMTYgMTQuMzk2MDY5NiI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWxpbmUgaWQ9Iui3r+W+hCIgc3Ryb2tlPSIjMDBDQ0EzIiBwb2ludHM9IjMwLjYzMTQ2MzkgMTguNzE1OTAwMyAyMi4wODg2MDQ1IDI4LjY5ODQxMjcgMTMuNTg0ODA4MiAxOC44NDEyNjYzIj48L3BvbHlsaW5lPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");
}
.curation {
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+cXVhbnlpamluZ3h1YW48L3RpdGxlPgogICAgPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5oiR55qEX+aXoOWNoeWkh+S7vS02IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDIyLjAwMDAwMCwgLTM0MC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IumAmueUqF/np6/liIZpY29uK+aWh+Wtl+Wkh+S7vS0xNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzc5LjAwMDAwMCwgMzQwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IumAmueUqF/np6/liIYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQzLjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2i5aSH5Lu9LTkiIGZpbGw9IiNCRkJGQkYiIG9wYWNpdHk9IjAiIHg9IjAiIHk9IjAiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSLnp6/liIblpIfku70iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDAwMDAwLCA1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2i5aSH5Lu9LTE3IiBmaWxsLW9wYWNpdHk9IjAiIGZpbGw9IiNEOEQ4RDgiIHg9IjAiIHk9IjAiIHdpZHRoPSI1NCIgaGVpZ2h0PSI1NCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNi42NzczNjk3NywxNC4wNzI2MzYxIEwxNS44Nzk3MTM0LDIyLjE0MzkxOTYgQzE2LjIzMDA0MzcsMjIuNDUxMTkwOCAxNi43NjMxMzUsMjIuNDE2Mjg0NSAxNy4wNzA0MDYyLDIyLjA2NTk1NDIgQzE3LjA5NTUzNTcsMjIuMDM3MzAzMyAxNy4xMTg2OTUxLDIyLjAwNjk4MjggMTcuMTM5NzI1NCwyMS45NzUyMDEgTDI2LjUzMjUyNTUsNy43ODA0NDQ5MSBDMjYuNzg5Njc1LDcuMzkxODMwNjkgMjcuMzEzMTcsNy4yODUyNTc1NSAyNy43MDE3ODQzLDcuNTQyNDA3MTQgQzI3Ljc4OTQxNjUsNy42MDAzOTQxOSAyNy44NjU0NDU5LDcuNjc0MjQwMzcgMjcuOTI1OTYxLDcuNzYwMTQ2MzUgTDM3LjkzODUyNzYsMjEuOTczNzk0NSBDMzguMjA2ODg3NywyMi4zNTQ3NTM0IDM4LjczMzI2NDksMjIuNDQ2MDMyOCAzOS4xMTQyMjM5LDIyLjE3NzY3MjYgQzM5LjE1MDMwODUsMjIuMTUyMjUzNCAzOS4xODQzNDI5LDIyLjEyNDA0MTkgMzkuMjE2MDEzNiwyMi4wOTMyOTc4IEw0Ny4yNzM4OTc4LDE0LjI3MTE3NzMgQzQ3LjYwODI1NzgsMTMuOTQ2NjAwMiA0OC4xNDI0MzE5LDEzLjk1NDUzMDggNDguNDY3MDA5LDE0LjI4ODg5MDkgQzQ4LjY0MDc0ODEsMTQuNDY3ODY2NiA0OC43MjYzOTI5LDE0LjcxNDU0MzggNDguNzAwOTQzNCwxNC45NjI2NzY1IEw0NS44NzMzMzYyLDQyLjUzMTg0NzQgQzQ1LjY5Njc2MTcsNDQuMjUzNDQ4NyA0NC4yNDY1ODE1LDQ1LjU2MjUgNDIuNTE1OTQ4OCw0NS41NjI1IEwxMS40ODQwNTEyLDQ1LjU2MjUgQzkuNzUzNDE4NSw0NS41NjI1IDguMzAzMjM4MzMsNDQuMjUzNDQ4NyA4LjEyNjY2Mzg0LDQyLjUzMTg0NzQgTDUuMjgxNjU5MTksMTQuNzkzMDUyMSBDNS4yMzQxMTQ3MywxNC4zMjk0OTM2IDUuNTcxMzYwNzEsMTMuOTE1MTYyOSA2LjAzNDkxOTE3LDEzLjg2NzYxODQgQzYuMjY4MjU3MjIsMTMuODQzNjg2MyA2LjUwMTAyNjU1LDEzLjkxNzk2NzIgNi42NzczNjk3NywxNC4wNzI2MzYxIFoiIGlkPSLnn6nlvaIiIHN0cm9rZT0iIzU1NTU1NSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9IjE4LjU2MjUiIHkxPSIzNS44NTkzNzUiIHgyPSIzNS40Mzc1IiB5Mj0iMzUuODU5Mzc1IiBpZD0i6Lev5b6ELTQiIHN0cm9rZT0iIzAwQ0NBMyIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvbGluZT4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");
}



.mine-credit-apply, .mine-credit-apply * {
  box-sizing: border-box;
}
.mine-credit-apply {
  font-size: 13px;
  background-color: rgba(0, 184, 147, .11);
  border-radius: 6px;
  width: 343px;
  margin: 0 auto;
  padding-top: 12px;
  padding-bottom: 12px;
}
.mine-credit-apply-block {
  background-color: #fff;
  margin: 0 auto 8px;
  padding: 18px 0 16px;
  border-radius: 6px;
  text-align: center;
  width: 319px;
}
.mine-credit-apply-block:last-child {
  margin-bottom: 0;
}
.mine-credit-apply-title {
  font-size: 16px;
  color: #222;
  margin: 0 8px;
  font-weight: bold;
}
.mine-credit-apply-subtitle {
  color: #999;
  margin: 6px 0 16px;
}
.mine-credit-apply-block img {
  height: 16px;
  width: 16px;
}
.credit-apply-welfare {
  margin-left: 107px;
}
.credit-apply-welfare div {
  margin-top: 10px;
}
.credit-apply-welfare img {
  margin-right: 4px;
}
.hot-credit-card {
  display: flex;
  margin: 16px 12px 6px 0;
}
.hot-credit-card img {
  width: 78px;
  height: 50px;
  border: 1px solid red;
  margin: 0 11px 0 12px;
}
.hot-credit-card > div > div {
  flex-direction: column;
}
.hot-credit-card > div > div > div {
  color: #333;
}
.hot-credit-card-name {
  font-size: 14px;
  color: #333;
  font-weight: bold;
}
.li-dot {
  margin: 5px 0;
}
.hot-credit-card .li-dot:before {
  content: '';
  position: relative;
  width: 4px;
  height: 4px;
  background-color: #00b893;
  border-radius: 50%;
  margin-right: 6px;
}
.green-right {
  color: #00b893;
  width: 6px;
}
.white-right {
  color: white;
  width: 7px;
}
.more-credit-card {
  padding: 21px 19px;
  align-items: baseline;
  font-size: 12px;
  color: #333;
}
.more-credit-card img {
  width: 75px;
  height: 117px;
  border: 1px solid red;
  margin-bottom: 8px;
}
.center-card {
  width: 100px;
}
.center-card img {
  width: 100px;
  height: 150px;
}
.chains {
  position: relative;
  top: -17px;
}
.chains > div {
  background-color: #B9E7Dc;
  width: 4px;
  height: 26px;
  border-radius: 2px;
  position: absolute;
  z-index: 1;
  left: 50px;
}
.chains>div:last-child {
  left: 289px;
}
.chains> div:before,.chains> div:after {
  background-color: #72C5B2;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: absolute;
  clear: both;
  content: '';
  z-index: -2;
  display: block;
  left: -2px;
  top: -4px;
}
.chains>div:after{
  top: 22px;
}

.welf-circle {
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+eGluaHU8L3RpdGxlPgogICAgPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5oiR55qEX+aXoOWNoeWkh+S7vS02IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjcwLjAwMDAwMCwgLTc1MS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0xMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjcwLjAwMDAwMCwgNzQ4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IjMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIGZpbGw9IiNEOEQ4RDgiIG9wYWNpdHk9IjAiIHg9IjAiIHk9IjAiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC44MDAwMDAsIDAuODAwMDAwKSIgc3Ryb2tlLXdpZHRoPSIyLjUzMzMzMzMzIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgc3Ryb2tlPSIjNTU1NTU1IiB4PSIyLjk1NTU1NTU2IiB5PSI0LjY0NDQ0NDQ0IiB3aWR0aD0iMjQuNDg4ODg4OSIgaGVpZ2h0PSIyNC40ODg4ODg5IiByeD0iMTIuMjQ0NDQ0NCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2iIiBzdHJva2U9IiMwMEI4OTMiIGZpbGw9IiNGRkZGRkYiIHg9IjExLjQiIHk9IjEuMjY2NjY2NjciIHdpZHRoPSI3LjYiIGhlaWdodD0iNy42IiByeD0iMy44Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaLlpIfku70tNCIgc3Ryb2tlPSIjMDBCODkzIiBmaWxsPSIjRkZGRkZGIiB4PSIxLjI2NjY2NjY3IiB5PSIyMS41MzMzMzMzIiB3aWR0aD0iNy42IiBoZWlnaHQ9IjcuNiIgcng9IjMuOCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2i5aSH5Lu9LTUiIHN0cm9rZT0iIzAwQjg5MyIgZmlsbD0iI0ZGRkZGRiIgeD0iMjEuNTMzMzMzMyIgeT0iMjEuNTMzMzMzMyIgd2lkdGg9IjcuNiIgaGVpZ2h0PSI3LjYiIHJ4PSIzLjgiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");
}
.welf-class {
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+eGluZ2ppPC90aXRsZT4KICAgIDxnIGlkPSLpobXpnaItMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuaIkeeahF/ml6DljaHlpIfku70tNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3MC4wMDAwMDAsIC02OTQuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjcwLjAwMDAwMCwgNjkxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIGZpbGw9IiNEOEQ4RDgiIG9wYWNpdHk9IjAiIHg9IjAiIHk9IjAiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi40MDAwMDAsIDEuNjAwMDAwKSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIHN0cm9rZT0iIzU1NTU1NSIgeD0iMCIgeT0iMi4yMDAxODg4NyIgd2lkdGg9IjEwLjYyMzQ1MTYiIGhlaWdodD0iMTAuNjIzNDUxNiIgcng9IjIuMjY5OTE2OTIiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9ouWkh+S7vS0yIiBzdHJva2U9IiM1NTU1NTUiIHg9IjAiIHk9IjE3LjM3NjU0ODQiIHdpZHRoPSIxMC42MjM0NTE2IiBoZWlnaHQ9IjEwLjYyMzQ1MTYiIHJ4PSIyLjI2OTkxNjkyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNy40NDYyNzY0LDIuMjAwMTg4ODcgTDIzLjUyOTg5NDIsMi4yMDAxODg4NyBDMjQuNzgzNTM0NywyLjIwMDE4ODg3IDI1Ljc5OTgxMTEsMy4yMTY0NjUzIDI1Ljc5OTgxMTEsNC40NzAxMDU4IEwyNS43OTk4MTExLDEwLjU1MzcyMzYgQzI1Ljc5OTgxMTEsMTEuODA3MzY0MSAyNC43ODM1MzQ3LDEyLjgyMzY0MDUgMjMuNTI5ODk0MiwxMi44MjM2NDA1IEwxNy40NDYyNzY0LDEyLjgyMzY0MDUgQzE2LjE5MjYzNTksMTIuODIzNjQwNSAxNS4xNzYzNTk1LDExLjgwNzM2NDEgMTUuMTc2MzU5NSwxMC41NTM3MjM2IEwxNS4xNzYzNTk1LDQuNDcwMTA1OCBDMTUuMTc2MzU5NSwzLjIxNjQ2NTMgMTYuMTkyNjM1OSwyLjIwMDE4ODg3IDE3LjQ0NjI3NjQsMi4yMDAxODg4NyBaIiBpZD0i55+p5b2i5aSH5Lu9IiBzdHJva2U9IiMwMEI4OTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLjQ4ODA4NSwgNy41MTE5MTUpIHJvdGF0ZSgtMzE1LjAwMDAwMCkgdHJhbnNsYXRlKC0yMC40ODgwODUsIC03LjUxMTkxNSkgIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaLlpIfku70tMyIgc3Ryb2tlPSIjNTU1NTU1IiB4PSIxNS4xNzYzNTk1IiB5PSIxNy4zNzY1NDg0IiB3aWR0aD0iMTAuNjIzNDUxNiIgaGVpZ2h0PSIxMC42MjM0NTE2IiByeD0iMi4yNjk5MTY5MiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");
}
.welf-cash-rmb {
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+ZWR1PC90aXRsZT4KICAgIDxnIGlkPSLpobXpnaItMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuaIkeeahF/ml6DljaHlpIfku70tNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3MC4wMDAwMDAsIC04MDguMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtMTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI3MC4wMDAwMDAsIDgwNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2iIiBmaWxsPSIjRDhEOEQ4IiBvcGFjaXR5PSIwIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2iIiBzdHJva2U9IiM1NTU1NTUiIHN0cm9rZS13aWR0aD0iMi40IiB4PSIyIiB5PSIyIiB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHJ4PSIxNCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNy4zMTA0LDIzLjIgTDE3LjMxMDQsMjEuNjggQzE3LjMxMDQsMjEuMjM4MTcyMiAxNy42Njg1NzIyLDIwLjg4IDE4LjExMDQsMjAuODggTDIwLjA3NjgsMjAuODggQzIwLjQ1NTg4ODMsMjAuODggMjAuNzYzMiwyMC41NzI2ODgzIDIwLjc2MzIsMjAuMTkzNiBDMjAuNzYzMiwxOS44MTQ1MTE3IDIwLjQ1NTg4ODMsMTkuNTA3MiAyMC4wNzY4LDE5LjUwNzIgTDE4LjExMDQsMTkuNTA3MiBDMTcuNjY4NTcyMiwxOS41MDcyIDE3LjMxMDQsMTkuMTQ5MDI3OCAxNy4zMTA0LDE4LjcwNzIgTDE3LjMxMDQsMTcuNzk1NTA3OCBDMTcuMzEwNCwxNy43ODYwOTA2IDE3LjMxNDE0MSwxNy43NzcwNTkgMTcuMzIwOCwxNy43NzA0IEMxNy4zMjc0NTksMTcuNzYzNzQxIDE3LjMzNjQ5MDYsMTcuNzYgMTcuMzQ1OTA3OCwxNy43NiBMMjAuMDc2OCwxNy43NiBDMjAuNDU1ODg4MywxNy43NiAyMC43NjMyLDE3LjQ1MjY4ODMgMjAuNzYzMiwxNy4wNzM2IEMyMC43NjMyLDE2LjY5NDUxMTcgMjAuNDU1ODg4MywxNi4zODcyIDIwLjA3NjgsMTYuMzg3MiBMMTkuNDMyLDE2LjM4NzIgQzE4Ljk5Nzk1MjUsMTYuMzg3MiAxOC42NDYwODc1LDE2LjAzNTMzNSAxOC42NDYwODc1LDE1LjYwMTI4NzUgQzE4LjY0NjA4NzUsMTUuNDY4NTA2OCAxOC42Nzk3MjkyLDE1LjMzNzg5MDggMTguNzQzODcyNiwxNS4yMjE2MzEgTDIxLjQzOTgwMDMsMTAuMzM1MjYxOSBDMjEuNjUzMjM3Myw5Ljk0ODQwNzMxIDIxLjUxMjY1NDYsOS40NjE3NzQ4NSAyMS4xMjU4MDAxLDkuMjQ4MzM3ODUgQzIxLjAwNzQ1NjMsOS4xODMwNDQ3NSAyMC44NzQ0OTksOS4xNDg4IDIwLjczOTMzODIsOS4xNDg4IEwxOS42MzQ0OTM0LDkuMTQ4OCBDMTkuMzMxODU4NCw5LjE0ODggMTkuMDU1MTI5Miw5LjMxOTU3NDIyIDE4LjkxOTQyNzQsOS41OTAwNzkxOSBMMTYuNzE1MDY2LDEzLjk4NDIwMzUgQzE2LjUxNjk1LDE0LjM3OTEyMzYgMTYuMDM2MTk5MiwxNC41Mzg2NjQ4IDE1LjY0MTI3OTIsMTQuMzQwNTQ4NyBDMTUuNDg3MjA5OSwxNC4yNjMyNTgxIDE1LjM2MjIyNDYsMTQuMTM4MjcyOCAxNS4yODQ5MzQsMTMuOTg0MjAzNSBMMTMuMDgwNTcyNiw5LjU5MDA3OTE5IEMxMi45NDQ4NzA4LDkuMzE5NTc0MjIgMTIuNjY4MTQxNiw5LjE0ODggMTIuMzY1NTA2Niw5LjE0ODggTDExLjI2MDY2MTgsOS4xNDg4IEMxMC44MTg4MzQsOS4xNDg4IDEwLjQ2MDY2MTgsOS41MDY5NzIyIDEwLjQ2MDY2MTgsOS45NDg4IEMxMC40NjA2NjE4LDEwLjA4Mzk2MDggMTAuNDk0OTA2NiwxMC4yMTY5MTgxIDEwLjU2MDE5OTcsMTAuMzM1MjYxOSBMMTMuMjYxMTUxNCwxNS4yMzA3MzcgQzEzLjQ2OTE5MTgsMTUuNjA3ODEwMiAxMy4zMzIxNjM3LDE2LjA4MjEzODUgMTIuOTU1MDkwNSwxNi4yOTAxNzg5IEMxMi44Mzk3Mzg5LDE2LjM1MzgyMTEgMTIuNzEwMTQzMywxNi4zODcyIDEyLjU3ODQsMTYuMzg3MiBMMTEuOTQ0LDE2LjM4NzIgQzExLjU2NDkxMTcsMTYuMzg3MiAxMS4yNTc2LDE2LjY5NDUxMTcgMTEuMjU3NiwxNy4wNzM2IEMxMS4yNTc2LDE3LjQ1MjY4ODMgMTEuNTY0OTExNywxNy43NiAxMS45NDQsMTcuNzYgTDE0LjY1NDA5MjIsMTcuNzYgQzE0LjY2MzUwOTQsMTcuNzYgMTQuNjcyNTQxLDE3Ljc2Mzc0MSAxNC42NzkyLDE3Ljc3MDQgQzE0LjY4NTg1OSwxNy43NzcwNTkgMTQuNjg5NiwxNy43ODYwOTA2IDE0LjY4OTYsMTcuNzk1NTA3OCBMMTQuNjg5NiwxOC43MDcyIEMxNC42ODk2LDE5LjE0OTAyNzggMTQuMzMxNDI3OCwxOS41MDcyIDEzLjg4OTYsMTkuNTA3MiBMMTEuOTQ0LDE5LjUwNzIgQzExLjU2NDkxMTcsMTkuNTA3MiAxMS4yNTc2LDE5LjgxNDUxMTcgMTEuMjU3NiwyMC4xOTM2IEMxMS4yNTc2LDIwLjU3MjY4ODMgMTEuNTY0OTExNywyMC44OCAxMS45NDQsMjAuODggTDEzLjg4OTYsMjAuODggQzE0LjMzMTQyNzgsMjAuODggMTQuNjg5NiwyMS4yMzgxNzIyIDE0LjY4OTYsMjEuNjggTDE0LjY4OTYsMjMuMiBDMTQuNjg5NiwyMy42NDE4Mjc4IDE1LjA0Nzc3MjIsMjQgMTUuNDg5NiwyNCBMMTYuNTEwNCwyNCBDMTYuOTUyMjI3OCwyNCAxNy4zMTA0LDIzLjY0MTgyNzggMTcuMzEwNCwyMy4yIFoiIGlkPSLCpSIgZmlsbD0iIzAwQjg5MyIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");
}
.welf-sticks {
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+emh1YW5nc2hpPC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFMUY3RjIiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzhBRDBDMCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSLpobXpnaItMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICAgICAgICA8ZyBpZD0i5oiR55qEX+aXoOWNoeWkh+S7vS02IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjQzLjAwMDAwMCwgLTU3Ni4wMDAwMDApIiBzdHJva2U9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIHN0cm9rZS13aWR0aD0iNCI+CiAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0My4wMDAwMDAsIDU2OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtMjMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtNOWkh+S7vSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYuMDY4NTA4LCAxNS4xNzMzODEpIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTE2LjA2ODUwOCwgLTE1LjE3MzM4MSkgdHJhbnNsYXRlKDUuMDAwMDAwLCA2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT0iMCIgeTE9IjE4LjM0Njc2MyIgeDI9IjguMTM3MDE1MjkiIHkyPSIwIiBpZD0i6Lev5b6ELTciPjwvbGluZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9IjE0IiB5MT0iMTguMzQ2NzYzIiB4Mj0iMjIuMTM3MDE1MyIgeTI9IjAiIGlkPSLot6/lvoQtN+Wkh+S7vSI+PC9saW5lPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");
}
.mine-credit-apply::before {
  content: '';
  position: absolute;
  width: 80vw;
  height: 22vw;
  bottom: -23vw;
  display: block;
}



</style>
