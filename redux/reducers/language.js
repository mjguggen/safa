import {
    SET_LANGUAGE_E,
    SET_LANGUAGE_S
} from '../types'

const initialState = {
    language: true
}

export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
        case SET_LANGUAGE_E:
            return {
                ...state,
                language: true
            }
        case SET_LANGUAGE_S:
            return {
                ...state,
                language: false
            }        
        default:
            return state;
    }
  }
  