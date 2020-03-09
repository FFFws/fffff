export const setStorage = (value) => {
    localStorage.setItem('key', JSON.stringify(value))
}

export const getStorage = () => {
    return JSON.parse(localStorage.getItem('key'))
}

export const clearStorage = () => {
    localStorage.clear()
}