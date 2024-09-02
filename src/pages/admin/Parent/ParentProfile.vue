<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import BreadCrumbs from 'src/components/BreadCrumbs.vue';
import { useRoute } from 'vue-router';
import { useParentStore } from 'src/stores/Parents';
const $route = useRoute();

let parentId = $route.params.id;

let parent: any = useParentStore().get_parent_or_404(parentId.toString());
</script>

<template>
  <q-page class="md:tw-p-4">
    <BreadCrumbs :navs="['Administration', 'Parent Profile']" />
    <div>
      <q-card flat square>
        <q-card-section>
          <div>
            <q-img :src="parent.img" class="tw-w-20 tw-h-20" />
            <div class="tw-my-4 text-body2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
              laudantium quos id quas nemo laboriosam repellendus expedita quod
              natus commodi distinctio eius officia ipsa cupiditate vero, quae,
              fugit porro autem!
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <div
            class="tw-grid sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-x-2 tw-gap-y-7 tw-w-full"
          >
            <div>
              <div class="text-body1">#{{ parent.id }}</div>
              <div class="text-body2 tw-text-gray-500">id</div>
            </div>
            <div>
              <div class="text-body1">
                {{ parent.firstname }} {{ parent.lastname }}
              </div>
              <div class="text-body2 tw-text-gray-500">Fullname</div>
            </div>
            <div>
              <div class="text-body1">{{ parent.dob }}</div>
              <div class="text-body2 tw-text-gray-500">Date of Birth</div>
            </div>
            <div>
              <div class="text-body1">{{ parent.address }}</div>
              <div class="text-body2 tw-text-gray-500">address</div>
            </div>
            <div>
              <div class="text-body1">{{ parent.email }}</div>
              <div class="text-body2 tw-text-gray-500">Email</div>
            </div>
            <div>
              <div class="text-body1">{{ parent.mobile_no }}</div>
              <div class="text-body2 tw-text-gray-500">Phone Number</div>
            </div>
            <div>
              <div class="">
                <ul class="tw-flex tw-flex-wrap tw-gap-2">
                  <li v-for="id in parent.student_id" :key="id">
                    <RouterLink :to="`/admin/student/${id}`"
                      ><div class="text-body1 text-accent">
                        {{ id }}
                      </div></RouterLink
                    >
                  </li>
                </ul>
              </div>
              <div class="text-body2 tw-text-gray-500">Children's</div>
            </div>

            <!-- <div>
              <div class="text-body1 text-accent hover:!tw-text-blue-300"><RouterLink :to="`/admin/parent/${parent.parent_id}`">{{ parent.parent_id }}</RouterLink></div>
              <div class="text-body2 tw-text-gray-500">Parent Id</div>
            </div> -->
          </div>
        </q-card-section>
        <q-card-section class="tw-flex tw-gap-5">
          <q-btn label="suspend" />
          <q-btn label="Delete Account" color="red-10" />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
