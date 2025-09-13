import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, changeInputAction, deleteUserAction } from "../redux/action";

function UsersPage(){
    const {inputValue, users} = useSelector(state => state.usersReducer)
    
    const dispatch = useDispatch()

    const changeInput = (event) => {
        dispatch(changeInputAction(event.target.value))
    }

    const addUser = () => {
        dispatch(addUserAction(inputValue))
    }

    const deleteUser = () => {
        dispatch(deleteUserAction())
    }


    return (
        <div>
            <h1>{ inputValue }</h1>
           <input onChange={changeInput}  value={inputValue} type='text' placeholder="name" />
           <button onClick={addUser}>Add</button>
           <button onClick={deleteUser}>Delete All</button> 

           {users.map((user, idx)=> <p key={idx}>{user}</p>  )}

        </div>
    )
}

export default UsersPage;