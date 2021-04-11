import React from 'react'
import {db} from "../firebase"; 
function Todo({id,todo}) {
    
    const deleteTodo=()=>{
        
        db.collection("todos").doc(id).delete();
    }
    return (
        <div>
            <ul style={{listStyle:'none'}}>
                <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                    <li>{todo}</li>
                    <button style={{marginLeft:"0.5rem"}}  onClick={deleteTodo}>Delete me</button>
                </div>
            </ul>
        </div>
    )
}

export default Todo
