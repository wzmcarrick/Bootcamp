// import Column from "./components/Column"
// import axios from 'axios'
// import AddTask from "./components/AddTask";
// import { useEffect, useState } from "react";
import 'antd/dist/antd.less';
// import { Button } from 'antd';
// import { useState } from "react";
// import NewColumn from "./components/NewColumn";
import Kanban from "./pages/Kanban";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <h1>My App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Kanban />} />
          <Route path="/" element={<Home />} />
        </Routes>

      </BrowserRouter>
      <ToastContainer />

      {/* <Kanban /> */}
      {/* <Login />
      <Register /> */}
    </>

  );
}

export default App;
