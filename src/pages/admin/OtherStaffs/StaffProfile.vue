<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import BreadCrumbs from 'src/components/BreadCrumbs.vue';
import { useRoute } from 'vue-router';
import { useStaffStore } from 'src/stores/OtherStaff';
const $route = useRoute()

let id = $route.params.id

let staff: any = useStaffStore().get_staff_or_404(id.toString())

</script>

<template>
  <q-page class="md:tw-p-4">
    <BreadCrumbs :navs="['Administration', 'Staff Profile']" />
    <div>
      <q-card flat square>
        <q-card-section>
          <div>
            <q-img :src="staff.img" class="tw-w-20 tw-h-20" />
            <div class="tw-my-4 text-body2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta laudantium quos id quas nemo laboriosam repellendus expedita quod natus commodi distinctio eius officia ipsa cupiditate vero, quae, fugit porro autem!</div>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="tw-grid sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-x-2 tw-gap-y-7 tw-w-full">
            <div>
              <div class="text-body1">#{{ staff.id }}</div>
              <div class="text-body2 tw-text-gray-500">ID</div>
            </div>
            <div>
              <div class="text-body1">{{ staff.firstname }} {{ staff.lastname }}</div>
              <div class="text-body2 tw-text-gray-500">Fullname</div>
            </div>
            <div>
              <div class="text-body1">{{ staff.position}}</div>
              <div class="text-body2 tw-text-gray-500">Position</div>
            </div>
            <div>
              <div class="text-body1">{{ staff.gender}}</div>
              <div class="text-body2 tw-text-gray-500">Gender</div>
            </div>
            <div>
              <div class="text-body1">{{ staff.address }}</div>
              <div class="text-body2 tw-text-gray-500">address</div>
            </div>
            <div>
              <div class="text-body1">{{ staff.email }}</div>
              <div class="text-body2 tw-text-gray-500">Email</div>
            </div>
            <div>
              <div class="text-body1">{{ staff.phone }}</div>
              <div class="text-body2 tw-text-gray-500">Phone Number</div>
            </div>

          </div>
        </q-card-section>
        <q-card-section class="tw-flex tw-gap-5">
          <q-btn label="suspend" />
          <q-btn label="Make Admin" color="green-10" v-if="!staff.isAdmin" />
          <q-btn label="Remove Admin" color="warning" v-else/>
          <q-btn label="Delete Account" color="red-10" />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
