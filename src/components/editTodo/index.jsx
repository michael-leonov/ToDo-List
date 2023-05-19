import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editTodo } from '../../redux/features/todoSlice'

function EditTodo({ todoId, todoTitle, setIsOpenUpdateTodo }) {
  const [value, setValue] = useState(todoTitle)

  const dispatch = useDispatch()

  const editTodoHandler = (e) => {
    e.preventDefault()

    if (value.trim().length === 0) {
      alert('Введите Todo')
      setValue('')
      return
    }

    if (todoTitle === value) {
      alert('Нечего менять')
      return
    }

    dispatch(editTodo({ id: todoId, title: value }))

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
