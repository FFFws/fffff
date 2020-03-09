import { READ_ONE, READ_ALL, START, END } from './action-type'

export default {
    changebool(params) {
        return (dispatch) => {
            dispatch({
                type: START
            })
            setTimeout(() => {
                let action = {
                    type: READ_ONE,
                    params: params
                }
                dispatch(action)
                dispatch({
                    type: END
                })
            }, 500)
        }
    },
    changeAllbool() {
        return {
            type: READ_ALL
        }
    }
}