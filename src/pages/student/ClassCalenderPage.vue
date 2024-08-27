<script lang="ts" setup>
import BreadCrumbs from 'src/components/BreadCrumbs.vue';

const ss1 = [
'monday', 'english', 'english', 'maths', 'break', 'health edu', 'health edu', 'computer', 'break', 'crs', 'crs',
'tuesday', 'maths', 'physics', 'english', 'break', 'civic', 'civic', 'health edu', 'break', 'biology', 'biology',
'wednessday', 'chm','chm', 'biology', 'break', 'computer', 'maths', 'maths', 'break', 'geography', 'geography',
'thursday', 'physics', 'chm', 'english', 'break', 'free', 'free', 'civic', 'break', 'crs', 'crs',
'friday', 'maths', 'english', 'computer', 'break', 'biology', 'biology', 'health edu', 'close', '', ''
]
</script>

<template>
  <div class="">
    <BreadCrumbs :navs="['Student', 'Time Table']" />

    <q-scroll-area style="height: 90dvh; max-width: 100dvw;">
      <div class=" tw-grid tw-grid-cols-11 *:tw-border" style="width: max-content;">
      <div></div>
      <div class="period-time ">8:00am - 8:40am</div>
      <div class="period-time">8:40am - 9:20am</div>
      <div class="period-time">9:20am - 10:00am</div>
      <div class="period-time ">10:00 - 10:30am</div>
      <div class="period-time">10:30am - 11:10am</div>
      <div class="period-time">11:10am - 11:50am</div>
      <div class="period-time">11:50am - 12:30pm</div>
      <div class="period-time">12:30pm - 1:10pm</div>
      <div class="period-time">1:10pm - 1:50pm</div>
      <div class="period-time">1:50pm - 2:30pm</div>

      <!--  -->
        <div v-for="cont, index in ss1" :key="index">
          <div class="tw-py-10 text-weight-medium text-uppercase -tw-rotate-45 text-center tw-content-center">{{ cont }}</div>
        </div>
    </div>
    </q-scroll-area>
  </div>
</template>

<style scoped>
.period-time {
  padding: 20px 0;
  font-size: small;
  align-content: center;
  text-align: center;
}
.dow{
  align-content: center;
  text-align: center;
}
</style>
