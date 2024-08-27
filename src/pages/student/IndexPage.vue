<script lang="ts" setup>
import BreadCrumbs from 'src/components/BreadCrumbs.vue';
import DataCard from 'src/components/student/DataCard.vue';
import StudentDetails from 'src/components/student/StudentDetails.vue';
import { useNoticeStore } from 'src/stores/Notice';
import { useTestStore } from 'src/stores/Tests';
import NoticeComponent from 'src/components/NoticeComponent.vue';
import { QTableColumn } from 'quasar';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const notices: any = useNoticeStore().notices;

const AssesmentColumns: QTableColumn[] = [
  {
    name: 'test',
    required: true,
    label: 'Test Name',
    field: 'textName',
    sortable: true,
    align: 'left',
  },
  { name: 'subject', label: 'Subject', field: 'subject', sortable: true, align: 'left' },
  { name: 'score', label: 'Score', field: 'score', sortable: true, align: 'left' },
  { name: 'grade', label: 'Grade', field: 'grade', sortable: true, align: 'left' },
  { name: 'date', label: 'Date', field: 'date', sortable: true, align: 'left' },
];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const test: any = useTestStore().assessments;
</script>

<template>
  <q-page class="md:tw-p-5">
    <bread-crumbs :navs="['Student', 'Home']" />

    <div class="nq-row q-py-md text-primary">
      <data-card
        icon="quiz"
        iconText="Upcomming exam"
        content="05/10"
        class="nq-col-lg-3 nq-col-md-6 nq-col-sm-12 nq-col-12 bg-amber"
      />
      <data-card
        icon="payments"
        iconText="Due Fees"
        content="N100,000"
        class="nq-col-lg-3 nq-col-md-6 nq-col-sm-12 nq-col-12 bg-blue"
      />
      <data-card
        icon="emoji_events"
        iconText="Events"
        content="10"
        class="nq-col-lg-3 nq-col-md-6 nq-col-sm-12 nq-col-12 bg-red"
      />
      <data-card
        icon="folder"
        iconText="Documents"
        content="02"
        class="nq-col-lg-3 nq-col-md-6 nq-col-sm-12 nq-col-12 bg-cyan"
      />
    </div>

    <div class="nq-row q-my-md">
      <student-details reg_no="0001" class="nq-col-sm-12 nq-col-lg-6" />

      <div class="nq-col-sm-12 nq-col-lg-6">
        <q-scroll-area style="height: 520px;">
          <q-card>

            <q-toolbar class="tw-z-50 tw-sticky tw-top-0 tw-w-full" :class="{'bg-dark': $q.dark.isActive}">
              <q-toolbar-title>Notice Board</q-toolbar-title>
            </q-toolbar>

            <q-card-section v-for="notice in notices" :key="notice.id">
              <notice-component
                :date="notice.date"
                :name="notice.name"
                :timePosted="notice.timePosted"
                :content="notice.content"
              />
            </q-card-section>
          </q-card>
        </q-scroll-area>
      </div>
    </div>

    <div>

      <q-scroll-area style="height: 500px">
          <q-card>
            <q-card-section>
              <q-table
                title="Assesment"
                :columns="AssesmentColumns"
                :rows="test"
                :bordered="false"
                separator="none"
                flat
              />
            </q-card-section>
          </q-card>
        </q-scroll-area>
    </div>
  </q-page>
</template>

<style scoped></style>
