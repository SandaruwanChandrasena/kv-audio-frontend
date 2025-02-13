import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

function AdminItems() {

  const [items, setItems] = useState([]);
  const [itemLoaded, setItemLoaded] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    if (!itemLoaded) {
      const token = localStorage.getItem("token");

      axios
        .get("http://localhost:3000/api/products", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
          setItemLoaded(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [itemLoaded]);


  const handleDelete = (key) => {
    if (window.confirm("Are you sure you want to delete this item?")) {

      //setItems((prevItems) => prevItems.filter((item) => item.key !== key));
      setItems(items.filter((item) => item.key !== key))

      const token = localStorage.getItem("token");

      axios
        .delete(`http://localhost:3000/api/products/${key}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res.data);
          setItemLoaded(false)
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="w-full h-full flex flex-col relative p-6 bg-gray-50">
      {!itemLoaded && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
          <div className="border-4 border-b-green-500 rounded-full w-[100px] h-[100px] animate-spin"></div>
        </div>
      )}
      <h1 className="text-3xl font-bold mb-6">Admin Items</h1>
      {itemLoaded && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm ">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-3 border">Key</th>
                <th className="py-3 px-3 border">Name</th>
                <th className="py-3 px-3 border">Price</th>
                <th className="py-3 px-3 border">Category</th>
                <th className="py-3 px-3 border">Dimensions</th>
                <th className="py-3 px-3 border">Availability</th>
                <th className="py-3 px-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((product) => (
                <tr key={product.key} className="hover:bg-gray-100">
                  <td className="py-3 px-3 border">{product.key}</td>
                  <td className="py-3 px-3 border">{product.name}</td>
                  <td className="py-3 px-3 border">{product.price}</td>
                  <td className="py-3 px-3 border">{product.category}</td>
                  <td className="py-3 px-3 border">{product.dimentions}</td>
                  <td className="py-3 px-3 border">
                    {product.availability ? "Available" : "Not Available"}
                  </td>
                  <td className="py-3 px-3 border">
                    <div className="flex justify-evenly">
                      <button
                        onClick={() => {
                          navigate(`/admin/items/update`, {
                            state: product
                          })
                        }}
                        className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product.key)}
                        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-15 flex justify-center">
        <Link to="/admin/items/add">
          <IoIosAddCircleOutline className="text-[60px] hover:text-red-500 hover:text-[62px]" />
        </Link>
      </div>
    </div>
  );
}

export default AdminItems;
