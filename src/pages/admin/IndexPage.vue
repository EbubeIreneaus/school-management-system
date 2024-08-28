<script lang="ts" setup>
import BreadCrumbs from 'src/components/BreadCrumbs.vue';
import OverviewChart from 'src/components/Charts/OverviewChart.vue';
import SocialMediaCard from 'src/components/SocialMediaCard.vue';
import DataCard from 'src/components/admin/DataCard.vue';

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
        class="nq-col-lg-3 nq-col-md-6 nq-col-sm-12 nq-col-12 "
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
  </q-page>
</template>
