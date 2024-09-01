<script lang="ts" setup>
import { QTableColumn } from 'quasar';
import BreadCrumbs from 'src/components/BreadCrumbs.vue';
import { useTeacherStore } from 'src/stores/Teachers';
import { useRouter } from 'vue-router';

const $router = useRouter()

const TeachersColumns: QTableColumn[] = [
  {
    name: 'id',
    required: true,
    label: 'Id',
    field: 'id',
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

const teacher: object[] = useTeacherStore().teachers;

</script>

<template>
  <q-page class="md:tw-p-4">
    <BreadCrumbs :navs="['Administration', 'All Student']" />
    <div>
      <q-table
      title="All Teachers"
      :columns="TeachersColumns"
      :rows="teacher"
      :bordered="false"
      separator="none"
      :rows-per-page-options="[25]"
      flat
      square
      >
      <template v-slot:body="props">
          <q-tr :props="props" @click="$router.push(`/admin/teacher/${props.row.id}`)">
            <q-td>
              {{ props.row.id }}
            </q-td>
            <q-td>
              {{ props.row.firstname }}
            </q-td>
            <q-td>
              {{ props.row.lastname }}
            </q-td>
            <q-td>
              {{ props.row.gender}}
            </q-td>
            <q-td>
              {{ props.row.gender}}
            </q-td>
            <q-td>
              {{ props.row.class }}
            </q-td>
            <q-td>
              {{ props.row.section}}
            </q-td>
            <q-td>
              {{ props.row.dob }}
            </q-td>
            <q-td>
              {{ props.row.mobile_no}}
            </q-td>
            <q-td>
              {{ props.row.email }}
            </q-td>
          </q-tr>
        </template>
    </q-table>
    </div>
  </q-page>
</template>

<style lang="postcss" scoped>

</style>
