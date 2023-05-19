/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo } from '../../redux/features/todoSlice'
import EditTodo from '../editTodo'
import removeIcon from '../../assets/static/remove.png'
import editIcon from '../../assets/static/edit.png'
import TodoDetail from './detail/TodoDetail'

export function Todo({ id, title, description, completed }) {
  const dispatch = useDispatch()

  const toggleTodoHandler = () => {
    dispatch(toggleTodo(id))
  }

  const deleteTodoHandler = () => {
    dispatch(deleteTodo(id))
  }

  const [isOpenEditTodo, setIsOpenEditTodo] = useState(false)

  const [isOpenDetailTodo, setIsOpenDetailTodo] = useState(false)

  return (
    <li
      className='flex justify-between gap-x-2 py-2 px-4 bg-white custom-box-shadow rounded-full cursor-pointer'
      onClick={() => setIsOpenDetailTodo(true)}
    >
      <div className='flex items-center gap-x-1 text-slate-600'>
        {completed ? '👌' : '👋'}
        <p
          className={`${
            completed ? 'line-through text-slate-300' : 'text-slate-700'
          } truncate w-36`}
        >
          {title}
        </p>
      </div>

      <div className='flex gap-x-2'>
        <button type='button' className='w-6 h-6' onClick={() => setIsOpenEditTodo(true)}>
          <img src={editIcon} alt='remove icon' />
        </button>
        <button type='button' className='w-6 h-6' onClick={deleteTodoHandler}>
          <img src={removeIcon} alt='remove icon' />
        </button>
      </div>

      {isOpenEditTodo && (
        <div className='overlay'>
          <EditTodo setIsOpenUpdateTodo={setIsOpenEditTodo} />
          <div className='absolute top-3 right-4 w-10 h-10'>
            <div className='close-form-btn' onClick={() => setIsOpenEditTodo(false)} />
          </div>
        </div>
      )}

      {isOpenDetailTodo && (
        <div className='overlay z-20'>
          <TodoDetail
            title={title}
            detail={description}
            setIsOpenDetailTodo={setIsOpenDetailTodo}
          />
        </div>
      )}
    </li>
  )
}
