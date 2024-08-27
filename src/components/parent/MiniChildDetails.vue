<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import { useStudentStore } from 'src/stores/Students';
// import { StudentType } from 'src/types/StudentTypes';

const props = defineProps<{ reg_no: string }>();
const { get_student_or_404 } = useStudentStore();

const student: any = get_student_or_404(props.reg_no);
</script>

<template>
  <q-card class="tw-max-w-[500px]">
      <div class="tw-p-2">My Child</div>
    <q-card-section class="tw-flex tw-flex-col md:tw-flex-row tw-gap-5">
      <div>
        <q-img
          :src="student.img"
          style="width: 120px; height: 130px"
          class="block"
        />
        <q-btn-group outline class="tw-w-full tw-flex tw-justify-between tw-py-2 tw-max-w-[120px]">
          <q-btn dense icon-right="visibility" size="sm" />
          <q-btn dense  icon="upload_file" size="sm" />
          <q-btn dense icon-right="download" size="sm" />
          <q-btn dense icon-right="print" size="sm" />
        </q-btn-group>
      </div>

      <table>
        <tr>
          <td class="label">Name:</td>
          <td class="value">{{ student.firstname }} {{ student.lastname }}</td>
        </tr>
        <tr>
          <td class="label">Gender:</td>
          <td class="value">{{ student.gender }}</td>
        </tr>
        <tr>
          <td class="label">Class:</td>
          <td class="value">{{ student.class }}</td>
        </tr>
        <tr>
          <td class="label">Section:</td>
          <td class="value">{{ student.section }}</td>
        </tr>
        <!-- <tr>
          <td class="label">Form Teacher:</td>
          <td class="value">{{ student.parent_name }}</td>
        </tr> -->
        <tr>
          <td class="label">Reg No:</td>
          <td class="value">#{{ student.reg_no }}</td>
        </tr>
      </table>
    </q-card-section>
    <br />
  </q-card>
</template>

<style scoped>
table {

  margin: -20px 0;
}
td {
  padding: 5px;
}
.label {
  font-weight: bolder;
  color: grey;
}
.value {
  font-weight: bold;
}
</style>
