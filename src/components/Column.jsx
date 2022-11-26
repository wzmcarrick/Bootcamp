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

  console.log(col, colIndex)

  // const columnTasks = useSelector(state => state.tasks.columns)
  // console.log(columnTasks)

  return (
    <div className='singleColumn'>
      {col.colTasks.map((colTask) => <TaskItem key={colTask.id} colIndex={colIndex} showTask={colTask} />)}
    </div>

  );
};

export default Column;
