<script lang="ts" setup>
import BreadCrumbs from 'src/components/BreadCrumbs.vue';
import { reactive } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const student: any = reactive({});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parent: any = reactive({
  role: 'parent',
});

// const GuarantorRole = [
//   {
//     label: 'I am just ',
//     value: 'Guidance',
//   },
//   {
//     label: 'I am his/her actual parent',
//     value: 'parent',
//   },
// ];
</script>

<template>
  <q-page class="md:tw-p-4">
    <BreadCrumbs :navs="['Administration', 'Edit Parent Information']" />

    <div class="q-mt-md">
      <q-card flat square>
        <q-card-section>
          <q-toolbal>
            <q-toolnar-title> Parent Form</q-toolnar-title>
          </q-toolbal>
        </q-card-section>
        <q-card-section>
          <div>
            <div>Parent Information</div>
            <div class="tw-w-14 tw-h-1.5 tw-bg-gray-500 tw-mt-2"></div>
          </div>

          <div
            class="tw-grid lg:tw-grid-cols-4 md:tw-grid-cols-3 sm:tw-grid-cols-2 tw-gap-4 tw-my-4"
          >
            <q-input
              label="Firstname"
              v-model="student.firstname"
              filled
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
              dense
              bg-color=""
            />

            <q-input
              label="Lastname"
              v-model="student.lastname"
              filled
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
              dense
            />

            <q-input
              label="email"
              v-model="student.email"
              filled
              type="email"
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
              dense
            />

            <q-input
              label="Date of Birth"
              v-model="student.dob"
              type="date"
              filled
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
              dense
            />
            <q-select
              label="Gender"
              v-model="student.gender"
              :options="['male', 'female']"
              filled
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
              dense
            />

            <q-select
              label="Assigned Subject"
              v-model="student.class"
              :options="['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Health Education']"
              filled
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
              dense
              multiple
            />

            <q-select
              label="Religion"
              v-model="student.religion"
              :options="['christianity', 'islamic']"
              filled
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
              dense
            />

            <q-select
              label="department"
              v-model="student.department"
              :options="['science', 'art', 'engineering', 'commercial']"
              filled
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
              dense
              debounce="1000"
            />
            <q-select
              label="Nationality"
              v-model="student.nationality"
              :options="[
                'Nigeria',
                'Ghana',
                'Ivory Coast',
                'Egypt',
                'South Africa',
                'Togo',
                'Cameron',
                'Other',
              ]"
              filled
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
              dense
            />
            <q-input
              label="Teacher Staff No"
              v-model="student.admission_number"
              filled
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
              dense
            />

            <q-input
              label="Address"
              v-model="parent.address"
              filled
              class="sm:tw-col-span-2"
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
              dense
            />

            <q-file
              v-model="student.file"
              label="profile pics"
              filled
              counter
              accept=".jpg,.png, image/*"
              dense
              class="tw-line-clamp-1"
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
            />

            <!-- <div class="lg:tw-col-span-4 md:tw-col-span-3 sm:tw-col-span-2">
              <q-checkbox
                v-model="student.is_disable"
                label="Student is disable"
                dense
                size="sm"
                :color="$q.dark.isActive ? 'accent' : 'black'"
                :label-color="$q.dark.isActive ? 'accent' : 'black'"
              />
            </div> -->
          </div>
        </q-card-section>

        <q-card-section class="tw-flex tw-gap-5">
          <q-btn label="Save" class="tw-px-10" icon="send" unelevated color="green-10" />
          <q-btn label="Reset" class="tw-px-10" icon="history" unelevated color="warning" />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
