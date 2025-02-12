import { Link } from "react-router-dom";

function Header() {

    return (
        <div className="w-full h-[100px] shadow-xl flex justify-center items-center cursor-pointer relative">

            <img src="/logo.jpg" alt="logo" className="w-[80px] h-[80px] object-cover rounded-full absolute left-2 border-4 border-blue-800"/>

            <Link to="/" className="text-[25px] font-bold m-3 ">
            Home | 
            </Link>

            <Link to="/contact" className="text-[25px] font-bold m-3 ">
            Contact |
            </Link>

            <Link to="/gallery" className="text-[25px] font-bold m-3 ">
            Gallery |
            </Link>

            <Link to="/items" className="text-[25px] font-bold m-3 ">
            Items |
            </Link>

        </div>
    )
}

export default Header;