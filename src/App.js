import Column from "./components/Column"
// import axios from 'axios'
// import AddTask from "./components/AddTask";
// import { useEffect, useState } from "react";
import 'antd/dist/antd.less';
import { Button } from 'antd';
import { useState } from "react";
// import NewColumn from "./components/NewColumn";
import Kanban from "./pages/Kanban";

function App() {

  return (
    <>
      <Kanban />
    </>

  );
}

export default App;
