import React from "react";
import { useState } from "react";
import axios from 'axios';
function AddTask({ onAdd }) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const onSubmit = (e) => {

    e.preventDefault()

    // // if (!title || !description) {
    // //   alert('Missing title or description!')
    // //   return;
    // // }
    // onAdd({title, description})
    // setTitle('')
    // setDescription('')
    const obj = ({ title, description })
    console.log(obj);
    axios.post('http://localhost:7000/todo', obj)
      .then(res => console.log(res.data));
    // setTitle('')
    // setDescription('')
    console.log('czo');
  }
  return (
    <form className="flex flex-col max-w-xl m-auto  h-full items-center pt-8">
      <input
        type="text"
        className="border border-1 p-3 md:text-xl w-4/5"
        placeholder="Title"
        maxLength="50"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <span className="flex w-3/5">error</span>


      <input type="text"
        className="border border-1 p-3 md:text-xl w-4/5 mt-8"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* <button type="submit" class="py-3 px-6 bg-green-500 text-white font-bold w-full sm:w-32 mt-8">
        Submit
      </button> */}
      <button onClick={onSubmit} className="py-3 px-6 bg-green-500 text-white font-bold w-full sm:w-32 mt-8">Save Task</button>
    </form>
  );
}

export default AddTask;
