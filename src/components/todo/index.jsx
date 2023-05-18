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
    <div className='flex justify-between gap-x-2 p-4 border border-slate-300'>
      <div className='flex items-center gap-x-1'>
        {completed ? '👌' : '👋'}
        <li className={`${completed ? 'line-through' : ''}`} onClick={updateTodoHandler}>
          {name}
        </li>
      </div>

      <div className='flex items-center gap-x-1'>
        <div className='flex flex-col gap-y-0.5'>
          <label>{completed ? 'Выполнено' : 'Не выполнено'}</label>
          <input type='checkbox' onChange={toggleTodoHandler} />
        </div>

        <button type='button' className='action-btn' onClick={deleteTodoHandler}>
          Удалить
        </button>
      </div>
    </div>
  )
}
