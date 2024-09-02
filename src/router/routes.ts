import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('pages/IndexPage.vue'),
  },
  // student
  {
    path: '/student',
    component: () => import('layouts/StudentLayout.vue'),
    children: [
      { path: '', component: () => import('pages/student/IndexPage.vue') },
      {
        path: 'profile',
        component: () => import('pages/student/ProfilePage.vue'),
      },
      {
        path: 'teachers',
        component: () => import('pages/student/MyTeachersPage.vue'),
      },
      {
        path: 'class',
        component: () => import('pages/student/ClassCalenderPage.vue'),
      },
      {
        path: 'myCourse',
        component: () => import('pages/student/MyCoursePage.vue'),
      },
      { path: 'exam', component: () => import('pages/student/ExamTable.vue') },
      {
        path: 'notice',
        component: () => import('pages/student/NoticeBoard.vue'),
      },
      {
        path: 'settings',
        component: () => import('pages/student/SettingPage.vue'),
      },
    ],
  },
  // parent
  {
    path: '/parent',
    component: () => import('layouts/ParentLayout.vue'),
    children: [
      { path: '', component: () => import('pages/parent/IndexPage.vue') },
      {
        path: 'teachers',
        component: () => import('pages/parent/AllTeachersPage.vue'),
      },
      {
        path: 'profile', component: () => import('pages/parent/ProfilePage.vue')
      },
      {
        path: 'exam', component: () => import('pages/parent/ExamTable.vue')
      },
      {path: 'expenses', component: () => import('pages/parent/AllExpensesPage.vue')},
      {path: 'notice', component: () => import('pages/parent/NoticeBoard.vue')},
      {path: 'settings', component: () => import('pages/parent/SettingPage.vue')},
      {path: 'message', component: () => import('pages/parent/MessagePage.vue')}
    ],
  },
  // administrative
  {
    path: '/admin',
    component: ()=> import('layouts/AdminLayout.vue'),
    children: [
      {path: '', component: () => import('pages/admin/IndexPage.vue')},
      {path: 'profile', component: () => import('pages/admin/ProfilePage.vue')},
      {path: 'notice', component: ()=> import('pages/admin/NoticeBoardPage.vue')},
      {path: 'message', component: () => import('pages/admin/MessagePage.vue')},
      {path: 'student', children: [
        {path: 'new', component: ()=> import('pages/admin/student/NewStudent.vue')},
        {path: 'all', component: ()=> import('pages/admin/student/AllStudent.vue')},
        {path: 'search', component: () => import('pages/admin/student/SearchStudent.vue')}
      ]},
      {path: 'student/:reg_no', component: ()=> import('pages/admin/student/StudentProfile.vue')},
      {path: 'teacher', children: [
        {path: 'new', component: ()=> import('pages/admin/Teachers/NewTeacher.vue')},
        {path: 'all', component: ()=> import('pages/admin/Teachers/AllTeachers.vue')},
        {path: 'search', component: () => import('pages/admin/Teachers/SearchTeacher.vue')}
      ]},
      {path: 'teacher/:id', component: ()=> import('pages/admin/Teachers/TeacherProfile.vue')},
      {path: 'parent', children: [
        {path: 'all', component: ()=> import('pages/admin/Parent/AllParents.vue')},
        {path: 'edit', component: ()=> import('pages/admin/Parent/EditPage.vue')}

      ]},
      {path: 'parent/:id', component:()=> import('pages/admin/Parent/ParentProfile.vue')},

      {path: 'staff', children: [
        {path: 'all', component: ()=> import('pages/admin/OtherStaffs/AllStaff.vue')},
        {path: ':id', component: ()=> import('pages/admin/OtherStaffs/StaffProfile.vue')},
        {path: 'new', component: ()=> import('pages/admin/OtherStaffs/NewStaff.vue')},
        {path: 'search', component: ()=>import('pages/admin/OtherStaffs/SearchStaff.vue')}

      ]},
    ]
  },
  {
    path: '/auth/',
    children: [
      {
        path: '',
        component: () => import('pages/auth/AuthPage.vue'),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
