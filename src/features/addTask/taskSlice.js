import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        name: "task1",
        assignee: "joseph",
        dueDate: "2022-02-02",
        detail: "lorem ipsum...",
        priority: "High"
    },
    {
        id: 2,
        name: "task2",
        assignee: "elton",
        dueDate: "2022-03-02",
        detail: "lorem ipsum...",
        priority: "Low"
    },
]

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        taskAdded: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { taskAdded } = taskSlice.actions

export default taskSlice.reducer