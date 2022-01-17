import './App.css'
import List from './List' 
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

const initialTodos = [
  {
    id : uuid(),
    todo : "리액트 공부하기 (to do list 만들기)",
    completed : false
  },
  {
    id : uuid(),
    todo : "velog에 TIL 업로드",
    completed : false
  }
]


function App() {
  const [todos, setTodo] = useState(initialTodos)

  const handleSubmit = (newTodo) => {
    const todo = {
      id: uuid(),
      todo: newTodo,
      completed: false

    }
    setTodo( (prevState)=> [...prevState, todo]) // todo 추가 
  }

  const deleteTodo = (id) =>{
    setTodo( (prevState)=> prevState.filter(todo=>todo.id !== id))
  }

  return(
    <div className = "App">
      <h1 id="heading">To_do List</h1>
      <List
        todos = {todos}
        handleSubmit = {handleSubmit}  // todo 추가
        handleClickTodo = {setTodo}  // 체크
        deleteTodo = {deleteTodo}  // 삭제
      />
    </div>
  );
}

export default App;
