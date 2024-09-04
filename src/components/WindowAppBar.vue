<script setup>
  function minimize () {
      window.myWindowAPI.minimize()
    }

    function toggleMaximize () {
      window.myWindowAPI.toggleMaximize()
    }

    function close () {
      window.myWindowAPI.close()
    }

</script>

<template>
  <q-bar class="custom-app-bar q-electron-drag tw-z-[9999999999999]" v-if="$q.platform.is.electron">
    <div class="tw-text-sm q-electron-drag--exception">School Management System</div>
    <q-space />
    <q-btn flat round icon="minimize" @click="minimize" size="sm" />
    <q-btn flat round icon="fullscreen_exit" @click="toggleMaximize()" size="sm" />
    <q-btn flat round icon="close" @click="close()" size="sm" />
  </q-bar>
</template>
