<template>
  <div></div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';



defineOptions({
  name: 'IndexPage'
});

const $router = useRouter()

$router.push('/auth')
</script>
