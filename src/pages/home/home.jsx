import React from "react";
import Header from "../../components/header";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./homeScreen";
import ContactScreen from "./contactScreen";
import GalleryScreen from "./galleryScreen";
import ItemScreen from "./itemScreen";
import NotFoundError from "./notFoundError";

function HomePage() {
  return (
    <>
      <Header />
      <div className="h-[calc(100vh-100px)] w-full bg-yellow-500">
        <Routes path="/*">
            <Route path="/" element={<HomeScreen />}/>
            <Route path="/contact" element={<ContactScreen />}/>
            <Route path="/gallery" element={<GalleryScreen />}/>
            <Route path="/items" element={<ItemScreen />}/>
            <Route path="/*" element={<NotFoundError />} />
        </Routes>
      </div>
    </>
  );
}

export default HomePage;
