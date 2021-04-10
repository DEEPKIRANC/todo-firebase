import './App.css';
import React,{useState,useEffect} from "react";
import Todo from "./components/Todo";
import {db} from "./firebase";

function App() {
  const [todos,setTodos]=useState([]);
  const [input,setInput]=useState('');

useEffect(()=>{
  db.collection('todos').onSnapshot(snapshot=>{setTodos(snapshot.docs.map(doc=>doc.data().todo))})
},[]);

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
          <Todo item={todo}/>
        ))}
      
      </form>
    </div>
  );
}

export default App;
