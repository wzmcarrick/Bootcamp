import AddTask from "./AddTask";
import { useState } from "react";
import { Button } from 'antd';
import TaskItem from './TaskItem';

const NewColumn = () => {

    const [showAddTask, setShowAddTask] = useState(false)
    const [state, setState] = useState([])

    const addTask = (task) => {
        console.log(task)
        console.log(task.date)
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = {
            id: id,
            name: task.name,
            assignee: task.assignee,
            dueDate: task.date,
            detail: task.detail,
            priority: task.priority

        }
        console.log([...state, newTask])
        setState([...state, newTask])

    }

    const deleteTask = (id) => {
        setState(state.filter((st) => st.id !== id))
    }

    return (
        <div className='singleColumn'>
            <Button onClick={() => setShowAddTask(!showAddTask)}>Add Task</Button>
            {showAddTask ? <AddTask onAdd={addTask} /> : ''}
            {state.map((task) => <TaskItem key={task.id} showTask={task} onDelete={deleteTask} />)}
        </div>
    )
}

export default NewColumn