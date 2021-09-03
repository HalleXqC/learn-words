export const baseURL = 'https://learn-words-fcd29-default-rtdb.asia-southeast1.firebasedatabase.app'

export const API = {
    get: (url, userId) => {
        return fetch(`${baseURL}/${url}/${userId}`)
    },
    post: (data, url, userId) => {
        return fetch(`${baseURL}/${url}/${userId}`, {
            method: 'POST',
            body: data
        })
    },
    patch: (data, url, userId, id) => {
        return fetch(`${baseURL}/${url}/${userId}/${id}`, {
            method: 'PATCH',
            body: data
        })
    },
    delete: (url, userId, id) => {
        return fetch(`${baseURL}/${url}/${userId}/${id}`, {
            method: 'DELETE'
        })
    }
}