<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar, useTimeout } from 'quasar';

const $router = useRouter()
const $q = useQuasar()
const isRegistering = ref(false)

const {registerTimeout} = useTimeout()

type User = {
  id: null | string;
  password: null | string;
};
const user = reactive<User>({
  id: null,
  password: null,
});

function submitFunction(){
  if (user.id?.startsWith('ad')) {
    $router.push('/admin/')
    return
  }

  if (user.id?.toLocaleLowerCase().startsWith('s')) {
    $router.push('/student/')
    return
  }

  if (user.id?.toLocaleLowerCase().startsWith('p')) {
    $router.push('/parent/')
    return
  }

$q.notify({
  color: 'red-10',
  message: 'invalid user credentials',
  icon: 'warning',
  iconSize: 'small'
})
isRegistering.value = false
return
}
const submit = () => {
  isRegistering.value = true
  registerTimeout(submitFunction, 3000)

};
</script>

<template>
  <div>
    <div class="tw-flex tw-justify-center tw-items-center fullscreen">
      <q-card class="tw-max-w-md tw-w-full tw-p-4" flat>
        <q-card-section>
          <div class="text-h4">Sign In</div>
        </q-card-section>
        <q-form @submit.prevent="submit">
          <q-card-section>
            <q-input
              v-model="user.id"
              label="Id"
              filled
              class="tw-mb-3"
              required
            />

            <q-input
              type="password"
              v-model="user.password"
              label="password"
              filled
              class="tw-mb-3"
              required
            />

            <div class="text-right text-accent">
              <router-link to="">reset password?</router-link>
            </div>
          </q-card-section>
          <q-card-section>
            <q-btn label="sign in" unelevated color="green-10" type="submit" :loading="isRegistering ? true : false" />
          </q-card-section>
        </q-form>
      </q-card>
    </div>
  </div>
</template>
