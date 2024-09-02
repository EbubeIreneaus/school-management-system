<script lang="ts" setup>
import { reactive, ref } from 'vue';

const dialog = ref(true);
defineEmits(['close'])
const notice = reactive({
  title: null,
  eventDate: null,
  content: null,
});

</script>

<template>
  <q-dialog v-model="dialog">
    <q-card class="!tw-max-w-md tw-w-full" flat square>
      <q-card-section>
        <q-toolbar>
          <q-toolbar-title>New Notice</q-toolbar-title>
          <q-space />
          <q-btn icon="close" color="red-10" @click="$emit('close')"/>
        </q-toolbar>
      </q-card-section>
      <q-card-section>
        <form>
          <q-input
            v-model="notice.title"
            label="Title"
            stack-label
            filled
            class="tw-mb-3"
          />
          <q-input
            type="date"
            v-model="notice.eventDate"
            label="Notice valid till"
            filled
            class="tw-mb-3"
          />
          <q-input
            v-model="notice.content"
            type="textarea"
            autogrow
            filled
            label="Event Content"
            class="tw-mb-3"
          />
        </form>
      </q-card-section>
      <q-card-section>
        <q-btn label="Post" color="green-10"/>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
