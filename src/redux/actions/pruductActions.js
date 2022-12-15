import { ActionTypes } from "../contants/action-types"

export const setProducts = (producks) => {
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload: products,
    };
}
export const selectedProducts = (producks) => {
    return {
        type:ActionTypes.SELECTED_PRODUCTS,
        payload: products,
    };
}