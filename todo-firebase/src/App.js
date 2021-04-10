import './App.css';
import React,{useState} from "react";
import Todo from "./components/Todo";

function App() {
  const [todos,setTodos]=useState(["Watch IPL","Sanitize your hands","Take steam and stay hydrated"]);
  const [input,setInput]=useState('');

  const addTask=(e)=>{
    e.preventDefault();
    setTodos(prevtodos=>[...prevtodos,input]);
    setInput('');
  }
  return (
    <div className="App">
      <form onSubmit={addTask}>
      <h1>ToDo App using Firebase 💥</h1>
      <input type="text"  value={input} onChange={e=>setInput(e.target.value)}/>
      <button disabled={!input}  type="submit">
        Add New Task
      </button>
      <hr/>
      <h2>Your Tasks for today</h2>
      
        {todos.map(todo=>(
          <li><Todo item={todo}/></li>
        ))}
      
      </form>
    </div>
  );
}

export default App;
