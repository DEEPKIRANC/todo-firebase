import './App.css';
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
      <form>
      <h1>ToDo App using Firebase 💥</h1>
      <input type="text"  value={input} onChange={e=>setInput(e.target.value)}/>
      <button disabled={!input}  type="submit" onClick={addTask}>
        Add New Task
      </button>
      </form>
      <hr/>
      <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
      <h2>Your Tasks for today</h2>
      
        {todos.map(todo=>(
          <Todo todo={todo.todo} id={todo.id}/>
        ))}
      
      </div>
    </div>
  );
}

export default App;
