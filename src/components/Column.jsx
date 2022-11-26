import TaskItem from './TaskItem';
import AddTask from "./AddTask";
import { useState, useEffect } from "react";
import { Button } from 'antd';
import axios from 'axios'
// import { CloseOutlined, CheckCircleOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux';
import { setTasks } from '../features/addTask/taskSlice'
// import { useDispatch } from "react-redux";
import { taskDeleted } from "../features/addTask/taskSlice";


const Column = ({ col, colIndex }) => {

  // const dispatch = useDispatch()

  // const tasks = useSelector(state => state.tasks)

  // const [showAddTask, setShowAddTask] = useState(false)
  // const [state, setState] = useState([])


  // useEffect(() => {
  //   axios.get('http://localhost:3001/tasks').then(res => {
  //     console.log({ res })
  //     console.log(res.data)
  //     dispatch(setTasks(res.data))
  //     // setState(res.data)
  //   })
  // }, [])

  // console.log("tasks", tasks.columns)
  console.log(col, colIndex)

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

  // const deleteTask = () => {
  //   dispatch(taskDeleted(id))
  //   // setState(state.filter((st) => st.id !== id))

  // }

  return (
    <div className='singleColumn'>
      {/* <Button onClick={() => setShowAddTask(!showAddTask)}>Add Task</Button>

      {showAddTask ? <AddTask /> : ''} */}
      {/* <AddTask colIndex={colIndex} col={col} /> */}
      {col.colTasks.map((colTask) => <TaskItem key={colTask.id} colName={col.colName} colIndex={colIndex} showTask={colTask} />)}
    </div>

  );
};

export default Column;
