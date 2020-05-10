import { ShopActionsTypes } from './shop.types';

const INITIAL_STATE = {
    collections : null,
    isFetching : false,
    errorMessage : undefined
};


const shopReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case ShopActionsTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                isFetching: false
            }
        case ShopActionsTypes.FETCH_COLLECTIONS_FAIL:
            return {
                ...state,
                errorMessage: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}

export default shopReducer