<script lang="ts" setup>
defineProps<{icon: string, iconText: string, content: string, bgIconColor: string}>()
</script>

<template>
  <q-card class="tw-flex items-center tw-gap-4 tw-h-20" square flat :bordered="!$q.dark.isActive">
        <div class="text-center tw-h-full content-center tw-px-10" :class="`bg-${bgIconColor}`">
          <q-icon :name="icon" size="md" /> <br />
        </div>

        <div class="">
          <div class="text-h5 tw-mb-1">{{ content }}</div>
          <div class="text-capitalize tw-text-xs">{{ iconText }}</div>
        </div>
      </q-card>
</template>

<style lang="postcss" scoped>

</style>
