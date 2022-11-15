import Column from "./components/Column"
import axios from 'axios'
import { useEffect, useState } from "react";
import 'antd/dist/antd.min.css';
import { Button, Form, Input } from 'antd';

function App() {

  const [state, setState] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/tasks').then(res => {
      console.log({ res })
      setState(res.data)
    })
  }, [])

  const addTask = () => {
    return <Form>
      <Form.Item label="TaskName" name="taskName"><Input /></Form.Item>
    </Form>
  }

  const deleteTask = (id) => {
    setState(state.filter((st) => st.id !== id))
  }

  return (
    <>
      <div className="App">
        <Column data={state} onDelete={deleteTask} />
        <Button onClick={addTask}>Add Task</Button>
      </div>
      {/* <div className="App">
        <Column data={state} />
        <Button>Add Task</Button>
      </div> */}
    </>

  );
}

export default App;
