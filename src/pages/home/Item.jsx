import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductCard from "../../components/ProductCard";

function Item() {
  const [state, setState] = useState("loading"); // loading,success, error
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (state === "loading") {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;

      axios
        .get(`${backendUrl}/api/products`)
        .then((res) => {
          console.log(res.data.products);
          setItems(res.data.products);
          setState("success");
        })
        .catch((err) => {
          toast.error(err?.response?.data?.error || "An error occured");
          setState("error");
        });
    }
  }, []);
  return (
    <div className="w-full h-full flex flex-wrap justify-center pt-[50px]">
      {state === "loading" && (
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[100px] h-[100px] border-4 rounded-full border-t-green-500 border-l-gray-300 border-r-gray-300 border-b-gray-300 animate-spin"></div>
        </div>
      )}
      {state === "success" &&
        items.map((item) => {
          return (
            <ProductCard key={item.key} item={item}/>
          );
        })}
    </div>
  );
}

export default Item;
