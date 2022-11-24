import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../features/addTask/taskSlice'

export const store = configureStore({
    reducer: {
        tasks: tasksReducer
    },
})