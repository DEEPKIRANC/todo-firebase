import React,{useState} from 'react'
import {db} from "../firebase"; 

import "../styles/todo.css";
function Todo({id,todo}) {
const [input,setInput]=useState('');
    
    const deleteTodo=()=>{
        
        db.collection("todos").doc(id).delete();
    }

    function editTodo(todoid){
        
        db.collection("todos").doc(todoid).update({todo:input});
        setInput("");
        
        var modal=document.getElementById("myModal");
        modal.style.display="none";
     
    }
    function openbox(id)
    {
        console.log("ID",id);
   
   
        var modal=document.getElementById("myModal");
        modal.style.display="block";
        
        var span = document.getElementsByClassName("close")[0];
        span.onclick=function(){modal.style.display="none"};
    }
    return (
        <div key={id}>
            <ul style={{listStyle:'none'}}>
                <div className="todo-item">
                    <li>{todo}</li>
                    <span style={{marginLeft:"0.5rem"}} id={id}  onClick={openbox}>Edit</span>
                    <span style={{marginLeft:"0.5rem"}}  onClick={deleteTodo}>&times;</span>
                   
                </div>
            </ul>
            <div id="myModal" class="modal">
                        <span class="close">&times;</span>
                        <div className="inputSection">
                            <input className="inputTask" type="text" value={input} onChange={e=>setInput(e.target.value)}/>
                            <button disabled={!input}  onClick={editTodo}>Edit Task</button>
                        </div> 
            </div>
        </div>
    )
}

export default Todo
