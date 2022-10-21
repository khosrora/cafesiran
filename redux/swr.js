import axios from 'axios'
import Cookies from "js-cookie";



const token = Cookies.get("CafesIran__TOKEN")
export const fetcher = url => axios.get(url, {
    headers: { Authorization: "token " + token }
}).then(res => res.data)