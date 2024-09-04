<template>
  <q-card class="q-py-md text-grey" flat square>
    <apexchart
      type="line"
      :options="options"
      :series="series"
      height="200"
    ></apexchart>
  </q-card>
</template>

<script setup>
import { useQuasar } from 'quasar';
const $quasar = useQuasar()
let options = {
  title: {
    text: 'Fees Collection',
    style: {
      color: 'grey',
    },
  },
  chart: {
    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      tools: {
        download: true,
        selection: false,
        zoom: false,
        zoomin: true,
        zoomout: true,
        pan: false,
        reset: false | '<img src="/static/icons/reset.png" width="20">',
        customIcons: [],
      },
    },
  },
  stroke: {
    curve: 'smooth',
  },
  grid: {
    show: false,
  },
  xaxis: {
    labels:{
      style:{
        colors: $quasar.dark.isActive? 'grey': 'black'
      }
    }
  },
  yaxis: {
    labels:{
      style:{
        colors: $quasar.dark.isActive? 'grey': 'black'
      }
    }
  },
};
let series = [
  {
    name: 'Revenue',
    data: [
      { y: 30, x: '01/06' },
      { y: 40, x: '02/06' },
      { y: 45, x: '03/06' },
      { y: 50, x: '04/06' },
      { y: 49, x: '05/06' },
      { y: 60, x: '06/06' },
      { y: 70, x: '07/06' },
      { y: 91, x: '08/06' },
    ],
  },
  // {
  //   name: 'Expenses',
  //   data: [
  //     { y: 40, x: '01/06/2024' },
  //     { y: 30, x: '02/06/2024' },
  //     { y: 25, x: '03/06/2024' },
  //     { y: 60, x: '04/06/2024' },
  //     { y: 49, x: '05/06/2024' },
  //     { y: 78, x: '06/06/2024' },
  //     { y: 70, x: '07/06/2024' },
  //     { y: 50, x: '08/06/2024' },
  //   ],
  // },
  // {
  //   name: 'Profit',
  //   data: [
  //     { y: 70, x: '01/06/2024' },
  //     { y: 50, x: '02/06/2024' },
  //     { y: 75, x: '03/06/2024' },
  //     { y: 65, x: '04/06/2024' },
  //     { y: 39, x: '05/06/2024' },
  //     { y: 78, x: '06/06/2024' },
  //     { y: 40, x: '07/06/2024' },
  //     { y: 60, x: '08/06/2024' },
  //   ],
  // },
];
</script>
