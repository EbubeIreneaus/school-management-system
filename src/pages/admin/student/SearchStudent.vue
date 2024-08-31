<!-- eslint-disable @typescript-eslint/no-explicit-any -->

<script lang="ts" setup>
import BreadCrumbs from 'src/components/BreadCrumbs.vue';
import { reactive, ref, watch } from 'vue';
import { useStudentStore } from 'src/stores/Students';
import { QSpinnerFacebook } from 'quasar';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const searchForm = reactive<any>({
  cls: null,
  section: null,
  sport_house: null,
  department: null,
});

const students = ref<any>([]);
const isSearching = ref(false);

const startSearch = () => {
  isSearching.value = true;
  setTimeout(() => {
    students.value = useStudentStore().search_for_student(searchForm);
    isSearching.value = false;
  }, 2000);
};

watch(
  () => isSearching.value,
  (isSearching) => {
    if (isSearching) {
      $q.loading.show({
        spinner: QSpinnerFacebook,
        spinnerColor: $q.dark.isActive ? 'primary' : 'dark',
        spinnerSize: 140,
        backgroundColor: $q.dark.isActive ? 'dark' : 'primary',
        message: 'searching for student...',
        messageColor: 'accent',
      });
    } else {
      $q.loading.hide();
    }
  }
);
</script>

<template>
  <q-page class="md:tw-p-4">
    <BreadCrumbs :navs="['Administration', 'Search Students']" />
    <div>
      <div>
        <div>Search By:</div>
        <div class="tw-w-14 tw-h-1.5 tw-bg-gray-500 tw-mt-2"></div>
      </div>
      <div class="tw-flex tw-gap-2 tw-flex-wrap tw-my-4">
        <q-select
          label="Class"
          v-model="searchForm.cls"
          :options="['JSS1', 'JSS2', 'JSS3', 'SS1', 'SS2', 'SS3']"
          filled
          :label-color="$q.dark.isActive ? 'accent' : 'black'"
          dense
          class="md:tw-w-[150px] tw-w-[100px]"
          debounce="1000"
        />

        <q-select
          label="Section"
          v-model="searchForm.section"
          :options="['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']"
          filled
          :label-color="$q.dark.isActive ? 'accent' : 'black'"
          dense
          class="md:tw-w-[150px] tw-w-[100px]"
          debounce="1000"
        />

        <q-select
          label="Sport House"
          v-model="searchForm.sport_house"
          :options="['red', 'blue', 'white', 'yellow', 'green']"
          filled
          :label-color="$q.dark.isActive ? 'accent' : 'black'"
          dense
          class="md:tw-w-[150px] tw-w-[100px]"
          debounce="1000"
        />

        <q-select
          label="department"
          v-model="searchForm.department"
          :options="['science', 'art', 'engineering', 'commercial']"
          filled
          :label-color="$q.dark.isActive ? 'accent' : 'black'"
          dense
          class="md:tw-w-[150px] tw-w-[100px]"
          debounce="1000"
        />

        <q-btn icon="search" @click="startSearch" />
      </div>
    </div>

    <div
      class="tw-min-h-[300px] tw-h-full tw-mt-10"
      :class="{
        'tw-flex tw-items-center tw-justify-center': students.length < 1,
      }"
    >
      <div class="" v-if="students.length > 0">
        <div
          class="tw-grid lg:tw-grid-cols-4 md:tw-grid-cols-3 sm:tw-grid-cols-2 tw-gap-5"
        >
          <q-card
            class="tw-w-full tw-border tw-rounded-lg tw-shadow"
            v-for="student in students"
            :key="student.reg_no"
          >
            <q-card-section class="tw-flex tw-flex-col tw-pb-10">
              <q-img
                class="tw-w-20 tw-h-20 tw-mb-3 tw-rounded-full tw-shadow-lg"
                src="/img/placeholder.png"
                alt="Bonnie image"
              />
              <h6 class="tw-mb-1 tw-text-xl tw-font-medium text-accent">
                {{ student.firstname }} {{ student.lastname }}
              </h6>
              <div class="tw-grid tw-grid-cols-2 tw-gap-2">
                <div>
                  <div class="tw-text-sm">#{{ student.reg_no }}</div>
                  <div class="tw-text-xs tw-text-gray-500">Reg No</div>
                </div>
                <div>
                  <div class="tw-text-sm">{{ student.gender }}</div>
                  <div class="tw-text-xs tw-text-gray-500">Gender</div>
                </div>
                <div>
                  <div class="tw-text-sm">{{ student.class }}</div>
                  <div class="tw-text-xs tw-text-gray-500">Class</div>
                </div>
                <div>
                  <div class="tw-text-sm">{{ student.section }}</div>
                  <div class="tw-text-xs tw-text-gray-500">Section</div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <!-- text if no data is found -->
      <div class="tw-content-center text-body1" v-else>No data found</div>
    </div>
  </q-page>
</template>
