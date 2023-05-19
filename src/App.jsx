/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import AddTodo from './components/addTodo'
import TodoList from './components/todo-list'
import addIcon from './assets/static/add.png'

function App() {
  const [isOpenForm, setIsOpenForm] = useState(false)

  return (
    <main className='pt-4'>
      <div className='container mx-auto px-2.5'>
        <div className='relative h-screen'>
          <h1 className='text-3xl font-bold underline text-center mb-4'>ToDo`s</h1>

          <TodoList />
          <button
            type='button'
            onClick={() => setIsOpenForm(true)}
            className='absolute bottom-6 left-1/2 -translate-x-1/2 w-16 h-16'
          >
            <img src={addIcon} alt='add todo' />
          </button>
        </div>
      </div>
      {isOpenForm && (
        <div className='overlay'>
          <AddTodo />
          <div className='absolute top-3 right-4 w-10 h-10'>
            <div className='close-form-btn' onClick={() => setIsOpenForm(false)} />
          </div>
        </div>
      )}
    </main>
  )
}

export default App
