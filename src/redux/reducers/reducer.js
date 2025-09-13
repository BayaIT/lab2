import { combineReducers } from "redux";
import titleReducer from "./titleReducer";
import usersReducer from "./usersReducer";
import calculatorReducer from "./calculatorReducer";



export const rootReducer = combineReducers({
    titleReducer,
    usersReducer,
    calculatorReducer
})