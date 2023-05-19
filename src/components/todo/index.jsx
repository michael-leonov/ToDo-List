/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo } from '../../redux/features/todoSlice'
import EditTodo from '../editTodo'

export function Todo({ id, name, completed }) {
  const dispatch = useDispatch()

  const toggleTodoHandler = () => {
    dispatch(toggleTodo(id))
  }

  const deleteTodoHandler = () => {
    dispatch(deleteTodo(id))
  }

  const [isOpenEditTodo, setIsOpenEditTodo] = useState(false)

  return (
    <li
      className='flex justify-between gap-x-2 py-2 px-4 bg-white custom-box-shadow rounded-full cursor-pointer'
      onClick={toggleTodoHandler}
    >
      <div className='flex items-center gap-x-1 text-slate-600'>
        {completed ? '👌' : '👋'}
        <p
          className={`${
            completed ? 'line-through text-slate-300' : 'text-slate-700'
          } truncate w-36 `}
          onClick={() => setIsOpenEditTodo(true)}
        >
          {name}
        </p>
      </div>

      <button type='button' className='action-btn' onClick={deleteTodoHandler}>
        Удалить
      </button>

      {isOpenEditTodo && (
        <div className='overlay'>
          <EditTodo setIsOpenUpdateTodo={setIsOpenEditTodo} />
          <div className='absolute top-3 right-4 w-10 h-10'>
            <div className='close-form-btn' onClick={() => setIsOpenEditTodo(false)} />
          </div>
        </div>
      )}
    </li>
  )
}
