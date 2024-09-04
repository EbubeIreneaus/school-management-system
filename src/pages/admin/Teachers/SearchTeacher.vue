<!-- eslint-disable @typescript-eslint/no-explicit-any -->

<script lang="ts" setup>
import BreadCrumbs from 'src/components/BreadCrumbs.vue';
import { reactive, ref, watch } from 'vue';
import { useTeacherStore } from 'src/stores/Teachers';
import { QSpinnerFacebook } from 'quasar';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const searchForm = reactive<any>({
  subject: null,
  isFormTeacher: null,
  isAdmin: null,
});

const teachers = ref<any>([]);
const isSearching = ref(false);

const startSearch = () => {
  isSearching.value = true;
  setTimeout(() => {
    teachers.value = useTeacherStore().search_for_teacher(searchForm);
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
        message: 'searching for teacher...',
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
    <BreadCrumbs :navs="['Administration', 'Search Teachers']" />
    <div>
      <div>
        <div>Search By:</div>
        <div class="tw-w-14 tw-h-1.5 tw-bg-gray-500 tw-mt-2"></div>
      </div>
      <div class="tw-flex tw-gap-2 tw-flex-wrap tw-my-4">
        <q-select
          label="Assigned Subject"
          v-model="searchForm.subject"
          :options="['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Health Education']"
          filled
          :label-color="$q.dark.isActive ? 'accent' : 'black'"
          dense
          class="md:tw-w-[150px] tw-w-[100px]"
          debounce="1000"
        />

        <q-select
          label="Administration Role"
          v-model="searchForm.isAdmin"
          :options="['true', 'false']"
          filled
          :label-color="$q.dark.isActive ? 'accent' : 'black'"
          dense
          class="md:tw-w-[150px] tw-w-[100px]"
          debounce="1000"
        />

        <q-select
          label="Form Teacher"
          v-model="searchForm.isFormTeacher"
          :options="['true', 'false']"
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
        'tw-flex tw-items-center tw-justify-center': teachers.length < 1,
      }"
    >
      <div class="" v-if="teachers.length > 0">
        <div
          class="tw-grid lg:tw-grid-cols-4 md:tw-grid-cols-3 sm:tw-grid-cols-2 tw-gap-5"
        >
          <q-card
            class="tw-w-full tw-border tw-rounded-lg tw-shadow"
            v-for="teacher in teachers"
            :key="teacher.id"
          >
            <q-card-section class="tw-flex tw-flex-col tw-pb-10">
              <q-img
                class="tw-w-20 tw-h-20 tw-mb-3 tw-rounded-full tw-shadow-lg"
                src="/img/placeholder.png"
                alt="Bonnie image"
              />
              <h6 class="tw-mb-1 tw-text-xl tw-font-medium text-accent">
                <RouterLink :to="`/admin/teacher/${teacher.id}`">{{ teacher.firstname }} {{ teacher.lastname }}</RouterLink>
              </h6>
              <div class="tw-grid tw-grid-cols-2 tw-gap-2">
                <div>
                  <div class="tw-text-sm">#{{ teacher.id }}</div>
                  <div class="tw-text-xs tw-text-gray-500">ID</div>
                </div>
                <div>
                  <div class="tw-text-sm">{{ teacher.gender }}</div>
                  <div class="tw-text-xs tw-text-gray-500">Gender</div>
                </div>
                <div>
                  <div class="tw-text-sm">{{ teacher.class }}</div>
                  <div class="tw-text-xs tw-text-gray-500">Class</div>
                </div>
                <div>
                  <div class="tw-text-sm">{{ teacher.section }}</div>
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
