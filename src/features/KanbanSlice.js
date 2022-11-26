import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    columns: [
        {
            colName: "Col1",
            colTasks: [
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
                    name: "task1",
                    assignee: "joseph",
                    dueDate: "2022-02-02",
                    detail: "lorem ipsum...",
                    priority: "High"
                },
            ]
        },

        {
            colName: "Col2",
            colTasks: [
                {
                    id: 3,
                    name: "task1",
                    assignee: "joseph",
                    dueDate: "2022-02-02",
                    detail: "lorem ipsum...",
                    priority: "High"
                },
            ]
        },
    ],
    selectedColIndex: 0,
    columnName: ''
}

export const kanbanSlice = createSlice({
    name: 'kanban',
    initialState,
    reducers: {
        taskAdded: (state, action) => {
            console.log("added task", action.payload)
            state.columns[state.selectedColIndex].colTasks.push(action.payload.colTasks)
        },

        setTasks: (state, action) => {
            console.log(action.payload)
            state = action.payload
            return state
        },

        taskDeleted: (state, action) => {
            state.columns[state.selectedColIndex].colTasks = state.columns[state.selectedColIndex].colTasks.filter((t) => t.id !== action.payload.id)
            return state
        },

        setSelectedColIndex: (state, action) => {
            state.selectedColIndex = action.payload
        },

        setColumnName: (state, action) => {
            state.columnName = action.payload
        },

        columnAdded: (state, action) => {
            state.columns.push(action.payload)
        }
    }
})

export const { taskAdded, setTasks, taskDeleted, setSelectedColIndex, setColumnName, columnAdded } = kanbanSlice.actions

export default kanbanSlice.reducer