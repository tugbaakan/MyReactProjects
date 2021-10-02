import './App.css';
import React, {useState, useReducer} from "react";
import { ACTIONS } from "./actiontypes";
import Todo from './components/Todo';

const yenitodoekle = (name) => {
  console.log(name);
  return { id: Date.now(), name, tamam: false};
}
const reducer = (todoList, action) => {
  switch (action.type){
    case ACTIONS.todo_ekle:
      return [...todoList, yenitodoekle(action.payload.inputText) ];
    case ACTIONS.todo_tamamla:
      return todoList.map((todo) => {
        if(todo.id === action.id){
          return {...todo, tamam : !todo.tamam}
        }
        return {...todo};
      });
    case ACTIONS.todo_sil:
      return todoList.filter((todo) => todo.id !== action.id);
    default:
      return todoList; 
  }
} ;

function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, dispatch] = useReducer(reducer, []);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type:ACTIONS.todo_ekle, payload : {inputText} });
    setInputText("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} /> 
      </form>
      { todoList.map((todo) => (
          <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
      ))}
    </div>
  );
}

export default App;
