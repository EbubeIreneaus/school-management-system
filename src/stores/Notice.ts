import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNoticeStore = defineStore('notice', ()=>{
  const notices = ref([
    {
      id: 1,
      date: '2024-08-20',
      name: 'Exam Schedule',
      timePosted: '10:30 AM',
      content: 'The final exam schedule has been released. Please check the notice board for details.'
    },
    {
      id: 2,
      date: '2024-08-18',
      name: 'School Reopening',
      timePosted: '09:00 AM',
      content: 'School will reopen on September 5th. All students are required to report by 8:00 AM.'
    },
    {
      id: 3,
      date: '2024-08-15',
      name: 'Parent-Teacher Meeting',
      timePosted: '02:15 PM',
      content: 'A parent-teacher meeting is scheduled for August 25th at 3:00 PM in the school auditorium.'
    },
    {
      id: 4,
      date: '2024-08-10',
      name: 'Sports Day',
      timePosted: '11:00 AM',
      content: 'Sports Day will be held on August 30th. All students are encouraged to participate.'
    },
    {
      id: 5,
      date: '2024-08-05',
      name: 'Library Books Return',
      timePosted: '08:45 AM',
      content: 'All borrowed library books must be returned by August 25th to avoid late fees.'
    }
  ])

  return {
    notices
  }
});
