import React from 'react'
     import {ACTIONS} from './App.jsx'

export default function Todo({todo, dispatch}) {
  return (
    <div>
      <input type='checkbox' checked={} onChange={() => dispatch ({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}></input>
      <span> {todo.name} </span>
      <button onCick={() => dispatch ({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}>Delete</button>
      
      <button 
        style={{color: todo.complete ? '#AAA' : '#000'}}
        onCick={() => dispatch ({type: ACTIONS.EDIT_TODO, payload: {id: todo.id}})}>Edit</button>

      <button onCick={() => dispatch ({type: ACTIONS.SAVE_TODO, payload: {id: todo.id}})}>Save</button>
    </div>
  )
}



// SBA: useEffect-access the API; UseState;access: data React-Router-DOM 