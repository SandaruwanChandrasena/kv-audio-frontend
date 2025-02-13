import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaEdit, FaTrash } from "react-icons/fa"; // Importing edit and delete icons
import { Link, useNavigate } from "react-router-dom";

function AdminItems() {
  const [items, setItems] = useState([]);
  const [itemLoaded, setItemLoaded] = useState(false);
  const navigate = useNavigate();

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
      setItems(items.filter((item) => item.key !== key));

      const token = localStorage.getItem("token");

      axios
        .delete(`http://localhost:3000/api/products/${key}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res.data);
          setItemLoaded(false);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="w-full h-full flex flex-col relative p-6 bg-gradient-to-r from-gray-50 to-gray-100">
      {!itemLoaded && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
          <div className="border-4 border-b-green-500 rounded-full w-[100px] h-[100px] animate-spin"></div>
        </div>
      )}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Items</h1>
      {itemLoaded && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            <thead className="bg-gradient-to-r from-gray-200 to-gray-300">
              <tr>
                <th className="py-3 px-3 border text-left text-gray-700">Key</th>
                <th className="py-3 px-3 border text-left text-gray-700">Name</th>
                <th className="py-3 px-3 border text-left text-gray-700">Price</th>
                <th className="py-3 px-3 border text-left text-gray-700">Category</th>
                <th className="py-3 px-3 border text-left text-gray-700">Dimensions</th>
                <th className="py-3 px-3 border text-left text-gray-700">Availability</th>
                <th className="py-3 px-3 border text-left text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((product) => (
                <tr key={product.key} className="hover:bg-gray-50 transition duration-150">
                  <td className="py-3 px-3 border text-gray-600">{product.key}</td>
                  <td className="py-3 px-3 border text-gray-600">{product.name}</td>
                  <td className="py-3 px-3 border text-gray-600">Rs.{product.price}</td>
                  <td className="py-3 px-3 border text-gray-600">{product.category}</td>
                  <td className="py-3 px-3 border text-gray-600">{product.dimentions}</td>
                  <td className="py-3 px-3 border text-gray-600">
                    {product.availability ? (
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm">Available</span>
                    ) : (
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-sm">Not Available</span>
                    )}
                  </td>
                  <td className="py-3 px-3 border">
                    <div className="flex justify-evenly space-x-2">
                      <button
                        onClick={() => {
                          navigate(`/admin/items/update`, {
                            state: product,
                          });
                        }}
                        className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-200 flex items-center gap-2"
                      >
                  
                        <FaEdit className="text-lg" /> {/* Edit Icon */}
                      </button>
                      <button
                        onClick={() => handleDelete(product.key)}
                        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-200 flex items-center gap-2"
                      >
                       
                        <FaTrash className="text-lg" /> {/* Delete Icon */}
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
          <IoIosAddCircleOutline className="text-[60px] text-gray-700 hover:text-red-500 hover:text-[62px] transition-all duration-200" />
        </Link>
      </div>
    </div>
  );
}

export default AdminItems;