export const setStorage = (value) => {
    let value_ = JSON.stringify(value)
    localStorage.setItem('key', value_)
}

export const getStorage = () => {
    return JSON.parse(localStorage.getItem('key'))
}

export const clearStorage = () => {
    localStorage.clear()
}