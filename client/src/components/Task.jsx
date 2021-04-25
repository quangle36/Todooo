import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
function Task({task, onDelete}) {
    return (
        
            <div className="flex justify-between h-20 shadow-lg  w-11/12 bg-white rounded-full text-2xl mb-4">
                <div className="text-base pt-4 pl-8 font-bold">
                    {task.title}
                <div className="text-sm ml-2 font-medium">
                        {task.description}
                </div>
                </div>

                <button className="flex items-center h-full mr-4 focus:border-none focus:outline-none">
                    <FontAwesomeIcon icon={faTrashAlt} size="xs" className="mr-4"/>
                </button>

            </div>
  

    )
}

export default Task
