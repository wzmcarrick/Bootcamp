import { configureStore } from '@reduxjs/toolkit'
import kanbanReducer from '../features/KanbanSlice'

export const store = configureStore({
    reducer: {
        kanban: kanbanReducer
    },
})