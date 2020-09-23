import {
    AUTHORIZE
} from '../types'

const initialState = {
    isAuthorized: false
}

export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
        case AUTHORIZE:
            return {
                ...state,
                isAuthorized: true
            }    
        default:
            return state;
    }
  }
  