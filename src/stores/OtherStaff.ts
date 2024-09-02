import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStaffStore = defineStore('staff', ()=>{
  const otherStaff = ref([
    {
      img: '/img/placeholder.png',
      id: 'S001',
      firstname: 'Anna',
      lastname: 'White',
      gender: 'Female',
      isAdmin: true,
      position: 'Principal',
      address: '123 Main St',
      phone: '08012345601',
      email: 'anna.white@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'S002',
      firstname: 'Ben',
      lastname: 'Johnson',
      gender: 'Male',
      isAdmin: true,
      position: 'Vice Principal',
      address: '456 Elm St',
      phone: '08012345602',
      email: 'ben.johnson@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'S003',
      firstname: 'Carla',
      lastname: 'Smith',
      gender: 'Female',
      isAdmin: false,
      position: 'Bursar',
      address: '789 Oak St',
      phone: '08012345603',
      email: 'carla.smith@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'S004',
      firstname: 'Daniel',
      lastname: 'Brown',
      gender: 'Male',
      isAdmin: false,
      position: 'Cleaner',
      address: '101 Pine St',
      phone: '08012345604',
      email: 'daniel.brown@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'S005',
      firstname: 'Ella',
      lastname: 'Jones',
      gender: 'Female',
      isAdmin: false,
      position: 'Security',
      address: '102 Maple St',
      phone: '08012345605',
      email: 'ella.jones@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'S006',
      firstname: 'Frank',
      lastname: 'Wilson',
      gender: 'Male',
      isAdmin: false,
      position: 'Bursar',
      address: '103 Cedar St',
      phone: '08012345606',
      email: 'frank.wilson@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'S007',
      firstname: 'Grace',
      lastname: 'Davis',
      gender: 'Female',
      isAdmin: false,
      position: 'Cleaner',
      address: '104 Birch St',
      phone: '08012345607',
      email: 'grace.davis@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'S008',
      firstname: 'Harry',
      lastname: 'Miller',
      gender: 'Male',
      isAdmin: false,
      position: 'Security',
      address: '105 Elm St',
      phone: '08012345608',
      email: 'harry.miller@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'S009',
      firstname: 'Irene',
      lastname: 'Garcia',
      gender: 'Female',
      isAdmin: false,
      position: 'Bursar',
      address: '106 Oak St',
      phone: '08012345609',
      email: 'irene.garcia@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'S010',
      firstname: 'Jack',
      lastname: 'Martinez',
      gender: 'Male',
      isAdmin: false,
      position: 'Cleaner',
      address: '107 Pine St',
      phone: '08012345610',
      email: 'jack.martinez@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'S011',
      firstname: 'Karen',
      lastname: 'Taylor',
      gender: 'Female',
      isAdmin: false,
      position: 'Security',
      address: '108 Maple St',
      phone: '08012345611',
      email: 'karen.taylor@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'S012',
      firstname: 'Leo',
      lastname: 'Anderson',
      gender: 'Male',
      isAdmin: false,
      position: 'Bursar',
      address: '109 Cedar St',
      phone: '08012345612',
      email: 'leo.anderson@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'S013',
      firstname: 'Mia',
      lastname: 'Thomas',
      gender: 'Female',
      isAdmin: false,
      position: 'Cleaner',
      address: '110 Birch St',
      phone: '08012345613',
      email: 'mia.thomas@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'S014',
      firstname: 'Nathan',
      lastname: 'Jackson',
      gender: 'Male',
      isAdmin: false,
      position: 'Security',
      address: '111 Elm St',
      phone: '08012345614',
      email: 'nathan.jackson@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'S015',
      firstname: 'Olivia',
      lastname: 'White',
      gender: 'Female',
      isAdmin: false,
      position: 'Bursar',
      address: '112 Oak St',
      phone: '08012345615',
      email: 'olivia.white@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'S016',
      firstname: 'Paul',
      lastname: 'Harris',
      gender: 'Male',
      isAdmin: false,
      position: 'Cleaner',
      address: '113 Pine St',
      phone: '08012345616',
      email: 'paul.harris@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'S017',
      firstname: 'Quinn',
      lastname: 'Lewis',
      gender: 'Female',
      isAdmin: false,
      position: 'Security',
      address: '114 Maple St',
      phone: '08012345617',
      email: 'quinn.lewis@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'S018',
      firstname: 'Ryan',
      lastname: 'Walker',
      gender: 'Male',
      isAdmin: false,
      position: 'Bursar',
      address: '115 Cedar St',
      phone: '08012345618',
      email: 'ryan.walker@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'S019',
      firstname: 'Sophia',
      lastname: 'Young',
      gender: 'Female',
      isAdmin: false,
      position: 'Cleaner',
      address: '116 Birch St',
      phone: '08012345619',
      email: 'sophia.young@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'S020',
      firstname: 'Tom',
      lastname: 'King',
      gender: 'Male',
      isAdmin: false,
      position: 'Security',
      address: '117 Elm St',
      phone: '08012345620',
      email: 'tom.king@example.com'
    }
  ]);

  const get_staff_or_404 = (id : string) => {
    return otherStaff.value.find(staff => staff.id === id)
  }
  return {
    otherStaff,
    get_staff_or_404
  }
});
