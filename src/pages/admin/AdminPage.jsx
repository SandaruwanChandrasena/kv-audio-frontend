import React from "react";
import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark, FaRegUser } from "react-icons/fa";
import { MdSpeaker } from "react-icons/md";
import { Link, Route, Routes } from "react-router-dom";
import AdminItemsPage from "./AdminItemsPage";

function AdminPage() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[200px] h-full bg-green-200">
        <Link
          to="/admin/dashboard"
          className="w-full h-[40px] text-2xl font-bold bg-red-400 flex justify-center items-center border-b-1"
        >
          <BsGraphDown />
          Dashboard
        </Link>
        <Link
          to="/admin/booking"
          className="w-full h-[40px] text-2xl font-bold  bg-red-400 flex justify-center items-center border-b-1"
        >
          <FaRegBookmark />
          Booking
        </Link>
        <Link
          to="/admin/items"
          className="w-full h-[40px] text-2xl font-bold  bg-red-400 flex justify-center items-center border-b-1"
        >
          <MdSpeaker />
          Items
        </Link>
        <Link
          to="/admin/user"
          className="w-full h-[40px] text-2xl font-bold  bg-red-400 flex justify-center items-center border-b-1"
        >
          <FaRegUser />
          Users
        </Link>
      </div>

      <div className="w-[calc(100vw-200px)] bg-yellow-300">
        <Routes path="/*">
          <Route path="/booking" element={<h1>Booking</h1>} />
          <Route path="/item" element={<AdminItemsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminPage;
