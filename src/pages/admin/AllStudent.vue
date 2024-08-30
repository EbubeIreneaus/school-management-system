<script lang="ts" setup>
import { QTableColumn } from 'quasar';
import BreadCrumbs from 'src/components/BreadCrumbs.vue';
import { useStudentStore } from 'src/stores/Students';

const TeachersColumns: QTableColumn[] = [
  {
    name: 'id',
    required: true,
    label: 'Id',
    field: 'reg_no',
    sortable: true,
    align: 'left',
  },
  {
    name: 'Firstname',
    label: 'Firstname',
    field: 'firstname',
    sortable: true,
    align: 'left',
  },
  {
    name: 'lastname',
    label: 'Lastname',
    field: 'lastname',
    sortable: true,
    align: 'left',
  },
  {
    name: 'gender',
    label: 'Gender',
    field: 'gender',
    sortable: true,
    align: 'left',
  },
  {
    name: 'class',
    label: 'Class',
    field: 'class',
    sortable: true,
    align: 'left',
  },
  {
    name: 'section',
    label: 'Section',
    field: 'section',
    sortable: true,
    align: 'left',
  },
  {
    name: 'address',
    label: 'Address',
    field: 'address',
    sortable: true,
    align: 'left',
  },
  {
    name: 'DOB',
    label: 'Date Of Birth',
    field: 'dob',
    sortable: true,
    align: 'left',
  },
  {
    name: 'mobile_no',
    label: 'Mobile No',
    field: 'mobile_no',
    sortable: true,
    align: 'left',
  },
  {
    name: 'email',
    label: 'Email',
    field: 'email',
    sortable: true,
    align: 'left',
  },
];

const teacher: object[] = useStudentStore().students;

</script>

<template>
  <q-page class="md:tw-p-4">
    <BreadCrumbs :navs="['Administration', 'All Student']" />
    <div>
      <q-table
      title="All Students"
      :columns="TeachersColumns"
      :rows="teacher"
      :bordered="false"
      separator="none"
      :rows-per-page-options="[25]"
      flat
      square

    />
    </div>
  </q-page>
</template>

<style lang="postcss" scoped>

</style>
