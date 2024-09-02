<script lang="ts" setup>
import BreadCrumbs from 'src/components/BreadCrumbs.vue';
import CalendarEvent from 'src/components/CalendarEvent.vue';
import OverviewChart from 'src/components/Charts/OverviewChart.vue';
import SocialMediaCard from 'src/components/SocialMediaCard.vue';
import DataCard from 'src/components/admin/DataCard.vue';
import { useNoticeStore } from 'src/stores/Notice';
import NoticeComponent from 'src/components/NoticeComponent.vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const notices: any = useNoticeStore().notices;
</script>

<template>
  <q-page class="md:tw-p-4">
    <BreadCrumbs :navs="['Administrative', 'Dashboard']" />

    <div class="nq-row q-py-md text-primary">
      <data-card
        icon="quiz"
        iconText="Student"
        content="50,000"
        class="nq-col-lg-3 nq-col-md-6 nq-col-sm-12 nq-col-12"
        icon-color="amber"
      />
      <data-card
        icon="payments"
        iconText="Teachers"
        content="N10,000"
        class="nq-col-lg-3 nq-col-md-6 nq-col-sm-12 nq-col-12"
        icon-color="red"
      />
      <data-card
        icon="emoji_events"
        iconText="Parents"
        content="14,000"
        class="nq-col-lg-3 nq-col-md-6 nq-col-sm-12 nq-col-12"
        icon-color="blue"
      />
      <data-card
        icon="folder"
        iconText="Earnings"
        content="$30,000"
        class="nq-col-lg-3 nq-col-md-6 nq-col-sm-12 nq-col-12"
        icon-color="green"
      />
    </div>

    <div class="tw-grid md:tw-grid-cols-12">
      <div class="tw-col-span-6">
        <OverviewChart />
      </div>
      <div class="tw-col-span-6">
        <SocialMediaCard />
      </div>
    </div>

    <div class="tw-grid md:tw-grid-cols-2 tw-gap-y-5">
      <div class="md:tw-p-4">
        <CalendarEvent />
      </div>
      <div class="tw-grid md:tw-grid-cols-2 tw-gap-x-2 tw-gap-y-5">
        <q-scroll-area class="tw-h-[520px] md:tw-h-full">
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

        <q-scroll-area class="tw-h-[520px] md:tw-h-full">
          <q-card>
            <q-toolbar
              class="tw-z-50 tw-sticky tw-top-0 tw-w-full"
              :class="{ 'bg-dark': $q.dark.isActive }"
            >
              <q-toolbar-title>Recent Activities</q-toolbar-title>
            </q-toolbar>

            <q-card-section>
              <q-timeline >

                <q-timeline-entry
                  title="Post New Notice"
                  subtitle="February 22, 1986"
                >
                </q-timeline-entry>

                <q-timeline-entry
                  title="Record New Student"
                  subtitle="February 21, 2024"
                >
                </q-timeline-entry>
                <q-timeline-entry
                  title="Added Mr Emeka from Security Dept as Admin"
                  subtitle="February 22, 1986"
                >
                </q-timeline-entry>

                <q-timeline-entry
                  title="Event Title"
                  subtitle="February 22, 1986"
                >
                </q-timeline-entry>

                <q-timeline-entry
                  title="Event Title"
                  subtitle="February 22, 1986"
                >
                </q-timeline-entry>

                <q-timeline-entry
                  title="Event Title"
                  subtitle="February 22, 1986"
                >
                </q-timeline-entry>

                <q-timeline-entry
                  title="Event Title"
                  subtitle="February 22, 1986"
                >

                </q-timeline-entry>
              </q-timeline>
            </q-card-section>
          </q-card>
        </q-scroll-area>
      </div>
    </div>
  </q-page>
</template>
