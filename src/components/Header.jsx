import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full h-[100px] shadow-xl flex justify-center items-center relative">
      <img
        src="assets/logo2.png"
        alt=""
        className="w-[100px] h-[100px] object-cover absolute left-[5px] "
      />
      <Link to="/" className="text-2xl  m-2">
        Home
      </Link>
      <Link to="/contact" className="text-2xl m-2">
        Contact
      </Link>
      <Link to="/gallery" className="text-2xl m-2">
        Galery
      </Link>
      <Link to="/items" className="text-2xl m-2">
        Items
      </Link>
    </header>
  );
}

export default Header;
