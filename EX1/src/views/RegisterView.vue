<template>
    <main>
  
      <div class="col2">
        <FormRegister />
      </div>
    </main>
  </template>
  
  <script setup>
  import FormRegister from '../components/FormRegister.vue'
  </script>
  
  <style lang="scss" scoped>
  main{
    width: 100%;
    height: 100%;
    display: flex;
  
    font-family: 'Koulen', cursive;
    --base:#0abf83;
    &>div{
      width: 100%;
    }
    .col2{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  </style>