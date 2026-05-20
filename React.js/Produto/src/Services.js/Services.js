import axios from "axios";

const apiPort = "3000"

const localApi = `http://localhost:${apiPort}/produtos`

const eternalApi = null

const api = axios.create({
    baseURL: localApi

})

export default api