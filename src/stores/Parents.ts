import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useParentStore = defineStore('parent', () => {
  const parents = ref ([
    {
      img: '/img/placeholder.png',
      id: 'P001',
      firstname: 'Jane',
      lastname: 'Doe',
      student_id: '0001',
      address: '123 Main St',
      dob: '1975-04-12',
      mobile_no: '08123456701',
      email: 'jane.doe@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'P002',
      firstname: 'Paul',
      lastname: 'Smith',
      student_id: '0002',
      address: '456 Oak St',
      dob: '1977-06-23',
      mobile_no: '08123456702',
      email: 'paul.smith@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'P003',
      firstname: 'Peter',
      lastname: 'Johnson',
      student_id: '0003',
      address: '789 Maple St',
      dob: '1979-01-15',
      mobile_no: '08123456703',
      email: 'peter.johnson@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'P004',
      firstname: 'Emily',
      lastname: 'Brown',
      student_id: '0004',
      address: '101 Birch St',
      dob: '1981-08-30',
      mobile_no: '08123456704',
      email: 'emily.brown@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'P005',
      firstname: 'Sophia',
      lastname: 'Jones',
      student_id: '0005',
      address: '102 Cedar St',
      dob: '1983-03-22',
      mobile_no: '08123456705',
      email: 'sophia.jones@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'P006',
      firstname: 'David',
      lastname: 'Garcia',
      student_id: '0006',
      address: '103 Pine St',
      dob: '1985-09-11',
      mobile_no: '08123456706',
      email: 'david.garcia@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'P007',
      firstname: 'Maria',
      lastname: 'Martinez',
      student_id: '0007',
      address: '104 Elm St',
      dob: '1987-05-14',
      mobile_no: '08123456707',
      email: 'maria.martinez@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'P008',
      firstname: 'James',
      lastname: 'Lee',
      student_id: '0008',
      address: '105 Spruce St',
      dob: '1989-12-01',
      mobile_no: '08123456708',
      email: 'james.lee@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'P009',
      firstname: 'Lisa',
      lastname: 'Clark',
      student_id: '0009',
      address: '106 Fir St',
      dob: '1991-07-08',
      mobile_no: '08123456709',
      email: 'lisa.clark@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'P010',
      firstname: 'Richard',
      lastname: 'Lewis',
      student_id: '0010',
      address: '107 Ash St',
      dob: '1975-11-22',
      mobile_no: '08123456710',
      email: 'richard.lewis@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'P011',
      firstname: 'Nancy',
      lastname: 'Walker',
      student_id: '0011',
      address: '108 Cedar St',
      dob: '1977-02-13',
      mobile_no: '08123456711',
      email: 'nancy.walker@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'P012',
      firstname: 'Christopher',
      lastname: 'Hall',
      student_id: '0012',
      address: '109 Cherry St',
      dob: '1979-10-07',
      mobile_no: '08123456712',
      email: 'christopher.hall@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'P013',
      firstname: 'Laura',
      lastname: 'Allen',
      student_id: '0013',
      address: '110 Maple St',
      dob: '1981-03-30',
      mobile_no: '08123456713',
      email: 'laura.allen@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'P014',
      firstname: 'Charles',
      lastname: 'Young',
      student_id: '0014',
      address: '111 Birch St',
      dob: '1983-08-18',
      mobile_no: '08123456714',
      email: 'charles.young@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'P015',
      firstname: 'Karen',
      lastname: 'Hernandez',
      student_id: '0015',
      address: '112 Oak St',
      dob: '1985-11-27',
      mobile_no: '08123456715',
      email: 'karen.hernandez@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'P016',
      firstname: 'Raymond',
      lastname: 'King',
      student_id: '0016',
      address: '113 Spruce St',
      dob: '1987-07-02',
      mobile_no: '08123456716',
      email: 'raymond.king@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'P017',
      firstname: 'Patricia',
      lastname: 'Lopez',
      student_id: '0017',
      address: '114 Fir St',
      dob: '1989-04-14',
      mobile_no: '08123456717',
      email: 'patricia.lopez@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'P018',
      firstname: 'George',
      lastname: 'Scott',
      student_id: '0018',
      address: '115 Pine St',
      dob: '1991-09-23',
      mobile_no: '08123456718',
      email: 'george.scott@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'P019',
      firstname: 'Megan',
      lastname: 'Green',
      student_id: '0019',
      address: '116 Cedar St',
      dob: '1976-12-11',
      mobile_no: '08123456719',
      email: 'megan.green@example.com'
    },
    {
      img: '/img/placeholder.png',
      id: 'P020',
      firstname: 'Edward',
      lastname: 'Adams',
      student_id: '0020',
      address: '117 Maple St',
      dob: '1978-02-28',
      mobile_no: '08123456720',
      email: 'edward.adams@example.com'
    }
  ]);

  
    return {
      parents,
    }
});
