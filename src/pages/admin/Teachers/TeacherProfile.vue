<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import BreadCrumbs from 'src/components/BreadCrumbs.vue';
import { useRoute } from 'vue-router';
import { useTeacherStore } from 'src/stores/Teachers';
const $route = useRoute()

let id = $route.params.id

let teacher: any = useTeacherStore().get_teacher_or_404(id.toString())

</script>

<template>
  <q-page class="md:tw-p-4">
    <BreadCrumbs :navs="['Administration', 'Teacher Profile']" />
    <div>
      <q-card flat square>
        <q-card-section>
          <div>
            <q-img :src="teacher.img" class="tw-w-20 tw-h-20" />
            <div class="tw-my-4 text-body2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta laudantium quos id quas nemo laboriosam repellendus expedita quod natus commodi distinctio eius officia ipsa cupiditate vero, quae, fugit porro autem!</div>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="tw-grid sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-x-2 tw-gap-y-7 tw-w-full">
            <div>
              <div class="text-body1">#{{ teacher.id }}</div>
              <div class="text-body2 tw-text-gray-500">Reg Id</div>
            </div>
            <div>
              <div class="text-body1">{{ teacher.firstname }} {{ teacher.lastname }}</div>
              <div class="text-body2 tw-text-gray-500">Fullname</div>
            </div>
            <div>
              <div class="text-body1">{{ teacher.class}}</div>
              <div class="text-body2 tw-text-gray-500">Class</div>
            </div>
            <div>
              <div class="text-body1">{{ teacher.section }}</div>
              <div class="text-body2 tw-text-gray-500">Section</div>
            </div>
            <div>
              <div class="text-body1">{{ teacher.gender}}</div>
              <div class="text-body2 tw-text-gray-500">Gender</div>
            </div>
            <div>
              <div class="text-body1">{{ teacher.dob }}</div>
              <div class="text-body2 tw-text-gray-500">Date of Birth</div>
            </div>
            <div>
              <div class="text-body1">{{ teacher.address }}</div>
              <div class="text-body2 tw-text-gray-500">address</div>
            </div>
            <div>
              <div class="text-body1">{{ teacher.email }}</div>
              <div class="text-body2 tw-text-gray-500">Email</div>
            </div>
            <div>
              <div class="text-body1">{{ teacher.mobile_no }}</div>
              <div class="text-body2 tw-text-gray-500">Phone Number</div>
            </div> 

          </div>
        </q-card-section>
        <q-card-section class="tw-flex tw-gap-5">
          <q-btn label="suspend" />
          <q-btn label="Make Admin" color="green-10" />
          <q-btn label="Delete Account" color="red-10" />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
