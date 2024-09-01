<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import BreadCrumbs from 'src/components/BreadCrumbs.vue';
import { useRoute } from 'vue-router';
import { useStudentStore } from 'src/stores/Students';
const $route = useRoute()

let regNo = $route.params.reg_no

let student: any = useStudentStore().get_student_or_404(regNo.toString())

</script>

<template>
  <q-page class="md:tw-p-4">
    <BreadCrumbs :navs="['Administration', 'Student Profile']" />
    <div>
      <q-card flat square>
        <q-card-section>
          <div>
            <q-img :src="student.img" class="tw-w-20 tw-h-20" />
            <div class="tw-my-4 text-body2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta laudantium quos id quas nemo laboriosam repellendus expedita quod natus commodi distinctio eius officia ipsa cupiditate vero, quae, fugit porro autem!</div>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="tw-grid sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-x-2 tw-gap-y-7 tw-w-full">
            <div>
              <div class="text-body1">#{{ student.reg_no }}</div>
              <div class="text-body2 tw-text-gray-500">Reg No</div>
            </div>
            <div>
              <div class="text-body1">{{ student.firstname }} {{ student.lastname }}</div>
              <div class="text-body2 tw-text-gray-500">Fullname</div>
            </div>
            <div>
              <div class="text-body1">{{ student.class}}</div>
              <div class="text-body2 tw-text-gray-500">Class</div>
            </div>
            <div>
              <div class="text-body1">{{ student.section }}</div>
              <div class="text-body2 tw-text-gray-500">Section</div>
            </div>
            <div>
              <div class="text-body1">{{ student.gender}}</div>
              <div class="text-body2 tw-text-gray-500">Gender</div>
            </div>
            <div>
              <div class="text-body1">{{ student.dob }}</div>
              <div class="text-body2 tw-text-gray-500">Date of Birth</div>
            </div>
            <div>
              <div class="text-body1">{{ student.address }}</div>
              <div class="text-body2 tw-text-gray-500">address</div>
            </div>
            <div>
              <div class="text-body1">{{ student.email }}</div>
              <div class="text-body2 tw-text-gray-500">Email</div>
            </div>
            <div>
              <div class="text-body1">{{ student.mobile_no }}</div>
              <div class="text-body2 tw-text-gray-500">Phone Number</div>
            </div>

            <div>
              <div class="text-body1 text-accent hover:!tw-text-blue-300"><RouterLink :to="`/admin/parent/${student.parent_id}`">{{ student.parent_id }}</RouterLink></div>
              <div class="text-body2 tw-text-gray-500">Parent Id</div>
            </div>

          </div>
        </q-card-section>
        <q-card-section class="tw-flex tw-gap-5">
          <q-btn label="suspend" />
          <q-btn label="Expel" />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
