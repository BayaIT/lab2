import React from "react";
import { changeTitleAction, withParamsAction } from "../redux/action";
import { useSelector, useDispatch } from "react-redux";

function MainPage(){
    const title = useSelector(state => state.titleReducer.title)
    const dispatch = useDispatch()

    const changeTitle = () => {
        dispatch(changeTitleAction())
    }

    const withParams = () => {
        dispatch(withParamsAction('Hello Adam University'))
    }

    return (
        <div>
            <h1>{ title }</h1>
            <button onClick={changeTitle}>change title</button>
            <button onClick={withParams}>with params</button>
        </div>
    )

}

export default MainPage;