import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
function Task() {
    return (
        <div className="flex justify-center">
            <div className="flex justify-between h-20 shadow-md  w-11/12 bg-gray-100 rounded-full text-2xl ">
                <div className="text-base pt-4 pl-4 font-bold">
                    Buy new sweatshirt
                <div className="text-sm ml-2 font-medium">
                        Buy today
                </div>
                </div>

                <button className="flex items-center h-full mr-4 focus:border-none focus:outline-none">
                    <FontAwesomeIcon icon={faTrashAlt} size="sm" />
                </button>

            </div>
        </div>

    )
}

export default Task
