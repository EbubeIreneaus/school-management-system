<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import { useParentStore } from 'src/stores/Parents';
import BreadCrumbs from 'src/components/BreadCrumbs.vue';
// import { ParentType } from 'src/types/ParentTypes';

const parent: any = useParentStore().parents[1]



</script>

<template>
  <q-page class="md:tw-p-4">
    <BreadCrumbs :navs="['Parent', 'My Profile']" />
    <q-card class="q-ma-sm tw-min-h-[80dvh]" flat square :bordered="false">
    <q-card-section class="">
      <q-toolbar>
        <q-toolbar-title>{{ parent.firstname }} {{ parent.lastname }}</q-toolbar-title>
        <q-space />
        <q-btn-group spread flat stretch>
          <q-btn icon="edit" size="sm" flat dense />
          <q-btn icon="print" size="sm" flat dense />
          <q-btn icon="download" size="sm" flat dense />
        </q-btn-group>
      </q-toolbar>
    </q-card-section>

    <q-card-section class="nq-row gap-5">
        <q-img :src="parent.img" style="width: 150px; height: 150px" class="q-mb-md" />

      <table class="nq-col-sm-12 nq-col-md-6">
        <tr>
        <td class="label">First Name:</td>
            <td class="value">{{ parent.firstname }}</td>
        </tr>
        <tr>
        <td class="label">Last Name:</td>
            <td class="value">{{ parent.lastname }}</td>
        </tr>
        <tr>
            <td class="label">Gender:</td>
            <td class="value">{{ parent.gender }}</td>
        </tr>
        <tr>
            <td class="label">Date of Birth:</td>
            <td class="value">{{ parent.dob }}</td>
        </tr>
        <tr>
            <td class="label">Address:</td>
            <td class="value">{{ parent.address }}</td>
        </tr>
        <tr>
            <td class="label">Mobile No:</td>
            <td class="value">{{ parent.mobile_no }}</td>
        </tr>
        <tr>
            <td class="label">Email:</td>
            <td class="value">{{ parent.email }}</td>
        </tr>
    </table>
    </q-card-section>
  </q-card>
  </q-page>
</template>

<style scoped>
  table {
    /* width: 100%; */
    /* margin: -20px 0; */
  }
  td{
    padding: 10px 0;
  }
  .label{
    font-weight: bolder;
    color: gray;
  }

  .value {
    font-weight: bold;
  }
</style>
