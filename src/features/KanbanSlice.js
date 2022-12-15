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
                    name: "task2",
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
                    name: "task3",
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
        },

        dragEnd: (state, action) => {
            // action => type, payload
            const {
                taskId,
                destination
            } = action.payload

            // console.log('updated columns', JSON.stringify(state.columns.map(col => {
            //     if (col.colName === destination.droppableId) {
            //         console.log(taskId, 'taskId')

            //         const movedTask = col.colTasks.find(task => task.id === parseInt(taskId, 10))
            //         console.log(movedTask, 'movedTask')
            //         const newTasks = [...col.colTasks.filter(e => e.id !== parseInt(taskId, 10))]

            //         newTasks.splice(destination.index, 0, movedTask)
            //         console.log('newtasks', JSON.stringify(newTasks, null, 2))

            //         return {
            //             ...col,
            //             colTasks: newTasks
            //         }
            //     }

            //     return col
            // }), null, 2))

            state.columns = state.columns.map(col => {
                if (col.colName === destination.droppableId) {
                    console.log(taskId, 'taskId')

                    const movedTask = col.colTasks.find(task => task.id === parseInt(taskId, 10))
                    console.log(movedTask, 'movedTask')
                    const newTasks = [...col.colTasks.filter(e => e.id !== parseInt(taskId, 10))]

                    newTasks.splice(destination.index, 0, movedTask)
                    console.log('newtasks', JSON.stringify(newTasks, null, 2))

                    return {
                        ...col,
                        colTasks: newTasks
                    }
                }

                return col
            })


        }
    }
})

export const { taskAdded, setTasks, taskDeleted, setSelectedColIndex, setColumnName, columnAdded, dragEnd } = kanbanSlice.actions

export default kanbanSlice.reducer