/* eslint-disable no-shadow */
import { createSlice } from '@reduxjs/toolkit'

let nextTodoId = 0

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        // eslint-disable-next-line no-plusplus
        id: ++nextTodoId,
        name: action.payload,
        completed: false,
      }
      state.push(newTodo)
    },
    deleteTodo: (state, action) => state.filter((todo) => todo.id !== action.payload),

    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },

    editTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id)
      if (todo) {
        todo.name = action.payload.name
      }
    },
  },
})

export const { addTodo, deleteTodo, toggleTodo, editTodo } = todosSlice.actions

export default todosSlice.reducer
