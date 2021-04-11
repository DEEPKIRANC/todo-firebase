import './App.css';
import './styles/todo.css';
import React,{useState,useEffect} from "react";
import Todo from "./components/Todo";
import {db} from "./firebase";
import firebase from "firebase";
function App() {
  const [todos,setTodos]=useState([]);
  const [input,setInput]=useState('');

useEffect(()=>{
  db.collection('todos').orderBy('timestamp','desc')
  .onSnapshot(snapshot=>{setTodos(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})))})
},[]);

  const addTask=(e)=>{
    e.preventDefault();
    db.collection('todos').add({'todo':input,'timestamp':firebase.firestore.FieldValue.serverTimestamp(),})
    setInput("");
  }
  return (
    <div className="App">
      <h1>ToDo App using Firebase 💥</h1>
      
      <form>
      
      <div className="inputSection">
      <input type="text" placeholder="Write your task here"  className="inputTask" value={input} onChange={e=>setInput(e.target.value)}/>
      <button disabled={!input}  type="submit" onClick={addTask}>
        Add New Task
      </button>
      </div>
      </form>
      <hr style={{width:"70%"}}/>
      <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
      <h2>Your Tasks for Today</h2>
      {todos.length!==0?<div className="todo-card">
        {todos.map(todo=>(
          <Todo todo={todo.todo} id={todo.id}/>
        ))}
      </div>:<span>All Tasks will appear here ..!</span>}
      </div>
    </div>
  );
}

export default App;
