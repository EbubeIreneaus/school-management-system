<script lang="ts" setup>
import BreadCrumbs from 'src/components/BreadCrumbs.vue';
import MiniChildDetails from 'src/components/parent/MiniChildDetails.vue';
import DataCard from 'src/components/parent/DataCard.vue';
import NoticeComponent from 'src/components/NoticeComponent.vue';
import { useNoticeStore } from 'src/stores/Notice';
import AllExpenses from 'src/components/parent/AllExpenses.vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const notices: any = useNoticeStore().notices
</script>

<template>
  <q-page class="md:tw-p-5">
    <BreadCrumbs :navs="['Parent', 'Dashboard']" />

    <div class="tw-grid tw-grid-cols-12 tw-gap-x-3 tw-gap-y-5 tw-mb-5">
      <div class="md:tw-col-span-5 tw-col-span-12">
        <mini-child-details reg_no="0001" />
        <br />
        <mini-child-details reg_no="0004" />
      </div>
      <div class="md:tw-col-span-7 tw-col-span-12">
        <div class="tw-grid lg:tw-grid-cols-2 tw-gap-4 tw-h-fit tw-pb-5 md:tw-px-5">
          <data-card
            icon="payments"
            iconText="Due Fees"
            content="N1,500"
            bgIconColor="accent"
            class=""
          ></data-card>
          <data-card
            icon="quiz"
            iconText="Upcomming exam"
            content="05/10"
            bgIconColor="red"
          />
          <data-card
            icon="school"
            iconText="Result Published"
            content="02/05"
            bgIconColor="blue"
          />
          <data-card
            icon="payments"
            iconText="This Term Expenses"
            content="N70,000"
            bgIconColor="blue"
          />
        </div>

        <div class="nq-col-sm-12 nq-col-lg-6">
          <q-scroll-area class="tw-h-[350px]">
            <q-card>
              <q-toolbar
                class="tw-z-50 tw-sticky tw-top-0 tw-w-full"
                :class="{ 'bg-dark': $q.dark.isActive }"
              >
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
    </div>
    <all-expenses :isComp="true" />
  </q-page>
</template>

<style lang="css" scoped></style>
