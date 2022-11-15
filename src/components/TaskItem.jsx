// import { useState } from "react";
// import { AiOutlineCheckCircle } from 'react-icons/ai'
// import { FiThumbsUp } from 'react-icons/fi'
import { Card, Avatar } from 'antd'
import { CloseOutlined, CheckCircleOutlined } from '@ant-design/icons'
// import styles from '../index.css'


const TaskItem = ({ showTask, onDelete }) => {

  // const clickEventHandler = () => {
  //   alert(`This is ${showTask.name}!`);
  // };

  // const [hovered, setHovered] = useState(false)

  // const toggleHover = () => {
  //   setHovered(!hovered)
  // }

  const addPriorClass = (showTask) => {
    if (showTask.priority === 'Low') {
      return 'low'
    }
    else if (showTask.priority === 'Medium') {
      return 'medium'
    }
    else return 'high'
  }



  // className={`taskItem ${hovered ? 'hover' : ''}`}
  // onClick={clickEventHandler}
  // onMouseEnter={toggleHover} onMouseLeave={toggleHover}

  return (
    <Card style={{ margin: 10, borderRadius: 20 }} hoverable={true}>
      {/* <div className={`taskItem ${hovered ? 'hover' : ''}`} onClick={clickEventHandler} onMouseEnter={toggleHover} onMouseLeave={toggleHover}> */}
      <div className="taskName"><span><CheckCircleOutlined /> <b>{showTask.name}</b></span> <CloseOutlined onClick={() => { onDelete(showTask.id) }} /></div>
      <div className={`taskPrior ${addPriorClass(showTask)}`}>{showTask.priority}</div>
      <div className="taskDueDate"><Avatar style={{ marginRight: 10 }}>{showTask.assignee[0].toUpperCase()}</Avatar>{showTask.dueDate}</div>
      {/* <div className="taskAssignee">{showTask.assignee} <FiThumbsUp /></div> */}
      {/* </div> */}
    </Card>

  )

};

export default TaskItem;
