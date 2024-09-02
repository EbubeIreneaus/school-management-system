<script lang="ts" setup>
defineProps<{
  date: string;
  name: string;
  timePosted: string;
  content: string;
  isAdmin?: boolean;
}>();
</script>

<template>
  <div>
    <div class="text-grey">{{ new Date(date).toDateString() }}</div>
    <div class="nq-flex gap-3" style="margin: 2px 0">
      <div class="text-accent text-weight-bold">{{ name }}</div>
      <div>{{ timePosted }}</div>
    </div>
    <div class="text-weight-light text-caption">{{ content }}</div>
  </div>
</template>

<style lang="postcss" scoped></style>
