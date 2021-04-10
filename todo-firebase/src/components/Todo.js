import React from 'react'

function Todo({item}) {
    return (
        <div>
            <ul style={{listStyle:'none'}}>
                <li>{item}</li>
            </ul>
        </div>
    )
}

export default Todo
