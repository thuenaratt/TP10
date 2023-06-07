<template>
    <form action="#" @submit="save">
        <fieldset>
            <img src="../../public/User_login_avata.jpg" alt="Avatar">
            <div class="input">
                <label for="email">Username or Email</label>
                <input  @change="checkValidation" type="text" id="email" v-model="email" placeholder="Enter email">
                <p v-if="!isStart && !isValidEmail">Email is Required</p>
            </div>
            <div class="input">
                <label for="pwd">Password</label>
                <div class="pass">
                    <input @change="checkValidation" :type="isShow ? 'text': 'password'" id="pwd" placeholder="Enter Password" v-model="password">
                    <svg @click="toggle" v-if="!isShow"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                    <svg @click="toggle" v-else  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    
                </div>
                <p v-if="!isStart && !isValidPass">Password must be at least 6 charater</p>
            </div>
            <div v-if="alertIncorrect" class="err">
                {{ errMsg }}
            </div>
            <div class="input">
                
                <input type="submit" value="Login" >
            </div>
            
        </fieldset>
        <p class="fgp">Forgot <a href="#">password ?</a></p>
    </form>
</template>

<script setup>
import {ref,inject,onMounted} from 'vue'
import axios from 'axios'
import store from '../store';

const email=ref('')
const password=ref('')
const isShow=ref(false)
const isValidPass=ref(false)
const isValidEmail=ref(false)
const isStart=ref(true)
const route=inject('router')
const alertIncorrect=ref(false)




const toggle=()=>{
    
    isShow.value=isShow.value ? false :true;
}
const checkValidation=()=>{
    isStart.value=false
    if(email.value=='') isValidEmail.value=false
    else isValidEmail.value=true
    
    if(password.value=='' || password.value.length<6) isValidPass.value=false
    else isValidPass.value=true
    
}
const errMsg=ref("Incorrect Username or Password")
const save=(e)=>{
    e.preventDefault();
    if(isValidEmail && isValidPass){
        axios({
            method: 'post',
            url: `${store.state.apiUrl}/user/login`,
            data: {
                EUID:email.value,
                password:password.value,
            },
            headers: {'Content-Type': 'application/json' }
        }).then(res=>{
            console.log(res);
                alertIncorrect.value=false
                localStorage.setItem('token',`Bearer ${res.data.token}`)
                store.commit('login')
                route.push('/home')
          
            
        }).catch(()=>{
            alertIncorrect.value=true
            errMsg.value=res.data.message ? res.data.message :"Invalid username or password"
        })
    }else{
        checkValidation()
    }
    // console.log(isValidPass.value,isValidEmail.value,isStart.value);
}
</script>

<style lang="scss" scoped>
form{
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    fieldset{
        --border-color:#e8e8e8;
        padding: 1rem;
        width: 100%;
        display: flex;
        // justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        border: 2px solid var(--border-color);
        border-bottom: 1rem solid var(--border-color);
        border-radius: 2px;
        img{
            width: 12rem;
            aspect-ratio: 1/1;
            
            object-fit: cover;
            border-radius: 50%;
            overflow: hidden;
            
        }
        .input{
            width: 100%;
            display: flex;
            flex-direction: column;
            border: none;
            outline: none;
            p{
                color: red;
            }
            .pass{
                display: flex;
                align-items: center;
                position: relative;
                &> *{
                    width: 100%;
                    
                }
                
                svg{
                    --size:1.5rem;
                    width: var(--size);
                    height: var(--size);
                    position: absolute;
                    right: .7rem;
                    cursor: pointer;
                    transition: 300ms;
                    &:hover{
                        color: var(--base);
                    }
                }
                
            }
            input{
                padding: .6rem .5rem;
                &::placeholder{
                    font-family: 'Koulen', cursive;
                }
                &[type=submit]{
                    background-color: var(--base);
                    cursor: pointer;
                    outline: none;
                    border: none;
                    font-family: 'Koulen', cursive;
                    font-size: 1rem;
                    color: white;
                    transition: 250ms;
                    &:hover{
                        opacity: .8;
                    }
                }
            }
        }
        .err{
            width: 100%;
            padding: .3rem 0;
            background-color: rgb(251, 26, 26);
            color: white;
            text-align: center;
        }
    }
    .fgp{
        width: 100%;
        text-align: right;
        a{
            color:var(--base);
            text-decoration: none;
        }
    }
}
</style>