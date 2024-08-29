<script lang="ts" setup>
import { ref } from 'vue';
let date = new Date()
const calendarDate = ref(`${date.getFullYear()}/${(date.getMonth()+1).toString().padStart(2, '0')}/${date.getDate()}`);

const options = ref(['']);

const eventsObj = [
  {
    title: 'Team Meeting',
    event: 'Quarterly Strategy Discussion',
    date: '2024/08/05',
    time: '10:00 AM',
  },
  {
    title: 'Product Launch',
    event: 'New Software Release',
    date: '2024/08/12',
    time: '02:00 PM',
  },
  {
    title: 'Client Presentation',
    event: 'Project Update Meeting',
    date: '2024/08/15',
    time: '11:00 AM',
  },
  {
    title: 'Workshop',
    event: 'UI/UX Design Workshop',
    date: '2024/08/20',
    time: '08:00 AM',
  },
  {
    title: 'Webinar',
    event: 'Tech Trends in 2024',
    date: '2024/08/25',
    time: '04:00 PM',
  },
];

for (const ev of eventsObj) {
  options.value?.push(ev.date);
}
const event = [...options.value]
options.value.push(calendarDate.value)

</script>

<template>
  <div class="">
    <q-date
      v-model="calendarDate"
      event-color="orange"
      :options="options"
      :events="event"
      :dark="true"
      title="Events"
      flat
      color="grey"
      class="tw-w-full"
    />
  </div>
</template>
