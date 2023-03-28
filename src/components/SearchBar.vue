<script setup>
import {store} from "../store/store";

let {showSearchBar,hotSearchList,share,add} = defineProps(['showSearchBar','hotSearchList','share','add']);
console.log(hotSearchList)
</script>

<template>
  <div id="search-box" v-if="showSearchBar">
    <div class="search-bar alignCenter">
      <div>上海<Icon name="arrow-down" size="12" style="margin-left:4px"/></div>
      <div class="search-input alignCenter">
        <Icon name="search" size="18" />
        <input type="text" placeholder="请输入搜索内容" />
      </div>
      <img class="search-bar-icon" v-if="share" src="../assets/share.svg" alt="" />
      <Icon v-if="add" class="search-bar-icon search-bar-icon-add" name="plus" size="20" />
    </div>
    <div class="search-hot alignCenter" v-if="hotSearchList">
      热搜：<Icon name="fire" color="#ee0a24" />
      <div v-for="(item, index) in store.hotSearch"
           class="hot-txt"
      >
        {{item.hotTag}}
      </div>
    </div>
  </div>
</template>

<style scoped>
#search-box {
  width: 100vw;
  padding: 6px 16px 0;
  position: fixed;
  top: 0;
  background-color: #fff;
}
.search-bar {
  margin-bottom: 10px;
}
.search-bar-icon {
  width: 20px;
  height: 20px;
  margin: 0 5px;
}
.search-bar-icon:last-child {
  margin-right: 0;
}
.search-bar-icon-add:active {
  transform: rotate(45deg);
}

.search-input {
  flex-grow: 1;
  height: 28px;
  padding: 0 6px;
  margin-left: 6px;
  border-radius: 14px;
  background-color: rgba(210,210,210,.2);
}
.search-input > i {
  margin: 0 6px;
}
.search-input > input {
  background-color: transparent;
  caret-color: #00b893;
  width: 85%;
}
.search-hot {
  font-size: 13px;
  margin: 10px 0;
  white-space: nowrap;
}
.search-hot-icon {
  width: 16px;
  height: 16px;
}
.hot-txt {
  padding: 0 6px;
  line-height: 1;
  border-right: 1px solid #333;
}
.hot-txt:last-child {
  border-right: none;
}
</style>
