import { types } from '../types/types';

const initialState = {
    loadding: false,
    msjError: null
}

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msjError: action.payload
            }
        case types.uiRemoveError:
            return {
                ...state,
                msjError: null
            }
        case types.uiStartLoading:
            return {
                ...state,
                loadding: true
            }
        case types.uiFinishLoading:
            return {
                ...state,
                loadding: false
            }
        default:
            return state;
    }
}