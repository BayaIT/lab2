import { types } from "../types";

const initialState = {
    result: null,
    history: []
}

const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CALCULATOR_ADD:
            const addResult = state.result === null ? action.payload : state.result + action.payload;
            return {
                ...state,
                result: addResult,
                history: [...state.history, addResult]
            }
        
        case types.CALCULATOR_SUBTRACT:
            const subtractResult = state.result === null ? action.payload : state.result - action.payload;
            return {
                ...state,
                result: subtractResult,
                history: [...state.history, subtractResult]
            }
        
        case types.CALCULATOR_MULTIPLY:
            const multiplyResult = state.result === null ? action.payload : state.result * action.payload;
            return {
                ...state,
                result: multiplyResult,
                history: [...state.history, multiplyResult]
            }
        
        case types.CALCULATOR_DIVIDE:
            const divideResult = state.result === null ? action.payload : state.result / action.payload;
            return {
                ...state,
                result: divideResult,
                history: [...state.history, divideResult]
            }
        
        case types.CALCULATOR_CLEAR:
            return {
                ...state,
                result: null,
                history: []
            }
        
        default:
            return state;
    }
}

export default calculatorReducer;
