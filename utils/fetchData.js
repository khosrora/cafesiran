import axios from "axios";
import { API } from "./baseApi";

export const getDataAPI = async (url, token) => {
    const res = await axios.get(`${API}${url}`, {
        headers: {
            Authorization: "token " + token
        }
    })
    return res;
}
export const postDataAPI = async (url, post, token) => {
    const res = await axios.post(`${API}${url}`, post, {
        headers: {
            Authorization: "token " + token
        }
    })
    return res;
}
export const putDataAPI = async (url, post, token) => {
    const res = await axios.put(`${API}${url}`, post, {
        headers: { Authorization: "token " + token }
    })
    return res;
}
export const patchDataAPI = async (url, post, token) => {
    const res = await axios.patch(`${API}${url}`, post, {
        headers: { Authorization: "token " + token }
    })
    return res;
}
export const deleteDataAPI = async (url, token) => {
    const res = await axios.delete(`${API}${url}`, {
        headers: { Authorization: "token " + token }
    })
    return res;
}