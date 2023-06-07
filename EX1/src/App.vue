<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderNav from './components/HeaderNav.vue';
</script>

<template>
<main>
  <HeaderNav />
  
  <RouterView />
</main>
</template>

<style scoped lang="scss">
main{
  width: 100%;
  height: 100%;
  display: flex;
  @media screen and (max-width: 900px) {
       flex-direction: column;
       gap: 5rem;
    }
  &> *{
    width: 100%;
   
  }
}


</style>
