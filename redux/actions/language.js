import {
    SET_LANGUAGE_E,
    SET_LANGUAGE_S
} from '../types'

export const setLanguageE = () => dispatch => {
    dispatch({
        type: SET_LANGUAGE_E
    })
}

export const setLanguageS = () => dispatch => {
    dispatch({
        type: SET_LANGUAGE_S
    })
}