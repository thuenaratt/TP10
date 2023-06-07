<template>
    <main>
        <img src="../../public/404_warning.png" alt="404_image">
        <h1><span>Opp !!</span> Seem like there nothing here</h1>
        <RouterLink :to="{name:'home'}">Home</RouterLink>
    </main>
</template>

<script setup>
import {RouterLink} from 'vue-router'
</script>

<style lang="scss" scoped>

main{
    --base:#0abf83;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: white;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 9999;
    img{
        width: 15rem;
    }
    span{
        color: rgb(232, 20, 20);
        font-size: 3rem;
        @media screen and (max-width: 600px) {
            font-size: 1.5rem;
        }
    }
    h1{
        @media screen and (max-width: 600px) {
            font-size: 1.2rem;
        }
    }
    a{
        text-decoration: none;
        padding: .4rem 1.5rem;
        border-radius: .3rem;
        color: black;
        background-color: var(--base);
        font-family: 'Koulen', cursive;
        color: white;
        font-size: 1.5rem;
    }
}

</style>