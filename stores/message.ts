import { defineStore } from 'pinia'

export const useMessageStore = defineStore('message', () => {
    
const messageData = ref()
const messageError = ref()
const messageSelected = ref<User>()
const userTo = ref<User>()

//@ts-ignore
const cleanMessage = computed(() => messageData.value? messageData.value : [])

const serachParams = ref<QueryParams>({
    search: '',
    size: '10',
    page: '1',
    sortKey: '',
    sortOrder: ''
}) 

const client = useSanctumClient();

async function getMessagePtoP() {
    
    if (userTo.value) {

        const res = await client('/api/messages/' + userTo.value.id, {
            method: "GET",
            async onResponse({ request, response, options }) {
               if (response.status == 422 ) {
                   console.log(response?._data.errors);
                } 
            },
        })
        messageData.value = res
    } 

}

async function getData() {
    
    const res = await client('/api/users?' + new URLSearchParams(serachParams.value).toString(), {
        method: "GET",
        async onResponse({ request, response, options }) {
           if (response.status == 422 ) {
               console.log(response?._data.errors);
            } 
        },
    })
    messageData.value = res
}

async function updateUserAcount(value: object) {
    addErrorValue(null)
    const res = await client('/api/users/'+messageSelected.value?.id, {
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


async function storeMessage(message: string) {
    addErrorValue(null)
    if (userTo.value) {
        const res = await client('/api/messages/'+userTo.value.id , {
            method: "POST",
            body: {'message': message},
            async onResponse({ request, response, options }) {
            if (response.status == 422 ) {
                    addErrorValue(response?._data.errors) 
                }
            },
        })
        await getMessagePtoP()
    }
}

async function deleteUser() {
    addErrorValue(null)
    const res = await client('/api/users/'+ messageSelected.value?.id, {
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
    messageError.value = err
}

function addmessageSelectedValue (user : User) {
    messageSelected.value = user 
}

function addUserTo (user : User) {
    userTo.value = user 
}

function addSerchParams( params: QueryParams) {
    serachParams.value = params
}


return { 
    messageData,
    messageError,
    messageSelected,
    cleanMessage,
    userTo,
    getData,
    getMessagePtoP,
    addUserTo,
    storeMessage,
    updateUserAcount,
    deleteUser,
    addmessageSelectedValue,
    addSerchParams
 }
 
})