import React, {useReducer, useState} from 'reducer'
import {Todo} from 'Todo.jsx'

const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO:'delete-todo',
  EDIT_TODO:'edit-todo',
  SAVE_TODO:'save-todo',
}

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
      //Toggle logic: map over our current todos to get a new list of todos, take the current todo that we've toggled and set that to complete or incomplete depending on what it currently is.
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {...todo, complete: !todo.complete }
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo =>todo.id !== action.payload.id)
    default:
      return todos
    case ACTIONS.EDIT_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { }
        }
        return todo
      })
    case ACTIONS.SAVE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { }
        }
        return todo
      })
}}

function newTodo(name) {
  return {id: Date.now(), name: name, complete:false }
}
export default function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  function handleSubmit(e){
  e.preventDefault()
  dispatch ({type: ACTIONS.ADD_TODO, payload: {name:name}})
  setName('')
}

return (
  <>
    <form onSubmit={handleSubmit}>
      <input type='text'value={name} onChange={e => setName(e.target.value)} />
    </form>
    {todos.map(todo => {
      return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
    })}

  </>
)}
