<script lang="ts" setup>
defineProps<{role: 'student'|'parent'|'staff'}>()
</script>

<template>
  <section class="tw-mb-2 tw-p-4 tw-rounded-lg tw-max-w-full">
    <div class="">
        <div class="tw-card">
            <div class="tw-w-20 tw-h-20 md:tw-w-14 md:tw-h-14 tw-mb-4 md:tw-mb-2">
                <img class="tw-rounded-fulls" src="/public/img/placeholder.png">
            </div>
            <div class="">
                <p class="tw-font-bold tw-uppercase text-accent">{{ role }}</p>
                <h3 class="tw-text-xl tw-heading tw-line-clamp-1 tw-uppercase">Okigwe Ebube Ireneaus</h3>
            </div>
        </div>
    </div>
</section>
</template>
