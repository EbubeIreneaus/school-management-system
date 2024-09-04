<script lang="ts" setup>
import BreadCrumbs from 'src/components/BreadCrumbs.vue';


</script>

<template>
  <q-page class="md:tw-p-4">
    <BreadCrumbs :navs="['Administration', 'My Profile']" />

    <div class="">
      <q-card flat :bordered="false" class=" md:tw-my-7 tw-my-4">
        <q-card-section>
          <div >
            <q-img class="tw-w-20 tw-h-20" src="https://cdn.quasar.dev/img/avatar4.jpg" />
          </div>
          <div class="tw-my-3 text-body1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt ipsam aperiam. Harum voluptas ipsa assumenda, sint asperiores tenetur debitis iusto, sapiente fuga tempora pariatur iure magnam nulla hic non?
          </div>
        </q-card-section>
        <q-card-section>
          <div class="tw-grid sm:tw-grid-cols-2 tw-gap-y-7 tw-gap-x-2 md:tw-gap-x-0">

            <div>
              <div class="text-body1">#VC1283499</div>
              <div class="text-body2 tw-text-gray-500">Staff ID</div>
            </div>

            <div>
              <div class="text-body1">Level 10</div>
              <div class="text-body2 tw-text-gray-500">Staff Level</div>
            </div>

            <div>
              <div class="text-body1">Okigwe Ebube Ireneaus</div>
              <div class="text-body2 tw-text-gray-500">Fullname</div>
            </div>

            <div>
              <div class="text-body1 tw-line-clamp-1 tw-text-ellipsis">okigweebube7@gmail.com</div>
              <div class="text-body2 tw-text-gray-500">Email</div>
            </div>

            <div>
              <div class="text-body1">Male</div>
              <div class="text-body2 tw-text-gray-500">Gender</div>
            </div>

            <div>
              <div class="text-body1">Vice Principal Academy</div>
              <div class="text-body2 tw-text-gray-500">Position</div>
            </div>

            <div>
              <div class="text-body1">{{ new Date('2002/10/12').toLocaleDateString() }}</div>
              <div class="text-body2 tw-text-gray-500">Date of Birth</div>
            </div>

            <div>
              <div class="text-body1">Christianity</div>
              <div class="text-body2 tw-text-gray-500">Religion</div>
            </div>

            <div>
              <div class="text-body1">+234 806 198 2520</div>
              <div class="text-body2 tw-text-gray-500">Phone</div>
            </div>

            <div>
              <div class="text-body1">no 12 usman street, azhi bisa Niger State</div>
              <div class="text-body2 tw-text-gray-500">Address</div>
            </div>
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn label="Edit information" unelevated />
          <q-btn label="Deactivate" unelevated color="red-10" />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>
