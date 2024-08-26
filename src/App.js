import { useState, useReducer } from "react";
import './App.css';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import reducer from "./reducer";
function App() {

  const [todos, dispatch] = useReducer(reducer, [
    {
      id: Math.random(),
      text: "Learn JS",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Learn CSS",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Learn React",
      isCompleted: false
    }
  ]);


  return (
    <div className="App">
      <header>
        <h1 className="todoAppTitle">todos</h1>
      </header>

      <TodoForm onAdd={(text) => {
        dispatch({
          type: 'add',
          payload: text
        });
      }} />
      <TodoList
        todos={todos}
        onDelete={(todo) => {
          dispatch({
            type: "delete",
            payload: todo
          });
        }}
        onChange={(newTodo) => {
          dispatch({
            type: "change",
            payload: newTodo
          });
        }}
      />
      <TodoFooter todos={todos}
        onClearCompleted={() => {
          dispatch({
            type: "clear-completed"
          });
        }} />
    </div>
  );
}

export default App;
