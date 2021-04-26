import { useState, useEffect } from "react";
import Main from "./components/Main";
import Task from "./components/Task";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { Router } from "react-router";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Vip from "./components/Vip";

function App() {
 
  const [newTask, setNewTask] = useState({})
  //Add Task
  const addTask = async (task) => {
 
    // const res = await fetch('http://localhost:7000/todo', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify(task),
    const res = await fetch('http://localhost:7000/todo', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })
    
    console.log(res.json())
    const data = await res.json()
    setNewTask(data)
  }
  return (
    <div
      className="flex justify-center items-center h-screen font-sans 
    bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 bg-opacity-50"
    >
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Tasks newTask={newTask} />} />
          <Route path="/create" element={<AddTask onAdd={addTask} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
