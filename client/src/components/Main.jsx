import React from "react";
import AddTask from "./AddTask";
import Task from "./Task";
import { useState, useEffect } from "react";
import axios from "axios";

import Toggle from "./Toggle";
import Header from "./Header";
import { Outlet } from "react-router";
import Tasks from "./Tasks";
function Main() {
    const [display, setDisplay] = useState(true)
  return (
    <div className="relative h-4/6 w-1/4 shadow-lg font-sans bg-white ">
      {/* navbar */}
      <Header />
      
        <Outlet />
      

      
    </div>
  );
}

export default Main;
