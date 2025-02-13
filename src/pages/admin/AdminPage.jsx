import { GoGraph } from "react-icons/go";
import { FaRegBookmark, FaRegUser } from "react-icons/fa";
import { MdOutlineSpeaker } from "react-icons/md";
import { Link, Route, Routes } from "react-router-dom";
import AdminItems from "./AdminItems";
import AdminAddItem from "./AdminAddItem";
import AdminUpdateItem from "./AdminUpdateItem";

function AdminPage() {
    return (
        <div className="w-full h-screen flex">
              <div className="w-[250px] h-full bg-green-200">
        
            <Link to="/admin/dashboad" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center relative ">
              <GoGraph className="left-1 absolute"/>
              DashBoard
            </Link>

            <Link to="/admin/bookings" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center relative ">
              <FaRegBookmark className="left-1 absolute"/>
              Bookings
            </Link>

            <Link to="/admin/items" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center relative ">
              <MdOutlineSpeaker className="left-1 absolute"/>
              Items
            </Link>
            <Link to="/admin/users" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center relative ">
              <FaRegUser className="left-1 absolute"/>
              Users
            </Link>
              </div>

              <div className="w-[calc(100vw-250px)]">

                <Routes path="/*">

                  <Route  path="/dashboad" element={<h1>Dashboard</h1>}/>

                  <Route  path="/bookings" element={<h1>Booking</h1>}/>

                  <Route  path="/items" element={<AdminItems />}/>
                  <Route path="/items/add" element={<AdminAddItem />}/>
                  <Route path="/items/update" element={<AdminUpdateItem />}/>

                  <Route  path="/users" element={<h1>Users</h1>}/>
                </Routes>

              </div>
            </div>
    )    
}

export default AdminPage;