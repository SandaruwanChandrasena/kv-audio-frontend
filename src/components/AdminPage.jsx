import React from 'react'
import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark, FaRegUser } from "react-icons/fa";
import { MdSpeaker } from "react-icons/md";

function AdminPage() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[300px] h-full bg-green-200">
        <button className="w-full h-[40px] text-2xl font-bold bg-red-400 flex justify-center items-center border-b-1">
          <BsGraphDown />
          Dashboard
        </button>
        <button className="w-full h-[40px] text-2xl font-bold  bg-red-400 flex justify-center items-center border-b-1">
          <FaRegBookmark />
          Booking
        </button>
        <button className="w-full h-[40px] text-2xl font-bold  bg-red-400 flex justify-center items-center border-b-1">
          <MdSpeaker />
          Items
        </button>
        <button className="w-full h-[40px] text-2xl font-bold  bg-red-400 flex justify-center items-center border-b-1">
          <FaRegUser />
          Users
        </button>
      </div>

      <div className="w-full bg-yellow-300"></div>
    </div>
  )
}

export default AdminPage