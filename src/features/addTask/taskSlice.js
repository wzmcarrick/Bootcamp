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


        // {
        //     id: 2,
        //     name: "task2",
        //     assignee: "elton",
        //     dueDate: "2022-03-02",
        //     detail: "lorem ipsum...",
        //     priority: "Low"
        // },
    ],
    selectedColIndex: 0
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        taskAdded: (state, action) => {
            console.log("added task", action.payload)
            // state.columns.map((c) => {
            //     if (c.colName === action.payload.colName) {
            //         return c.colTasks.push(action.payload.colTasks)
            //     }
            //     return c
            // })
            state.columns[state.selectedColIndex].colTasks.push(action.payload.colTasks)
        },

        setTasks: (state, action) => {
            console.log(action.payload)
            state = action.payload
            return state
        },

        taskDeleted: (state, action) => {

            console.log(action.payload);
            state.columns[state.selectedColIndex].colTasks = state.columns[state.selectedColIndex].colTasks.filter((t) => t.id !== action.payload.id)
            return state
            // state.columns.colTasks.id
            // state = state.filter((s) => { s.id !== action.payload });

            // state.columns.map((c) => {
            //     if (c.colName === action.payload.colName) {
            //         return c.colTasks.filter((t) => { t.id !== action.payload.colTasks.id })
            //     }
            //     return c
            // })

            // state = action.payload
            // return state
            // console.log(state)
        },
        setSelectedColIndex: (state, action) => {
            state.selectedColIndex = action.payload
        }
    }
})

export const { taskAdded, setTasks, taskDeleted, setSelectedColIndex } = taskSlice.actions

export default taskSlice.reducer