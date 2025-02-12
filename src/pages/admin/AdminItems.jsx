import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

function AdminItems() {
  return (
    <div className="w-full h-full flex relative">
      AdminItems

    <Link to="/admin/items/add">
      <IoIosAddCircleOutline className="text-[50px] absolute right-10 bottom-10 hover:text-red-500 hover:text-[60px] " />
    
    </Link>

    </div>
  );
}

export default AdminItems;
