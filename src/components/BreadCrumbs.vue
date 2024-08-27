<script lang="ts" setup>
  defineProps<{navs: string[]}>()
</script>

<template>
  <q-breadcrumbs class="q-py-md">
      <q-breadcrumbs-el :label="nav" v-for="nav in navs" :key="nav" :class="{'text-dark': !$q.dark.isActive}" />
    </q-breadcrumbs>
</template>

<style lang="postcss" scoped>

</style>
