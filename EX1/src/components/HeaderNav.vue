<template>
  <main v-if="isShow">
    <div class="col1">
      <img src="../../public/Icon.png" alt="logo">
      <div class="content">
        <h1>Welcome</h1>
        <p>Authentication app ~</p>
        <div class="links">
          <RouterLink :to="{name:'login'}" :class="isLogin ? 'login active':'login' " >Login</RouterLink>
          <div class="vl"></div>
          <RouterLink :to="{name:'register'}"  :class="isRegister ? 'register active':'register'">Register</RouterLink>
        </div>
      </div>
    </div>

  </main>
</template>

<script setup>
import {useRoute,RouterLink} from 'vue-router'
import {  computed} from 'vue'
const isLogin=computed(()=>{
    return useRoute().path==='/'?true:false;
})
const isRegister=computed(()=>{
    return useRoute().path==='/register'?true:false;
})
const isShow=computed(()=>{
  return useRoute().path==='/home'?false:true;
})
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Koulen&display=swap');

.vl {
  border-left: 3px solid #c6c6c6;
  border-radius: 9999px;
  height: 2rem;
}
main{
  width: 100%;
  height: 100%;
  display: flex;
  font-family: 'Koulen', cursive;
  --base:#0abf83;
  
  &>div{
    width: 100%;
    height: 100%;
  }
  .col1{
    display: flex;
    align-items: center;
    justify-content: center;
    .content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 1.7rem;
      h1{
        font-size: 4rem;
        color: var(--base);
        
      }
    }
    img{
      height: 12rem;
      
    }
    .links{
      width: 80%;
      display: flex;
      justify-content: space-between;
      a{
        background: transparent;
        text-decoration: none;
        font-family: 'Koulen', cursive;
        font-size: 1.2rem;
        transition: 300ms;
        color: black;
        cursor: pointer;
        &:hover{
          color: var(--base);
          text-decoration: underline var(--base);
        }
        &.active{
          color: var(--base);
          text-decoration: underline var(--base);
        }
      }
    }
  }

}
</style>