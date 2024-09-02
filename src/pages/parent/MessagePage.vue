<script lang="ts" setup>
import BreadCrumbs from 'src/components/BreadCrumbs.vue';
import { reactive } from 'vue';

const form = reactive({
  title: '',
  reciepant: '',
  message: '',
});
</script>

<template>
  <q-page class="sm:tw-p-4 tw-p-2">
    <BreadCrumbs :navs="['Parent', 'Messages']" />

    <div class="tw-grid tw-grid-cols-12 tw-gap-x-5 tw-gap-y-8">

      <q-card flat square class="md:tw-col-span-7 tw-col-span-12 tw-order-2 md:tw-order-1">
        <q-card-section>
          <q-toolbal>
            <q-toolbar-title>Write New Message</q-toolbar-title>
          </q-toolbal>
        </q-card-section>
        <q-card-section>
          <q-input
            label="Title"
            standout
            :dark="$q.dark.isActive"
            v-model="form.title"
            label-color="accent"
            class="tw-mb-4"
          />
          <q-select
            label="reciepant"
            standout
            :dark="$q.dark.isActive"
            v-model="form.reciepant"
            label-color="accent"
            :options="[
              'Principal',
              'Vice Principal',
              'Bursary',
              'Guidance and Cancelor',
              'Form Mistress JSS1',
            ]"
            class="tw-mb-4"
          />

          <q-editor v-model="form.message" placeholder="write message here" />
        </q-card-section>
        <q-card-section>
          <q-btn icon="send" label="send" class="tw-px-10 tw-py-2.5" color="green-10" unelevated />
        </q-card-section>
      </q-card>

      <div class="md:tw-col-span-5 tw-col-span-12 tw-order-1 md:tw-order-2">
        <q-card flat square class="tw-mb-5">
          <q-card-section>
            <q-toolbal>
            <q-toolbar-title class="text-caption">sent message</q-toolbar-title>
          </q-toolbal>
          </q-card-section>
         <q-scroll-area class="md:tw-h-[170px] tw-h-[250px]">
            <q-card-section class="md:tw-h-[170px] tw-h-[250px] tw-content-center">
              <div class="text-center tw-text-sm">😒 no message yet</div>
            </q-card-section>
         </q-scroll-area>
        </q-card>

        <q-card flat square>
          <q-card-section>
            <q-toolbal>
            <q-toolbar-title class="text-caption">Recieved message</q-toolbar-title>
          </q-toolbal>
          </q-card-section>
         <q-scroll-area class="md:tw-h-[170px] tw-h-[250px]">
            <q-card-section class="md:tw-h-[170px] tw-h-[250px] tw-content-center">
              <div class="text-center tw-text-sm">😒 no message yet</div>
            </q-card-section>
         </q-scroll-area>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
