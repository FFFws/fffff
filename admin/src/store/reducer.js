import Prevstate from './state'
import * as types from './action-type'
import { connect } from 'react-redux'


export default (state = Prevstate, { type, params }) => {
    let newData = JSON.parse(JSON.stringify(state))

    switch (type) {
        case types.READ_ALL:
            newData.list.forEach((item) => {
                item.bool = false
            })
            break;
        case types.READ_ONE:
            newData.list[params].bool = false
            break;
        case types.START:
            newData.status=true
            break;
        case types.END:
            newData.status=false
            break;
        default:
    }
    return newData
}
