import React from "react";
import { ACTIONS } from "../actiontypes";

const Todo = ({todo, dispatch}) => {
    return(
        <div>
            <span style={{background: todo.tamam ? "#542":"#879"}}>{todo.name}</span>
            <button onClick={() => dispatch( { type: ACTIONS.todo_tamamla, id: todo.id})}>Tamamla</button>
            <button onClick={() => dispatch( { type: ACTIONS.todo_sil, id:todo.id})}>Sil</button>
        </div>
    );
};

export default Todo;

