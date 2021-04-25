import React from "react";
import { useState } from "react";
function AddTask({ onAdd }) {
    

    
  return (
    <div class="flex flex-col max-w-xl m-auto  h-full items-center pt-8">
      <input
        type="text"
        class="border border-1 p-3 md:text-xl w-4/5"
        placeholder="Title"
        maxLength=""
      />
      
      <span className="flex w-3/5">error</span>
      
        
      <input
        type="text"
        class="border border-1 p-3 md:text-xl w-4/5 mt-8"
        placeholder="Description"
      />

      <button class="py-3 px-6 bg-green-500 text-white font-bold w-full sm:w-32 mt-8">
        Submit
      </button>
    </div>
  );
  }

export default AddTask;
