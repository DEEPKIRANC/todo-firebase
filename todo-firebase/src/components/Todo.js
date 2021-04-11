import React from 'react'
import {db} from "../firebase"; 
import "../styles/todo.css";
function Todo({id,todo}) {
    
    const deleteTodo=()=>{
        
        db.collection("todos").doc(id).delete();
    }
    return (
        <div>
            <ul style={{listStyle:'none'}}>
                <div className="todo-item">
                    <li>{todo}</li>
                    <span style={{marginLeft:"0.5rem"}}  >Edit</span>
                    <span style={{marginLeft:"0.5rem"}}  onClick={deleteTodo}>&times;</span>
                </div>
            </ul>
        </div>
    )
}

export default Todo
