import TaskItem from './TaskItem';
import AddTask from "./AddTask";
import { useState, useEffect } from "react";
import { Button } from 'antd';
import axios from 'axios'
// import { CloseOutlined, CheckCircleOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux';
import { setTasks } from '../features/KanbanSlice'
// import { useDispatch } from "react-redux";
import { taskDeleted } from "../features/KanbanSlice";


const Column = ({ col, colIndex }) => {

  console.log(col, colIndex)

  // const columnTasks = useSelector(state => state.tasks.columns)
  // console.log(columnTasks)

  return (
    // <div className='singleColumn'>
    <div>
      {col.colTasks.map((colTask) => <TaskItem key={colTask.id} colIndex={colIndex} showTask={colTask} />)}
    </div>

    // </div>

  );
};

export default Column;
