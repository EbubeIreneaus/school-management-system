<!-- eslint-disable vue/no-mutating-props -->
<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
defineEmits(['close'])
const op = true
const $router = useRouter()

const authForm: { id: string; password: string } = reactive({
  id: '',
  password: '',
});
</script>

<template>
  <q-dialog v-model="op">
    <q-card class="full-width" :dark="$q.dark.isActive" style="max-width: 400px">
      <q-card-section class="row justify-between">
        <div class="text-h5 text-weight-bold">STUDENT</div>
        <q-btn icon="close" dense unelevated @click="$emit('close')"></q-btn>
      </q-card-section>
      <q-card-section>
        <q-input
          type="text"
          standout
          v-model="authForm.id"
          label="matric no"
          placeholder="matric no"
          :dark="$q.dark.isActive"
          label-color="accent"
        />
        <br />
        <q-input
          type="password"
          standout
          v-model="authForm.password"
          label="password"
          placeholder="password"
          :dark="$q.dark.isActive"
          label-color="accent"
        />
      </q-card-section>
      <q-card-section>
          <div class="block">
            <q-btn label="Submit" @click="$router.push('/student')" />
          </div>
          <br />
          <div class="block text-center q-mb-md">
            <router-link to="/">forget password</router-link>
          </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style lang="postcss" scoped></style>
