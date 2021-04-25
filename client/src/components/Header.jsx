import React from 'react'
import { useState, useEffect } from "react";
import moment from "moment";
function Header() {
    const [date, setDate] = useState(moment());
    return (
        <div className="flex items-center h-24 ">
        <div className="flex items-center font-bold text-5xl h-full text-gray-600 ml-4">
            {date.date()}
        </div>
        <div className="flex flex-col h-2/5  w-16 justify-center ml-2 font-normal">
            <div className="flex flex-col justify-start font-semibold text-gray-600 uppercase">
                {date.format("MMM")}
            </div>
            <div className=" ">{date.year()}</div>
        </div>
        <div className="font-semibold w-full flex justify-end mr-4 text-gray-600">
            {date.format("dddd")}
        </div>
    </div>
    )
}

export default Header
