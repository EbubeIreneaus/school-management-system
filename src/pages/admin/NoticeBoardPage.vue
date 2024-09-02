<script lang="ts" setup>
import BreadCrumbs from 'src/components/BreadCrumbs.vue';
import { useNoticeStore } from 'src/stores/Notice';
import NoticeComponent from 'src/components/NoticeComponent.vue';
import { defineAsyncComponent, ref } from 'vue';
const NewNoticeDialog = defineAsyncComponent(()=>import('components/NewNoticeDialog.vue'))

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const notices: any = useNoticeStore().notices;

const newNotice = ref(false)
</script>

<template>
  <div class="md:tw-p-5">
    <BreadCrumbs :navs="['Administration', 'Notice Board']" />

    <q-card flat square :bordered="false">
      <q-card-section>
        <q-toolbar>
          <q-toolbar-title> Notice Board </q-toolbar-title>
          <q-space />
          <q-btn icon="add" label="new" color="green-10" flat @click="newNotice = true" />
        </q-toolbar>
      </q-card-section>

      <q-card-section
        v-for="(notice, index) in notices"
        :key="index"
        v-ripple
        class="tw-cursor-pointer hover:tw-bg-slate-950/30"
      >
        <notice-component
          :date="notice.date"
          :name="notice.name"
          :timePosted="notice.timePosted"
          :content="notice.content"
          :isAdmin="true"
        />
      </q-card-section>
    </q-card>

    <NewNoticeDialog v-if="newNotice" @close="newNotice = false" />
  </div>
</template>
