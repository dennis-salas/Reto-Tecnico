import { types } from '../types/types';

const initialState = {
    login: {}
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.Login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case types.Logout:
            return {}
        default:
            return state;
    }
}