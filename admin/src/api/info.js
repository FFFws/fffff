import axios from '../utils/axios'

export const getData = async (pageCode, limitNum = 5) => {
    let url = '/list/api/pro'
    let res = await axios.get(url, { params: { pageCode, limitNum } })
    if (res.code === '200') {
        return res
    } else {
        throw res
    }
}