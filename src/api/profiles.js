import { URL } from './config'

export const DMLProfiles = async (inputs, type) => {
    const res = await fetch(`${URL}students`, {
        method: type,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)
    })

    return await res.json()
}

// Retrieve data
export const retrieveProfiles = async () => {
    const res = await fetch(`${URL}students`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    })

    return await res.json()
}

// Create data
export const createProfiles = async (postData) => {
    const res = await fetch(`${URL}students`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })

    return await res.json()
}

// Update data
export const updateProfiles = async (patchData) => {
    const res = await fetch(`${URL}students`, {
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(patchData)
    })

    return await res.json()
}

// Delete data
export const deleteProfiles = async (deleteData) => {
    const res = await fetch(`${URL}students`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(deleteData)
    })

    return await res.json()
}