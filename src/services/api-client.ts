import axios from "axios"

export interface FetchResponse<T> {
    count: number
    results: T[]
}

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "823711f1f2804af68522a6b4f71a0062"
    }
})