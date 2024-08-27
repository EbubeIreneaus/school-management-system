<script lang="ts" setup>
import { QTableColumn } from 'quasar';
defineProps<{ isComp: boolean }>();

const ExpensesCol: QTableColumn[] = [
  { name: 'id', label: 'ID No', field: 'id', align: 'left', sortable: true },
  {
    name: 'type',
    label: 'Expense Type',
    field: 'type',
    align: 'left',
    sortable: true,
  },
  {
    name: 'amount',
    label: 'Amount',
    field: 'amount',
    align: 'left',
    sortable: true,
  },
  { name: 'email', label: 'Email', field: 'email', align: 'left' },
  { name: 'date', label: 'Date', field: 'date', align: 'left' },
];

const Expenses = [
  {
    id: '#001',
    type: 'School Fees',
    amount: 'N70,000',
    email: 'aa.bb@gmail.com',
    date: '10/10/2023',
  },
  {
    id: '#002',
    type: 'PTA',
    amount: 'N10,000',
    email: 'aa.bb@gmail.com',
    date: '10/10/2023',
  },
  {
    id: '#003',
    type: 'School Fees',
    amount: 'N93,000',
    email: 'aa.bb@gmail.com',
    date: '10/10/2023',
  },
  {
    id: '#004',
    type: 'PTA',
    amount: 'N12,000',
    email: 'aa.bb@gmail.com',
    date: '10/10/2023',
  },
];
</script>

<template>
  <q-table
    :columns="ExpensesCol"
    :rows="Expenses"
    title="This Term Expense"
    row-key="id"
    :rows-per-page-options="[isComp?10:40]"
    square
    flat
    separator="none"
  >
  </q-table>
</template>
