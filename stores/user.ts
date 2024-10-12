import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    
const usersData = ref()
const usersError = ref()
const userSelect = ref<User>()

//@ts-ignore
const cleanUsers = computed(() => usersData.value? usersData.value.data : [])
const fromPage = computed(() => usersData.value? usersData.value.from : 0)
const toPage = computed(() => usersData.value? usersData.value.to : 0)
const lastPage = computed(() => usersData.value? usersData.value.last_page : 0)
const totalData = computed(() => usersData.value? usersData.value.total : 0)
const currentPage = computed(() => usersData.value? usersData.value.current_page : 0)


/* first_page_url": "http://localhost:8000/api/users?page=1",
"from": 1,
"last_page": 8,
"per_page": 10,
"prev_page_url": null,
"to": 10,
"total": 80 */
const serachParams = ref<QueryParams>({
    search: '',
    size: '10',
    page: '1',
    sortKey: '',
    sortOrder: ''
}) 

const client = useSanctumClient();

async function getData() {
    
    const res = await client('/api/users?' + new URLSearchParams(serachParams.value).toString(), {
        method: "GET",
        async onResponse({ request, response, options }) {
           if (response.status == 422 ) {
               console.log(response?._data.errors);
            } 
        },
    })
    usersData.value = res
}

async function updateUserAcount(value: object) {
    addErrorValue(null)
    const res = await client('/api/users/'+userSelect.value?.id, {
        method: "PUT",
        body: value,
        async onResponse({ request, response, options }) {
                if (response.status == 422 ) {
                    addErrorValue(response?._data.errors)   
                }  
            }
        })
        getData()
       // return res
}


async function storeUser(value: object) {
    addErrorValue(null)
    const res = await client('/api/users', {
        method: "POST",
        body: value,
        async onResponse({ request, response, options }) {
           if (response.status == 422 ) {
                addErrorValue(response?._data.errors) 
            }
        },
    })
    await getData()
}

async function deleteUser() {
    addErrorValue(null)
    const res = await client('/api/users/'+ userSelect.value?.id, {
        method: "DELETE",
        async onResponse({ request, response, options }) {
           if (response.status == 422 ) {
                addErrorValue(response?._data.errors) 
            }
        },
    })
    await getData()
}


function addErrorValue(err: null) {
    usersError.value = err
}

function addUserSelectedValue (user : User) {
    userSelect.value = user 
}

async function addSerchParams( params: QueryParams) {
    serachParams.value = params
    await getData()
}

return { 
    usersData,
    usersError,
    userSelect,
    cleanUsers,
    fromPage ,    
    toPage ,
    lastPage ,
    totalData,
    currentPage,
    getData,
    storeUser,
    updateUserAcount,
    deleteUser,
    addUserSelectedValue,
    addSerchParams
 }
 
})