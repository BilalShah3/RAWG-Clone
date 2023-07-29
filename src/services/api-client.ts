import axios, { AxiosRequestConfig } from "axios"

export interface FetchResponse<T> {
    count: number
    next: string | null
    results: T[]
}

const axiosInstance =  axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "823711f1f2804af68522a6b4f71a0062"
    }
})

class APIClent<T> {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = (config?: AxiosRequestConfig) => 
            axiosInstance.get<FetchResponse<T>>(this.endpoint, config )
            .then(res => res.data)

}

export default APIClent