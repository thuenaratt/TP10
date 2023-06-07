<template>
    <main>
        
        <div class="container">
            <img :src="`https://api.dicebear.com/5.x/pixel-art/svg?seed=${data.username}`" alt="">
            <div class="vr"></div>
            <div class="content">
                <div class="header">
                    <h1>{{ data.firstname }} {{ data.lastname }}</h1>
                    <p ><small>@{{ data.username }}</small></p>
                </div>
                <p>id: {{ data._id }}</p>
                <p>Email: {{ data.email }}</p>
                <button class="logout" @click="logout">Logout</button>
            </div>
        </div>
    </main>
</template>

<script setup>

import axios from 'axios'
import {inject,ref} from 'vue'
import store from '../store';
const token=localStorage.getItem('token')
const route=inject('router')
const logout=()=>{
    localStorage.removeItem('token',"")
    store.commit('logout')
    route.push('/')
}
const data=ref('')
if(token!=''){

    axios.get(`${store.state.apiUrl}/user/me`, {
        headers: {
            'Authorization': `${token}`
        }
    })
    .then(response => {
        data.value=response.data
        console.log(data.value);
        // handle response

    }).catch(()=>{
        localStorage.removeItem('token')
        route.push('/')
    })
    
}else{
    route.push('/')
}

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap');
.logout{
    padding: .5rem .7rem;
    background-color: black;
    color: rgb(255, 27, 27);
    border: none;
    font-family: 'Irish Grover', cursive;
    font-size: 1.6rem;
    cursor: pointer;
    border-radius: .3rem;
}
main{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    --base:#0abf83;
    font-family: 'Irish Grover', cursive;
    .container{
        width:fit-content;
        display: flex;
        justify-content: space-around;
        // position: relative;
        background-color: var(--base);
        gap: 3rem;
        padding: 1rem;
        border-radius: .3rem;
        .content{
            display: flex;
            flex-direction: column;
            gap: .6rem;
            position: relative;
            &::after{
                content: "";
                width: 3px;
                background-color: #303030;
                position: absolute;
                top:0;
                bottom: 0;
                left: -15%;
                border-radius: 99px;
            }
            .header{
                text-align: right;
                h1{
                    text-transform: uppercase;
                    line-height: 1;
                    padding-top: 1rem;
                }
                p{
                    font-size: 1.2rem;
                    color: #303030;
                }
            }
            p{
                font-size: 1.3rem;
            }
        }
        img{
            width: 10rem;
            height: 100%;
            
        }
    }
}
</style>