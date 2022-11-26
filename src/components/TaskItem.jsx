// import { useState } from "react";
// import { AiOutlineCheckCircle } from 'react-icons/ai'
// import { FiThumbsUp } from 'react-icons/fi'
import { Card, Avatar } from 'antd'
import { CloseOutlined, CheckCircleOutlined } from '@ant-design/icons'
import '../index.css'
import { useDispatch } from "react-redux";
import { taskDeleted, setSelectedColIndex } from "../features/addTask/taskSlice";
import { useSelector } from 'react-redux';



const TaskItem = ({ showTask, colName, colIndex }) => {

  const dispatch = useDispatch()
  const filteredTasks = useSelector(state => state.tasks.columns.map(c => {
    if (c.colTasks.id !== showTask.id) {
      return c.colTasks
    }
  }))
  // .filter(s => s.colTasks.id !== showTask.id)
  // console.log("filteredTasks", filteredTasks)

  // const toBeDeletedTask = {
  //   colName: colName,
  //   colTasks: {
  //     id: showTask.id,
  //     name: showTask.name,
  //     assignee: showTask.assignee,
  //     dueDate: showTask.dueDate,
  //     detail: showTask.detail,
  //     priority: showTask.priority
  //   }
  // }

  const toBeDeletedTask =
  {
    id: showTask.id,
    name: showTask.name,
    assignee: showTask.assignee,
    dueDate: showTask.dueDate,
    detail: showTask.detail,
    priority: showTask.priority
  }


  const deleteTask = () => {
    console.log('delete', showTask.id)

    // .filter(s => s.colTasks.id !== showTask.id)
    console.log("filteredTasks", filteredTasks)
    console.log("tobe deleted task", toBeDeletedTask)
    dispatch(setSelectedColIndex(colIndex))
    console.log(colIndex)
    dispatch(taskDeleted(toBeDeletedTask))
  }

  const addPriorClass = (showTask) => {
    if (showTask.priority === 'Low') {
      return 'low'
    }
    else if (showTask.priority === 'Medium') {
      return 'medium'
    }
    else return 'high'
  }

  return (
    <Card className="custom-card" style={{ margin: 10, borderRadius: 20 }} hoverable={true}>
      <div className="taskName">
        <span>
          <CheckCircleOutlined />
          <b>{showTask.name}</b>
        </span>
        <CloseOutlined onClick={deleteTask} />
      </div>
      {showTask.priority ? <div className={`taskPrior ${addPriorClass(showTask)}`}>{showTask.priority}</div> : <div></div>}
      <div className="taskDueDate"> <Avatar style={{ marginRight: 10 }}>{showTask.assignee ? showTask.assignee[0].toUpperCase() : ''}</Avatar>{showTask.dueDate}</div>
    </Card>

  )

};

export default TaskItem;
