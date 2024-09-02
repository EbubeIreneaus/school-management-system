<!-- eslint-disable @typescript-eslint/no-explicit-any -->

<script lang="ts" setup>
import { QTableColumn } from 'quasar';
import BreadCrumbs from 'src/components/BreadCrumbs.vue';
import { useStaffStore } from 'src/stores/OtherStaff';

const staff: any = useStaffStore().otherStaff;

const tableColumn: QTableColumn[] = [
  { name: 'img', field: 'img', label: 'Image', align: 'left' },
  { name: 'id', field: 'id', label: 'ID', sortable: true, align: 'left' },

  {
    name: 'firstname',
    field: 'firstname',
    label: 'Firstname',
    align: 'left',
    sortable: true,
  },
  {
    name: 'lastname',
    field: 'lastname',
    label: 'Lastname',
    align: 'left',
    sortable: true,
  },
  {
    name: 'position',
    label: 'Position',
    field: 'position',
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
</script>

<template>
  <q-page class="md:tw-p-4">
    <BreadCrumbs :navs="['Administration', 'Staffs']" />

    <div>
      <q-table
        :columns="tableColumn"
        :rows="staff"
        row-key="id"
        title="All Staff"
        flat
        separator="none"
        :rows-per-page-options="[20, 40, 60]"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td class="tw-p-1">
              <q-img :src="props.row.img" class="tw-w-10 tw-h-10" />
            </q-td>
            <q-td class="text-accent">
              <RouterLink :to="`/admin/staff/${props.row.id}`"
                >#{{ props.row.id }}</RouterLink
              >
            </q-td>
            <q-td>
              {{ props.row.firstname }}
            </q-td>
            <q-td>
              {{ props.row.lastname }}
            </q-td>
            <q-td>
              {{ props.row.position }}
            </q-td>
            <q-td>
              {{ props.row.gender }}
            </q-td>
            <q-td>
              {{ props.row.phone }}
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
