<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import { useStudentStore } from 'src/stores/Students';
// import { StudentType } from 'src/types/StudentTypes';

const props = defineProps<{ reg_no: string }>();
const { get_student_or_404 } = useStudentStore();

const student: any = get_student_or_404(props.reg_no);
</script>

<template>
  <q-card flat :bordered="false">
    <q-card-section>
      <div>My Informations</div>
    </q-card-section>

    <q-card-section class="tw-flex tw-flex-col md:tw-flex-row tw-gap-5">
      <div>
        <q-img
          :src="student.img"
          style="width: 120px; height: 130px"
          class="block"
        />
        <q-btn-group outline class="q-my-sm q-mx-auto">
          <q-btn dense icon="upload_file" size="sm" />
          <q-btn dense icon-right="download" size="sm" />
          <q-btn dense icon-right="print" size="sm" />
        </q-btn-group>
      </div>

      <table>
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
  </q-card>
</template>

<style scoped>
table {
  width: 100%;
  margin: -20px 0;
}
td {
  padding: 10px;
}
.label {
  font-weight: bolder;
}
</style>
