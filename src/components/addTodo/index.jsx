import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/features/todoSlice'

function AddTodo() {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()

    if (value.trim().length === 0) {
      alert('Введите Todo')
      setValue('')
      return
    }

    dispatch(addTodo(value))

    setValue('')
  }

  return (
    <div className='flex flex-col gap-y-2 mb-6'>
      <input
        type='text'
        className='text-slate-600 p-2 rounded-xl focus:outline-slate-500'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button type='button' className='action-btn self-center' onClick={addTodoHandler}>
        Добавить ToDo
      </button>
    </div>
  )
}

export default AddTodo
