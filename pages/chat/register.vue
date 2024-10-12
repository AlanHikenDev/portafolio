<template>
    <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="/assets/imgs/sta.png" alt="logo">
          WHATSALAN    
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Crea una cuenta nueva
              </h1>
              <div class="space-y-4 md:space-y-6" action="#">
                <div>
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                      <input type="text" v-model="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required>
                      <GeneralErrorMessage v-if="errors" :errores="errors" :errorkey="'name'" ></GeneralErrorMessage>
                  </div>  
                <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
                      <input type="email" v-model="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required>
                      <GeneralErrorMessage v-if="errors" :errores="errors" :errorkey="'email'"></GeneralErrorMessage>
                 </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" v-model="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                      <GeneralErrorMessage :errores="errors" :errorkey="'password'"></GeneralErrorMessage>
                    </div>
                  <div>
                      <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirma password</label>
                      <input type="password" v-model="password_confirmation" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                      <GeneralErrorMessage :errores="errors" :errorkey="'password_confirmation'"></GeneralErrorMessage>
                    </div>
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required>
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">Acepto lo terminos <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button @click="registerSend" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Ya tienes una cuenta ? <a href="/chat/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
                </div>
          </div>
      </div>
  </div>
</section>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'simple'
})


import { FetchError } from 'ofetch';

const client = useSanctumClient();
const { refreshIdentity } = useSanctumAuth();
const name = ref()
const email = ref()
const password =ref()
const password_confirmation = ref()
const errors = ref()

async function registerSend() {
    const dataSend = {
        name: name.value,
        email: email.value,
        password: password.value,
        password_confirmation: password_confirmation.value,
        terminos: true
    };
    errors.value = null
    try {
        await client('/register',{
            method: "POST",
            body: dataSend
        })
        await refreshIdentity()
        const user = useSanctumUser()
        if(user ){
            navigateTo('/chat')
        }
    } catch (error) {
        if (error instanceof FetchError && error.response?.status === 422) {
           console.log(error.response?._data.errors)
           errors.value = error.response?._data.errors
        }
    }
}

</script>

<style scoped>

</style>