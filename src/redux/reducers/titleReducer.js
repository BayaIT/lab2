import { types } from "../types"

const initialState = {
    title: 'old title'
    
}


export default function titleReducer(state = initialState, action){

    if(action.type === types.CHANGE_TITLE){
        return {...state, title: 'new title'}
    }else if(action.type === types.WITH_PARAMS){
        return {...state, title: action.payload}
    }
   
    return state
}