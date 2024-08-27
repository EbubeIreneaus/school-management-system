<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import BreadCrumbs from 'src/components/BreadCrumbs.vue';
import { useStudentStore } from 'src/stores/Students';

const student: any = useStudentStore().get_student_or_404('0001');
</script>

<template>
  <div class="tw-p-5">
    <BreadCrumbs :navs="['Student', 'Settings']" />
    <form>
      <fieldset>
        <legend>Student Information:</legend>
        <br />
        <div class="tw-grid lg:tw-grid-cols-4 md:tw-grid-cols-3 sm:tw-grid-cols-2 tw-grid-cols-1 tw-gap-5">
          <q-input
            v-model="student.firstname"
            label="firstname"
            standout
            :dark="$q.dark.isActive"
          />
          <q-input
            v-model="student.lastname"
            standout
            label="lastname"
            :dark="$q.dark.isActive"
          />
          <q-select
            v-model="student.gender"
            :options="['male', 'female', 'others']"
            label="Gender"
            :dark="$q.dark.isActive"
            standout
          />
          <q-input
            v-model="student.parent_name"
            standout
            label="Parent Name"
            :dark="$q.dark.isActive"
          />
          <q-select
            v-model="student.class"
            :options="['Grade 1', 'Grade 2', 'Grade 3']"
            label="Class"
            :dark="$q.dark.isActive"
            standout
          />
          <q-select
            v-model="student.section"
            :options="['A', 'b', 'c', 'D', 'E', 'F']"
            label="Section"
            :dark="$q.dark.isActive"
            standout
          />
          <q-input
            v-model="student.address"
            label="Address"
            standout
            :dark="$q.dark.isActive"
          />
          <q-input
            v-model="student.mobile_no"
            standout
            label="Number"
            :dark="$q.dark.isActive"
          />
          <q-input
            v-model="student.email"
            standout
            label="Email"
            :dark="$q.dark.isActive"
          />
        </div>
      </fieldset>
    </form>
  </div>
</template>

<style lang="css" scoped></style>
