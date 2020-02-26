import axios from '../utils/axios'
import { getStorage } from '../utils/storage'

//登录
export const UserLogin = async (userName, passWord) => {
    let url = '/user/v1/admin/user/login'
    let result = await axios.post(url, { userName, passWord })
    if (result.err === 0) {
        return result
    } else {
        throw result
    }
}

//登出 
export const UserLogout = async () => {
    let url = '/user/v1/admin/user/logout'
    let { uid, token } = getStorage("key")
    let result = await axios.post(url, { uid, token })
    if (result.err === 0) {
        return result
    } else {
        throw result
    }
}