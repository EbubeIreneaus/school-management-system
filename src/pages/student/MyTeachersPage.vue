<script lang="ts" setup>
import { QTableColumn } from 'quasar';
import { useTeacherStore } from 'src/stores/Teachers';
import BreadCrumbs from 'src/components/BreadCrumbs.vue';

const TeachersColumns: QTableColumn[] = [
  {
    name: 'id',
    required: true,
    label: 'Id',
    field: 'id',
    sortable: true,
    align: 'left',
  },
  { name: 'Firstname', label: 'Firstname', field: 'firstname', sortable: true, align: 'left' },
  { name: 'lastname', label: 'Lastname', field: 'lastname', sortable: true, align: 'left' },
  { name: 'gender', label: 'Gender', field: 'gender', sortable: true, align: 'left' },
  { name: 'address', label: 'Address', field: 'address', sortable: true, align: 'left' },
  { name: 'DOB', label: 'Date Of Birth', field: 'dob', sortable: true, align: 'left' },
  { name: 'mobile_no', label: 'Mobile No', field: 'mobile_no', sortable: true, align: 'left' },
  { name: 'email', label: 'Email', field: 'email', sortable: true, align: 'left' },
];

const teacher: object[] = useTeacherStore().teachers
</script>

<template>
<div class="md:tw-p-4">
  <BreadCrumbs :navs="['Student', 'My Teachers']" />
  <q-table
    title="My Teachers"
    :columns="TeachersColumns"
    :rows="teacher"
    :bordered="false"
    separator="none"
    :rows-per-page-options="[25]"
    flat
    square
  />
</div>
</template>
