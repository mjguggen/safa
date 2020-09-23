import {
    AUTHORIZE
} from '../types'

const authorize = (password) => async dispatch => {
    if (password !== 'safa2020') {
        return
    } else {
        dispatch({
            type: AUTHORIZE
        })
    }
}