import { GoGraph } from "react-icons/go";
import { FaRegBookmark, FaRegUser } from "react-icons/fa";
import { MdOutlineSpeaker } from "react-icons/md";
import { Link, Route, Routes } from "react-router-dom";

function AdminPage() {
    return (
        <div className="w-full h-screen flex">
              <div className="w-[250px] h-full bg-green-200">
        
            <Link to="/admin/dashboad" className="w-full h-[40px] text-[25px] font-bold flex justify-start items-center relative pl-1">
              DashBoard
              <GoGraph className="right-1 absolute"/>
            </Link>

            <Link to="/admin/bookings" className="w-full h-[40px] text-[25px] font-bold flex justify-start items-center relative pl-1">
              Bookings
              <FaRegBookmark className="right-1 absolute"/>
            </Link>

            <Link to="/admin/items" className="w-full h-[40px] text-[25px] font-bold flex justify-start items-center relative pl-1">
              Items
              <MdOutlineSpeaker className="right-1 absolute"/>
            </Link>
            <Link to="/admin/users" className="w-full h-[40px] text-[25px] font-bold flex justify-start items-center relative pl-1">
              Users
              <FaRegUser className="right-1 absolute"/>
            </Link>
              </div>

              <div className="w-[calc(100vw-250px)] bg-red-200">

                <Routes path="/*">
                  <Route  path="/dashboad" element={<h1>Dashboard</h1>}/>
                  <Route  path="/bookings" element={<h1>Booking</h1>}/>
                  <Route  path="/items" element={<h1>Items</h1>}/>
                  <Route  path="/users" element={<h1>Users</h1>}/>
                </Routes>

              </div>
            </div>
    )    
}

export default AdminPage;