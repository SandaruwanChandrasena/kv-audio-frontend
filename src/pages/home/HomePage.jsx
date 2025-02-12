import React from "react";
import Header from "../../components/Header"
import { Route, Routes } from "react-router-dom";
import ErrorNotFound from "./ErrorNotFound";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Item from "./Item";
import Home from "./home";

function HomePage() {
  return (
    <>
      <Header />
      <div className="w-full h-[calc(100vh-100px)] ">
        <Routes path="/*">
            <Route path="/" element={<Home />}/>
            <Route path="/gallery" element={<Gallery />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/items" element={<Item />}/>
            <Route path="/*" element={<ErrorNotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default HomePage;
