<template>
  <div v-for="(el,index) in shopList" :key="index">
    <Shop />
  </div>
</template>

<script setup>

const shopList = [1,2,3,4,5]




</script>

<style scoped>

</style>
