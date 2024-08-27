<script lang="ts" setup>
import { QTableColumn } from 'quasar';
import BreadCrumbs from 'src/components/BreadCrumbs.vue';
import { reactive } from 'vue';


const CourseColumns: QTableColumn[] = [
  {
    name: 'subjectID',
    required: true,
    label: 'Subject Code',
    field: 'code',
    sortable: true,
    align: 'left',
  },
  {
    name: 'name',
    label: 'Subject Name',
    field: 'name',
    align: 'left',
    sortable: true,
  },
  { name: 'unit', label: 'Unit', field: 'unit', sortable: true, align: 'left' },
  {
    name: 'teacher',
    label: 'Teacher',
    field: 'teacher',
    align: 'left',
    sortable: true,
  },
];

const CourseRow: object[] = [
  {
    code: '#001',
    name: 'English Language',
    unit: 3,
    teacher: 'Mr. Moses Oluwale',
  },
  { code: '#002', name: 'Mathematics', unit: 3, teacher: 'Mr. Jackson Ugwu' },
  { code: '#003', name: 'Futher Maths', unit: 2, teacher: 'Dr. John Obioma ' },
  {
    code: '#004',
    name: 'Computer Science',
    unit: 2,
    teacher: 'Mr. Ebube Ireneaus',
  },
  { code: '#005', name: 'Physics', unit: 3, teacher: 'Phd. Mildred Amuche' },
  { code: '#006', name: 'Chemistry', unit: 3, teacher: 'Mr. Joshua Abdul' },
  { code: '#007', name: 'Biology', unit: 3, teacher: 'Mrs. Mariam Segun' },
  { code: '#008', name: 'geography', unit: 2, teacher: 'Mrs. Stella Okigwe' },
  {
    code: '#009',
    name: 'Civic Education',
    unit: 2,
    teacher: 'Mr. Edward Madaki',
  },
];

const newCourse = reactive({
  name: '',
  unit: null,
  teacher: '',
});
</script>

<template>
  <div class="md:tw-p-5">
    <BreadCrumbs :navs="['Student', 'Course Registeration']" />
  <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-5">
    <div class="tw-max-w-[350px] tw-w-full">
      <q-card>
        <q-card-section>
          <div class="text-h5">Register New Course</div>
        </q-card-section>
        <q-form>
          <q-card-section>
            <q-input
              type="text"
              label="Subject Name"
              v-model="newCourse.name"
              outlined
              :dark="$q.dark.isActive"
              class="tw-mb-3"
            ></q-input>
            <q-input
              type="number"
              label="unit"
              min="1"
              max="3"
              v-model="newCourse.unit"
              outlined
              :dark="$q.dark.isActive"
              class="tw-mb-3"
            ></q-input>
            <q-input
              type="text"
              label="Teacher Name"
              v-model="newCourse.teacher"
              outlined
              :dark="$q.dark.isActive"
              class="tw-mb-3"
            ></q-input>
          </q-card-section>

          <q-card-section class="tw-flex tw-justify-end tw-gap-3">
            <q-btn label="Submit" class="q-px-lg" color="accent"></q-btn>
            <q-btn label="Reset" class="q-px-lg" color="amber"></q-btn>
          </q-card-section>
        </q-form>
      </q-card>
    </div>
    <div class="tw-w-full">
      <q-table
        :columns="CourseColumns"
        :rows="CourseRow"
        :rows-per-page-options="[9, 20]"
        flat
        title="My Course"
        title-class="text-h4 text-weight-bold text-accent"
        class="tw-w-full"
      >
      </q-table>
    </div>
  </div>
  </div>
</template>
