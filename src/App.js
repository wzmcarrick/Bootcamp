import Column from "./components/Column"
// import axios from 'axios'
// import AddTask from "./components/AddTask";
// import { useEffect, useState } from "react";
import 'antd/dist/antd.less';
import { Button } from 'antd';

function App() {

  // const [showAddTask, setShowAddTask] = useState(false)
  // const [state, setState] = useState([])

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

  // const deleteTask = (id) => {
  //   setState(state.filter((st) => st.id !== id))
  // }

  return (
    <>
      <Button>Add Column</Button>
      <div className="App">
        {/* <Button onClick={() => setShowAddTask(!showAddTask)}>Add Task</Button>
        {showAddTask ? <AddTask onAdd={addTask} /> : ''} */}
        <Column />

      </div>
      {/* <div className="App">
        <Column data={state} />
        <Button>Add Task</Button>
      </div> */}
    </>

  );
}

export default App;
