<script lang="ts" setup>
import ParentSignInComponent from 'src/components/Auth/ParentSignInComponent.vue';
import StudentSignInComponent from 'src/components/Auth/StudentSignInComponent.vue';
import { ref } from 'vue';

const parentSignInDialog = ref<boolean>(false)
const studentSignInDialog = ref<boolean>(false)
</script>

<template>
  <div class=" column justify-center items-center q-col-gutter-y-lg fullscreen">
    <div class=" text-h2 text-weight-bold">I'M</div>
    <div class="row justify-evenly wrap q-gutter-x-md">
      <q-btn label="A Student" class="col-auto" @click="()=>studentSignInDialog = true" />
      <q-btn label="A Parent"  class="col-auto" @click="()=> parentSignInDialog = true" />
    </div>
  </div>
  <parent-sign-in-component v-if="parentSignInDialog" @close="parentSignInDialog = false"/>
  <student-sign-in-component v-if="studentSignInDialog" @close="studentSignInDialog = false" />
</template>

<style lang="scss" scoped>

</style>

