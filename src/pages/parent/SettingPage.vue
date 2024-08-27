<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import BreadCrumbs from 'src/components/BreadCrumbs.vue';
import { useParentStore } from 'src/stores/Parents';

const parent: any = useParentStore().parents[2]
</script>

<template>
  <div class="md:tw-p-5">
    <BreadCrumbs :navs="['Parent', 'Settings']" />
    <form>
      <fieldset>
        <legend>Parent Information:</legend>
        <br />
        <div class="tw-grid lg:tw-grid-cols-4 md:tw-grid-cols-3 sm:tw-grid-cols-2 tw-grid-cols-1 tw-gap-5">
          <q-input
            v-model="parent.firstname"
            label="firstname"
            standout
            :dark="$q.dark.isActive"
          />
          <q-input
            v-model="parent.lastname"
            standout
            label="lastname"
            :dark="$q.dark.isActive"
          />
          <q-select
            v-model="parent.gender"
            :options="['male', 'female', 'others']"
            label="Gender"
            :dark="$q.dark.isActive"
            standout
          />
          <q-input
            v-model="parent.address"
            label="Address"
            standout
            :dark="$q.dark.isActive"
          />
          <q-input
            v-model="parent.mobile_no"
            standout
            label="Number"
            :dark="$q.dark.isActive"
          />
          <q-input
            v-model="parent.email"
            standout
            label="Email"
            :dark="$q.dark.isActive"
          />
        </div>
      </fieldset>
    </form>
  </div>
</template>

<style lang="css" scoped></style>
