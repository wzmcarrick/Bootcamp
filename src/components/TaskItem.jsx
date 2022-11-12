import { useState } from "react";
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { FiThumbsUp } from 'react-icons/fi'

const TaskItem = ({ showTask }) => {

  const clickEventHandler = () => {
    alert(`This is ${showTask.name}!`);
  };

  const [hovered, setHovered] = useState(false)

  const toggleHover = () => {
    setHovered(!hovered)
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
    <div className={`taskItem ${hovered ? 'hover' : ''}`} onClick={clickEventHandler} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <div className="taskName"><AiOutlineCheckCircle /> <b>{showTask.name}</b></div>
      <div className={`taskPrior ${addPriorClass(showTask)}`}>{showTask.priority}</div>
      <div className="taskDueDate">{showTask.dueDate}</div>
      <div className="taskAssignee">{showTask.assignee} <FiThumbsUp /></div>
    </div>
  )

};

export default TaskItem;
