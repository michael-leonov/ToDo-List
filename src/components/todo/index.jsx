/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo, updateTodo } from '../../redux/features/todoSlice'

export function Todo({ id, name, completed }) {
  const dispatch = useDispatch()

  const toggleTodoHandler = () => {
    dispatch(toggleTodo(id))
  }

  const deleteTodoHandler = () => {
    dispatch(deleteTodo(id))
  }

  const updateTodoHandler = () => {
    const newName = prompt('Введите новое название')

    if (name === newName) {
      alert('Нечего менять')
      return
    }

    dispatch(updateTodo({ id, name: newName }))
  }

  return (
    <li className='flex justify-between gap-x-2 py-2 px-4 bg-white custom-box-shadow rounded-full'>
      <div className='flex items-center gap-x-1'>
        {completed ? '👌' : '👋'}
        <p
          className={`${completed ? 'line-through' : ''} text-slate-950 truncate w-36 `}
          onClick={toggleTodoHandler}
        >
          {name}
        </p>
      </div>

      <button type='button' className='action-btn' onClick={deleteTodoHandler}>
        Удалить
      </button>
    </li>
  )
}
