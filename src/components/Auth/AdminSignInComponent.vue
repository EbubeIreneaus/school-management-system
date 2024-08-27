<!-- eslint-disable vue/no-mutating-props -->
<script lang="ts" setup>
import { reactive } from 'vue';

defineEmits(['close'])
const op = true

const authForm: { id: string; password: string } = reactive({
  id: '',
  password: '',
});
</script>

<template>
  <q-dialog v-model="op">
    <q-card class="full-width" :dark="$q.dark.isActive" style="max-width: 400px">
      <q-card-section class="row justify-between">
        <div class="text-h5 text-weight-bold">ADMIN</div>
        <q-btn icon="close" dense unelevated @click="$emit('close')"></q-btn>
      </q-card-section>
      <q-card-section>
        <q-input
          type="text"
          standout
          v-model="authForm.id"
          label="Staff Id"
          placeholder="Staff Id"
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
            <q-btn label="Submit" />
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
