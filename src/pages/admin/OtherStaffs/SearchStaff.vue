<!-- eslint-disable @typescript-eslint/no-explicit-any -->

<script lang="ts" setup>
import BreadCrumbs from 'src/components/BreadCrumbs.vue';
import { reactive, ref, watch } from 'vue';
import { useStaffStore } from 'src/stores/OtherStaff';
import { QSpinnerFacebook } from 'quasar';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const searchForm = reactive<any>({
  position: null,
});

const staffs = ref<any>([]);
const isSearching = ref(false);

const startSearch = () => {
  isSearching.value = true;
  setTimeout(() => {
    staffs.value = useStaffStore().search_for_staff(searchForm);
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
        message: 'searching for staff...',
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
    <BreadCrumbs :navs="['Administration', 'Search Staff']" />
    <div>
      <div>
        <div>Search By:</div>
        <div class="tw-w-14 tw-h-1.5 tw-bg-gray-500 tw-mt-2"></div>
      </div>
      <div class="tw-flex tw-gap-2 tw-flex-wrap tw-my-4">
        <q-select
          label="Position"
          v-model="searchForm.position"
          :options="[
            'Principal',
            'Vice Principal',
            'Bursar',
            'Asst Busar',
            'Class Cleaner',
            'Office Cleaner',
            'Cleaner',
            'Security',
          ]"
          filled
          :label-color="$q.dark.isActive ? 'accent' : 'black'"
          dense
          class="tw-w-[150px]"
        />

        <q-btn icon="search" @click="startSearch" />
      </div>
    </div>

    <div
      class="tw-min-h-[300px] tw-h-full tw-mt-10"
      :class="{
        'tw-flex tw-items-center tw-justify-center': staffs.length < 1,
      }"
    >
      <div class="" v-if="staffs.length > 0">
        <div
          class="tw-grid lg:tw-grid-cols-4 md:tw-grid-cols-3 sm:tw-grid-cols-2 tw-gap-5"
        >
          <q-card
            class="tw-w-full tw-border tw-rounded-lg tw-shadow"
            v-for="staff in staffs"
            :key="staff.id"
          >
            <q-card-section class="tw-flex tw-flex-col tw-pb-10">
              <q-img
                class="tw-w-20 tw-h-20 tw-mb-3 tw-rounded-full tw-shadow-lg"
                src="https://cdn.quasar.dev/img/avatar4.jpg"
                alt="Bonnie image"
              />
              <h6 class="tw-mb-1 tw-text-xl tw-font-medium text-accent">
                <RouterLink :to="`/admin/staff/${staff.id}`">{{ staff.firstname }} {{ staff.lastname }}</RouterLink>
              </h6>
              <div class="tw-grid tw-grid-cols-2 tw-gap-2">
                <div>
                  <div class="tw-text-sm">#{{ staff.id }}</div>
                  <div class="tw-text-xs tw-text-gray-500">ID</div>
                </div>
                <div>
                  <div class="tw-text-sm">{{ staff.gender }}</div>
                  <div class="tw-text-xs tw-text-gray-500">Gender</div>
                </div>
                <div>
                <div class="tw-text-sm">{{ staff.phone }}</div>
                  <div class="tw-text-xs tw-text-gray-500">Phone</div>
                </div>
                <div>
                  <p class="tw-text-sm tw-text-wrap tw-line-clamp-1">{{ staff.position }}</p>
                  <div class="tw-text-xs tw-text-gray-500">Position</div>
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
