<script lang="ts" setup>
defineProps<{icon: string, iconText: string, content: string}>()
</script>

<template>
  <q-card class="nq-flex items-center">
        <q-card-section class="text-center nq-flex-grow-1">
          <q-icon :name="icon" size="md" /> <br />
          <div class="text-capitalize">{{ iconText }}</div>
        </q-card-section>
        <q-separator vertical inset />
        <q-card-section class="nq-flex-grow-1">
          <div class="text-h5 text-weight-bold">{{ content }}</div>
        </q-card-section>
      </q-card>
</template>

<style lang="postcss" scoped>

</style>
