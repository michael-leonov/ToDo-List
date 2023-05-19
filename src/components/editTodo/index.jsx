import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editTodo } from '../../redux/features/todoSlice'

function EditTodo({ todoId, todoName, setIsOpenUpdateTodo }) {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const editTodoHandler = (e) => {
    e.preventDefault()

    if (value.trim().length === 0) {
      alert('Введите Todo')
      setValue('')
      return
    }

    if (todoName === value) {
      alert('Нечего менять')
      return
    }

    dispatch(editTodo({ id: todoId, name: value }))

    setIsOpenUpdateTodo(false)
  }

  return (
    <div className='flex flex-col gap-y-2 mb-6'>
      <input
        type='text'
        className='text-slate-600 p-2 rounded-xl focus:outline-slate-500'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button type='button' className='action-btn self-center' onClick={editTodoHandler}>
        Редактировать
      </button>
    </div>
  )
}

export default EditTodo
