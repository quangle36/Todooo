import React from "react";

function Toggle({color, text}) {
  return (
    <div>
      <button className={` block absolute uppercase mx-auto bottom-4 left-36 shadow bg-green-100 focus:shadow-outline focus:outline-none text-black text-xs py-3 px-10 rounded`}>
       <a href="/create">Add a task</a>
      </button>
    </div>
  );
}

export default Toggle;
