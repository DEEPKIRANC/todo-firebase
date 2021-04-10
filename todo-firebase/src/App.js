import './App.css';
import React,{useState} from "react";

function App() {
  const [todos,setTodos]=useState(["Watch IPL","Sanitize your hands","Take steam and stay hydrated"]);
  const [input,setInput]=useState('');

  const addTask=()=>{
    setTodos(prevtodos=>[...prevtodos,input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>ToDo App using Firebase 💥</h1>
      <input type="text"  value={input} onChange={e=>setInput(e.target.value)}/>
      <button onClick={addTask}>Add Task</button>
      <hr/>
      <h2>Your Tasks for today</h2>
      <ul style={{listStyle:'none'}}>
        {todos.map(todo=>(
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
