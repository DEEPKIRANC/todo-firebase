import React,{useState} from 'react'
import {db} from "../firebase"; 
import "animate.css";

import "../styles/todo.css";
function Todo({todo,id}) {
const [input,setInput]=useState('');
    
    const deleteTodo=()=>{
        
        db.collection("todos").doc(id).delete();
    }

    function editTodo(){
        
        db.collection("todos").doc(id).update({todo:input});
        setInput("");
        
        var modal=document.getElementById(id);
        modal.style.display="none";
     
    }
    function openbox()
    {
        console.log("ID",id);
   
   
        var modal=document.getElementById(id);
        modal.style.display="block";
        
  
        var span = document.getElementsByClassName("close")[0];
    }

    const handleSpanClick=()=>{
        var modal=document.getElementById(id);
        modal.style.display="none";
    }
   
    return (
        <div key={id} >
            <ul style={{listStyle:'none'}}>
                <div className="todo-item animate_animated animate__fadeInUp">
                    <li>{todo}</li>
                    <span style={{marginLeft:"0.5rem"}}   onClick={openbox}>Edit</span>
                    <span style={{marginLeft:"0.5rem"}}  onClick={deleteTodo}>&times;</span>
                   
                </div>
            </ul>
            <div id={id} class="modal">
                        <span onClick={handleSpanClick} class="close">&times;</span>
                            <div className="inputSection">
                                <input className="inputTask" type="text" value={input} onChange={e=>setInput(e.target.value)}/>
                                <button disabled={!input}  onClick={editTodo}>Edit Task</button>
                            </div>
                        
            </div>
        </div>
    )
}

export default Todo
