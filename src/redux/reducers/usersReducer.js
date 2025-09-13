import { types } from "../types";

const initialState = {
    inputValue : '',
    users: []
}

export default function usersReducer(state=initialState, action){

    if (action.type === types.INPUT_VALUE) {
        return {...state, inputValue: action.payload}
    }else if(action.type === types.ADD_USER){
        return {...state, users: [...state.users, action.payload]}
    }else if (action.type === types.DELETE_USER){
        return {inputValue: "", users: []}
    }

    return state;
}