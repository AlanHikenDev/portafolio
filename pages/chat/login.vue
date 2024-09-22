<template>
<section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="https://www.alandev.tech" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img class="w-8 h-8 mr-2" src="/assets/imgs/sta.png" alt="logo">
            WHATSALAN    
        </a>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Ingresa con tu cuenta
                </h1>
                <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" v-model="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required>
                        <GeneralErrorMessage v-if="errors" :errores="errors" :errorkey="'email'" ></GeneralErrorMessage>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" v-model="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                            <input id="remember" v-model="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required>
                            </div>
                            <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Recuerdarme </label>
                            </div>
                        </div>
                        <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Olvidate tu contraseña?</a>
                    </div>
                    <button 
                    @click.prevent="sendLogin" 
                    class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        No tienes una cuenta aun ? <a href="/chat/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Registrate</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
</section>
</template>
<script setup lang="ts">
import { FetchError } from 'ofetch';
definePageMeta({
    layout: 'simple'
})

const { login } = useSanctumAuth()
    
const password = ref()
const email = ref()
const remember = ref(false)
const errors = ref()
    
async function sendLogin() {
    errors.value = null
    const userCredentials = {
        email: email.value,
        password: password.value,
        remember: remember.value
    };
    try {
        await login(userCredentials);
    } catch (error) {
        console.log(error)
        if (error instanceof FetchError && error.response?.status === 422) {
           // here you can extract errors from a response 
           // and put it in your form for example
           console.log(error.response?._data.errors)
           errors.value = error.response?._data.errors
        }
    }
}
    
</script>