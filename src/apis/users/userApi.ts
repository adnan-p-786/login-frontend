import { apiCLient } from "../ApiClient"

export const getUser = ()=>{
    return apiCLient.get('/api/get-user')
}

