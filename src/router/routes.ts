import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('pages/IndexPage.vue'),
  },
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
      {path: 'settings', component: () => import('pages/parent/SettingPage.vue')}
    ],
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
