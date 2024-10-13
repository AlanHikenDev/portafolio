<template>

    <div class="p-4 sm:ml-64 ">
        <div class="border-2 rounded-lg dark:border-gray-700 mt-14">
    <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
            <div>
                
            </div>
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input 
                    type="text" 
                    v-model="searchparam"
                    @input="findByname"
                    id="table-search-users" 
                    class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Busca por nombre">
            </div>
        </div>
       <div class="flow-root">
            <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                <li  v-for="(user, i) in cleanUsers" :key="i" class="py-3 sm:py-4">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <img class="w-8 h-8 rounded-full" :src="user.user.avatar" alt="Neil image">
                        </div>
                        <div class="flex-1 min-w-0 ms-4">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                {{user.user.name}}
                            </p>
                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                {{user.user.email}}
                            </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            <button @click="goToChat(user.user)" type="button" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Messages
                                <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                                2
                                </span>
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
       </div>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="flex items-center -space-x-px h-8 text-sm">
        <li>
          <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Previous</span>
            <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
          </a>
        </li>
        <li v-for="index in lastPage" :key="index">
          <button
            @click="goToPage(index)" 
            :aria-current="currentPage == index ? 'page': 'location'"
            :class="currentPage == index ? 
             'z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white':
             'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'" 
            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            {{index}}</button>
        </li>
        <li>
          <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Next</span>
            <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
    
    </div>
</div>
</template>
    
<script setup lang="ts">
definePageMeta({
    layout: 'chatapp',
    middleware: ['sanctum:auth'],
})
const friendStore = useFriendStore()
const {getData ,addUserSelectedValue ,addSerchParams } = friendStore
const { 
    usersData , 
    cleanUsers , 
    fromPage ,    
    toPage ,
    lastPage ,
    currentPage,
    totalData } =  storeToRefs(friendStore)

const useMessage = useMessageStore()
const { addUserTo } = useMessage

const searchparam = ref()
const loading = ref(false)
const totalItems = ref(0)
const itemsPerPage = ref(10)

onMounted(()=>{ 
    getData()
})

async function goToChat(user : User) {
    addUserSelectedValue(user)
    addUserTo(user)
    navigateTo('/chat/room')
}

async function goToFindFriends(user : User) {
    addUserSelectedValue(user)
    addUserTo(user)
    navigateTo('/chat/addFriend')
}

function findByname() {
    const params = 
    { search: searchparam.value,
        size: '10',
        page: '1',
        sortKey: '',
        sortOrder: ''
    }
    addSerchParams(params)
}

function goToPage(i :string) {
const params = 
    { search: '',
    size: '10',
    page: i,
    sortKey: '',
    sortOrder: ''
    }
    addSerchParams(params)
}

function updateSearchParams() {

    // addSerchParams()
}

</script>
    
<style scoped>

</style>