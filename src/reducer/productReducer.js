import { types } from '../types/types'

const initialState = {
    product: [],
    active: null
}


export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.AddNewProduct:
            return {
                ...state,
                product: [action.payload, ...state.product]
            }
        case types.LoadProduct:
            return {
                ...state,
                product: [...action.payload]
            }
        case types.ActiveProduct:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.UpdateProduct:
            return {
                ...state,
                product: state.product.map(
                    product => product.id === action.payload.id
                        ? action.payload.product
                        : product
                )
            }
        case types.CleanProduct:
            return {
                ...state,
                active: null
            }
        default:
            return state;
    }
}