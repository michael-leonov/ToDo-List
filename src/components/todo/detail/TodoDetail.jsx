/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'

function TodoDetail({ title, description, setIsOpenDetailTodo }) {
  return (
    <div className='relative bg-white text-slate-800 p-4 rounded-xl'>
      <p className='text-center mb-4'>{title}</p>
      <p className='text-sm text-justify'>{description || 'нет описания'}</p>

      <div className='absolute -top-2 -right-2 w-8 h-8'>
        <div
          className='close-form-btn bg-slate-600 rounded-full before:bg-white after:bg-white'
          onClick={() => setIsOpenDetailTodo(false)}
        />
      </div>
    </div>
  )
}

export default TodoDetail
