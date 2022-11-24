import TaskItem from './TaskItem';
import AddTask from "./AddTask";
import { useState, useEffect } from "react";
import { Button } from 'antd';
import axios from 'axios'
// import { CloseOutlined, CheckCircleOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux';

const Column = () => {

  const tasks = useSelector(state => state.tasks)

  const [showAddTask, setShowAddTask] = useState(false)
  const [state, setState] = useState([])

  // useEffect(() => {
  //   axios.get('http://localhost:3001/tasks').then(res => {
  //     console.log({ res })
  //     setState(res.data)
  //   })
  // }, [])

  // const addTask = (task) => {
  //   console.log(task)
  //   console.log(task.date)
  //   const id = Math.floor(Math.random() * 10000) + 1
  //   const newTask = {
  //     id: id,
  //     name: task.name,
  //     assignee: task.assignee,
  //     dueDate: task.date,
  //     detail: task.detail,
  //     priority: task.priority

  //   }
  //   console.log([...state, newTask])
  //   setState([...state, newTask])

  // }

  const deleteTask = (id) => {
    setState(state.filter((st) => st.id !== id))
  }

  return (
    <div className='singleColumn'>
      <Button onClick={() => setShowAddTask(!showAddTask)}>Add Task</Button>

      {showAddTask ? <AddTask /> : ''}
      {tasks.map((task) => <TaskItem key={task.id} showTask={task} onDelete={deleteTask} />)}
    </div>

  );
};

export default Column;
