<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import { useStudentStore } from 'src/stores/Students';
import BreadCrumbs from 'src/components/BreadCrumbs.vue';
// import { StudentType } from 'src/types/StudentTypes';

const { get_student_or_404 } = useStudentStore();

const student: any = get_student_or_404('0001');
</script>

<template>
  <div class="md:tw-p-4">
    <BreadCrumbs :navs="['Student', 'My Profile']" />

    <q-card class="q-ma-sm" flat square>
      <q-toolbar>
        <q-toolbar-title
          ><div class="text-body1">
            {{ student.firstname }} {{ student.lastname }}
          </div></q-toolbar-title
        >
        <q-space></q-space>
        <q-btn-group flat>
          <q-btn icon="edit" flat dense></q-btn>
          <q-btn icon="download" flat dense></q-btn>
          <q-btn icon="print" flat dense></q-btn>
        </q-btn-group>
      </q-toolbar>

      <q-card-section class="nq-row gap-5">
        <q-img
          :src="student.img"
          style="width: 150px; height: 150px"
          class="q-mb-md"
        />

        <table class="nq-col-sm-12 nq-col-md-6">
          <tr>
            <td class="label">First Name:</td>
            <td class="value">{{ student.firstname }}</td>
          </tr>
          <tr>
            <td class="label">Last Name:</td>
            <td class="value">{{ student.lastname }}</td>
          </tr>
          <tr>
            <td class="label">Gender:</td>
            <td class="value">{{ student.gender }}</td>
          </tr>
          <tr>
            <td class="label">Parent Name:</td>
            <td class="value">Micheal Esthene</td>
          </tr>
          <tr>
            <td class="label">Class:</td>
            <td class="value">{{ student.class }}</td>
          </tr>
          <tr>
            <td class="label">Section:</td>
            <td class="value">{{ student.section }}</td>
          </tr>
          <tr>
            <td class="label">Date of Birth:</td>
            <td class="value">{{ student.dob }}</td>
          </tr>
          <tr>
            <td class="label">Address:</td>
            <td class="value">{{ student.address }}</td>
          </tr>
          <tr>
            <td class="label">Mobile No:</td>
            <td class="value">{{ student.mobile_no }}</td>
          </tr>
          <tr>
            <td class="label">Email:</td>
            <td class="value">{{ student.email }}</td>
          </tr>
          <tr>
            <td class="label">Reg No:</td>
            <td class="value">{{ student.reg_no }}</td>
          </tr>
        </table>
      </q-card-section>
      <q-card-section></q-card-section>
    </q-card>
  </div>
</template>

<style scoped>
table {
  /* width: 100%; */
  margin: -20px 0;
}
td {
  padding: 10px;
}
.label {
  font-weight: bolder;
}
</style>
