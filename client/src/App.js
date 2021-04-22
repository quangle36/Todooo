import { useState, useEffect } from 'react'
import Main from './components/Main'
import Task from './components/Task'
import axios from "axios";
function App() {
  const [task, setTasks] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/')
  })
  return (
    <div className="flex justify-center items-center h-screen font-sans 
    bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 bg-opacity-50">
      <Main />
    </div>
  );
}

export default App;
