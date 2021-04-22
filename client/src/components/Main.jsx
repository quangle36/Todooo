import React from 'react'
import Task from './Task'
function Main() {
    return (
        <div className=" h-4/6 w-1/4 shadow-lg font-sans bg-white">
         {/* navbar */}
            <div className="flex items-center h-24 ">
                <div className="flex items-center font-bold text-5xl h-full text-gray-600 ml-4">
                    12
                </div>
                <div className="flex flex-col h-2/5  w-16 justify-center ml-2 font-normal">
                        <div className="flex flex-col justify-start font-semibold text-gray-600">JAN</div>
                        <div className="-mb-1 ">2016</div>
                </div>
                <div className="font-semibold w-full flex justify-end mr-4 text-gray-600">
                    TUESDAY
                </div>
            </div>
            <Task/>
        </div>
    )
}

export default Main
