import React from "react";
import Task from "./Task";
import { useState, useEffect } from "react";
import axios from "axios";
import Toggle from "./Toggle";

function Tasks({newTask}) {
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        axios
            .get("http://localhost:7000/todo")
            .then((response) => {
                console.log(response.data);
                setTasks(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div className="flex flex-col items-center">
        { tasks.map((task) => (
            <Task key= {task._id} task={task}></Task>
        ))}
        <Toggle/>
    </div>
    )
}

export default Tasks
