<script lang="ts" setup>
import { Color } from 'quasar';

defineProps<{icon: string, iconText: string, content: string, iconColor: Color}>()
</script>

<template>
  <q-card class="tw-flex tw-items-center" :class="$q.dark.isActive?'text-grey-5': 'text-grey-10'" square flat>
        <q-card-section class="text-center nq-flex-grow-1">
          <q-icon :name="icon" size="md" :color="iconColor" /> <br />
          <div class="text-capitalize">{{ iconText }}</div>
        </q-card-section>
        <q-card-section class="nq-flex-grow-1">
          <div class="text-h5 text-weight-bold">{{ content }}</div>
        </q-card-section>
      </q-card>
</template>

<style lang="postcss" scoped>

</style>
