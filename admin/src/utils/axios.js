import axios from 'axios'
import { getStorage } from '../utils/storage'

axios.interceptors.request.use(function (config) {
    if (getStorage()) {
        // config.headers['token'] = getStorage().token
        config.token = getStorage().token
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

export default axios