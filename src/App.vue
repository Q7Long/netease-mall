<script setup>
import TabBar from './components/TabBar/index.vue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

let route = useRoute();
let isShowBar = ref(true);

watch(route, newValue => {
  isShowBar.value = newValue.meta.isShowBar
}, {
  immediate: true
});
</script>

<template>
  <div class="app">
    <router-view></router-view>
    <TabBar v-if="isShowBar"></TabBar>
  </div>
</template>

<style scoped>

</style>
