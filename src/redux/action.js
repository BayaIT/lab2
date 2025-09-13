import { types } from "./types";

export function changeTitleAction() {
    return{
        type: types.CHANGE_TITLE
    }
}
export function withParamsAction(title){
    return {
        type : types.WITH_PARAMS,
        payload : title
    }
}

export function changeInputAction(value){
    return {
        type: types.INPUT_VALUE,
        payload : value
    }
}

export function addUserAction(name){
    return {
        type: types.ADD_USER,
        payload: name
    }
}

export function deleteUserAction(){
    return{
        type: types.DELETE_USER
    }
}

export function calculatorAddAction(value) {
    return {
        type: types.CALCULATOR_ADD,
        payload: value
    }
}

export function calculatorSubtractAction(value) {
    return {
        type: types.CALCULATOR_SUBTRACT,
        payload: value
    }
}

export function calculatorMultiplyAction(value) {
    return {
        type: types.CALCULATOR_MULTIPLY,
        payload: value
    }
}

export function calculatorDivideAction(value) {
    return {
        type: types.CALCULATOR_DIVIDE,
        payload: value
    }
}

export function calculatorClearAction() {
    return {
        type: types.CALCULATOR_CLEAR
    }
}