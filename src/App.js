import Column from "./components/Column"
// import axios from 'axios'
// import AddTask from "./components/AddTask";
// import { useEffect, useState } from "react";
import 'antd/dist/antd.less';
import { Button } from 'antd';
import { useState } from "react";
import NewColumn from "./components/NewColumn";

function App() {

  const [columns, setColumns] = useState([<Column key={0} />])

  const addColumn = (e) => {
    e.preventDefault()
    setColumns([...columns, <NewColumn key={columns.length} />])
  }

  return (
    <>
      <Button onClick={addColumn}>Add Column</Button>
      <div className="App">
        {columns}
      </div>
    </>

  );
}

export default App;
