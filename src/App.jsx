import React from 'react'
import AddTodo from './components/addTodo'
import TodoList from './components/todo-list'

function App() {
  return (
    <main>
      <div className='container mx-auto px-2.5'>
        <h1 className='text-3xl font-bold underline text-center mb-4'>ToDo`s</h1>
        <AddTodo />
        <TodoList />
      </div>
    </main>
  )
}

export default App
