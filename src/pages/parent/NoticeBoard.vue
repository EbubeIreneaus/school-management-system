<script lang="ts" setup>
import BreadCrumbs from 'src/components/BreadCrumbs.vue';
import { useNoticeStore } from 'src/stores/Notice';
import NoticeComponent from 'src/components/NoticeComponent.vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const notices: any = useNoticeStore().notices;
</script>

<template>
  <div class="md:tw-p-5">
    <BreadCrumbs :navs="['Student', 'Notice Board']" />

    <q-card>
      <q-toolbar>
        <q-toolbar-title> Notice Board </q-toolbar-title>
      </q-toolbar>

      <q-card-section v-for="(notice, index) in notices" :key="index">
        <notice-component
          :date="notice.date"
          :name="notice.name"
          :timePosted="notice.timePosted"
          :content="notice.content"
        />
      </q-card-section>
    </q-card>
  </div>
</template>
