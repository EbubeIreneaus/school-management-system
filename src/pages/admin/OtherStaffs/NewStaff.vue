<script lang="ts" setup>
import BreadCrumbs from 'src/components/BreadCrumbs.vue';
import { reactive } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const staff: any = reactive({});

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
    <BreadCrumbs :navs="['Administration', 'Register New Staff']" />

    <div class="q-mt-md">
      <q-card flat square>
        <q-card-section>
          <q-toolbal>
            <q-toolnar-title>New Staff Form</q-toolnar-title>
          </q-toolbal>
        </q-card-section>
        <q-card-section>
          <div>
            <div>Staff Information</div>
            <div class="tw-w-14 tw-h-1.5 tw-bg-gray-500 tw-mt-2"></div>
          </div>

          <div
            class="tw-grid lg:tw-grid-cols-4 md:tw-grid-cols-3 sm:tw-grid-cols-2 tw-gap-4 tw-my-4"
          >
            <q-input
              label="Firstname"
              v-model="staff.firstname"
              filled
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
              dense
              bg-color=""
            />

            <q-input
              label="Lastname"
              v-model="staff.lastname"
              filled
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
              dense
            />

            <q-input
              label="email"
              v-model="staff.email"
              filled
              type="email"
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
              dense
            />

            <q-input
              label="Date of Birth"
              v-model="staff.dob"
              type="date"
              filled
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
              dense
            />
            <q-select
              label="Gender"
              v-model="staff.gender"
              :options="['male', 'female']"
              filled
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
              dense
            />

            <q-select
              label="Position"
              v-model="staff.class"
              :options="[
                'Principal',
                'Vice Principal',
                'Bursar',
                'Asst Busar',
                'Class Cleaner',
                'Office Cleaner',
                'Cleaner',
                'Security'
              ]"
              filled
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
              dense
              multiple
            />

            <q-select
              label="Religion"
              v-model="staff.religion"
              :options="['christianity', 'islamic']"
              filled
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
              dense
            />
            <q-select
              label="Nationality"
              v-model="staff.nationality"
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
              label="Staff Id No"
              v-model="staff.admission_number"
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
              v-model="staff.file"
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
                v-model="staff.is_disable"
                label="Staff is disable"
                dense
                size="sm"
                :color="$q.dark.isActive ? 'accent' : 'black'"
                :label-color="$q.dark.isActive ? 'accent' : 'black'"
              />
            </div> -->
          </div>
        </q-card-section>

        <q-card-section>
          <div>
            <div>Guarantor Information</div>
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
              v-model="staff.gender"
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
              v-model="staff.nationality"
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
              v-model="staff.file"
              label="Profile Image"
              filled
              counter
              accept=".jpg,.png, image/*"
              dense
              class="tw-line-clamp-1"
              :label-color="$q.dark.isActive ? 'accent' : 'black'"
            />

            <!-- <div class="lg:tw-col-span-4 md:tw-col-span-3 sm:tw-col-span-2">
              <q-option-group
                v-model="parent.role"
                :options="parentResponsibility"
                inline
                :color="$q.dark.isActive ? 'accent' : 'black'"
                size="sm"
              />
            </div> -->
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
