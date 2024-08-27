<script lang="ts" setup>
import BreadCrumbs from 'src/components/BreadCrumbs.vue';
import AllExpenses from 'src/components/parent/AllExpenses.vue';
</script>

<template>
  <q-page class="md:tw-p-4">
    <BreadCrumbs :navs="['Parent', 'All Expenses']" />
    <all-expenses :is-comp="false" />
  </q-page>
</template>
