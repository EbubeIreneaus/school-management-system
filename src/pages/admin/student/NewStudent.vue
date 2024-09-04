<script lang="ts" setup>
import BreadCrumbs from 'src/components/BreadCrumbs.vue';
import { reactive } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const student: any = reactive({});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parent: any = reactive({
  role: 'parent',
});

const parentResponsibility = [
  {
    label: 'I am just a Guidance',
    value: 'Guidance',
  },
  {
    label: 'I am his/her actual parent',
    value: 'parent',
  },
];
</script>

<template>
  <q-page class="md:tw-p-4">
    <BreadCrumbs :navs="['Administration', 'Register New Student']" />

    <div class="q-mt-md">
      <q-card flat square>
        <q-card-section>
          <q-toolbal>
            <q-toolnar-title>New Student Form</q-toolnar-title>
          </q-toolbal>
        </q-card-section>
        <q-card-section>
          <div>
            <div>Student Information</div>
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
              label="Class"
              v-model="student.class"
              :options="['JSS1', 'JSS2', 'JSS3', 'SS1', 'SS2', 'SS3']"
              filled
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
              dense
            />

            <q-select
              label="Section"
              v-model="student.section"
              :options="['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']"
              filled
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
              dense
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
              label="Sport House"
              v-model="student.sport_house"
              :options="['red', 'blue', 'white', 'yellow', 'green']"
              filled
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
              dense
              debounce="1000"
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
            <q-input
              label="Admission No"
              v-model="student.admission_number"
              filled
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
              dense
            />

            <q-input
              label="Seat No"
              v-model="student.seat_number"
              filled
              type="number"
              min="1"
              max="150"
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

            <div class="lg:tw-col-span-4 md:tw-col-span-3 sm:tw-col-span-2">
              <q-checkbox
                v-model="student.is_disable"
                label="Student is disable"
                dense
                size="sm"
                :color="$q.dark.isActive ? 'accent' : 'black'"
                :label-color="$q.dark.isActive ? 'accent' : 'black'"
              />
            </div>
          </div>
        </q-card-section>

        <q-card-section>
          <div>
            <div>Parent Information</div>
            <div class="tw-w-14 tw-h-1.5 tw-bg-gray-500 tw-mt-2"></div>
          </div>

          <div
            class="tw-grid lg:tw-grid-cols-4 md:tw-grid-cols-3 sm:tw-grid-cols-1 tw-gap-4 tw-my-4"
          >
            <q-input
              label="Firstname"
              v-model="parent.firstname"
              filled
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
              dense
              bg-color=""
            />

            <q-input
              label="Lastname"
              v-model="parent.lastname"
              filled
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
              dense
            />

            <q-input
              label="Email"
              v-model="parent.email"
              filled
              type="email"
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
              dense
            />

            <q-input
              label="Date of Birth"
              v-model="parent.dob"
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
              label="Occupation"
              v-model="parent.occupation"
              :options="[
                'Teacher',
                'Doctor',
                'Engineer',
                'Nurse',
                'Accountant',
                'Lawyer',
                'Architect',
                'Journalist',
                'Photographer',
                'Electrician',
                'Other',
              ]"
              filled
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
              dense
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

            <q-select
              label="Religion"
              v-model="parent.religion"
              :options="['christianity', 'islamic']"
              filled
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
              dense
            />
            <q-input
              label="Phone Number"
              v-model="parent.phone"
              filled
              type="tel"
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
              label="Profile Image"
              filled
              counter
              accept=".jpg,.png, image/*"
              dense
              class="tw-line-clamp-1"
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
            />

            <div class="lg:tw-col-span-4 md:tw-col-span-3 sm:tw-col-span-2">
              <q-option-group
                v-model="parent.role"
                :options="parentResponsibility"
                inline
                :color="$q.dark.isActive ? 'accent' : 'black'"
                size="sm"
              />
            </div>
          </div>
        </q-card-section>

        <q-card-section class="tw-flex tw-gap-5">
          <q-btn label="Submit" class="tw-px-10" icon="send" unelevated color="green-10" />
          <q-btn label="Reset" class="tw-px-10" icon="history" unelevated color="warning" />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
