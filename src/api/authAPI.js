import { URL } from "./config"

export const loginAPI = async (postData) => {
    const response = await fetch(`${URL}auth/login/`, {
        method: "POST",
        body: postData,
    })

    console.log(response.status)
    const res = await response.json()
    return res
}

export const registerAPI = async (postData) => {
    const response = await fetch(`${URL}auth/users/`, {
        method: "POST",
        body: postData,
    })

    console.log(response.status)
    const res = await response.json()
    return res
}

export const tokenVerifier = async(token) => {
    const response = await fetch(`${URL}token/verify/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(token)
    })

    console.log(response.status)
    const res = await response.json()
    return res
}