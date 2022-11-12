import Column from "./components/Column"
import axios from 'axios'
import { useEffect, useState } from "react";
import 'antd/dist/antd.css';

function App() {

  const [state, setState] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/tasks').then(res => {
      console.log({ res })
      setState(res.data)
    })
  }, [])

  return (
    <div className="App">
      <Column data={state} />
    </div>
  );
}

export default App;
