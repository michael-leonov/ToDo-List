/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react'
import { useSelector } from 'react-redux'
import { Todo } from '../todo'

function TodoList() {
  const todos = useSelector((state) => state.todos)

  const isEmpty = todos.length === 0

  return (
    <>
      {isEmpty ? (
        <div className='text-center'>Нет Todos</div>
      ) : (
        <ul className=''>{todos && todos.map((todo) => <Todo key={todo.id} {...todo} />)}</ul>
      )}
    </>
  )
}

export default TodoList
