import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

function AdminUpdateItem() {
    const location = useLocation()
  
    console.log(location);


  const [productKey, setProductKey] = useState(location.state.key);
  const [productName, setProductName] = useState(location.state.name);
  const [productPrice, setProductPrice] = useState(location.state.price);
  const [productCategory, setProductCategory] = useState(location.state.category);
  const [productDimention, setProductDimention] = useState(location.state.dimentions);
  const [productDescription, setProductDescription] = useState(location.state.description);
  const navigate = useNavigate()

  async function handelUpdateItem() {
    try {
      const token = localStorage.getItem("token");
  
      if (!token) {
        toast.error("You're not authorized to add items");
        return;
      }
  
      const result = await axios.put(
        "http://localhost:3000/api/products/"+productKey,
        {
          name: productName,
          price: productPrice,
          category: productCategory,
          description: productDescription,
          dimentions: productDimention,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
  
      console.log(result);
      toast.success("Item Updated successfully!");
      navigate("/admin/items")

    } catch (error) {
      console.error("Error Updating item:", error.message);
      toast.error("Failed to Updating item. Please try again.");
    }
  }
  

  return (
    <div className="w-full h-full bg-purple-200 flex flex-col items-center p-4">
      <h1 className="text-xl font-bold mb-4">Update Item</h1>

      <div className="w-[400px] border p-4 flex flex-col gap-3 bg-white shadow-md rounded-lg">
        <input
        disabled
          onChange={(e) => setProductKey(e.target.value)}
          value={productKey}
          type="text"
          placeholder="Product Key"
          className="p-2 border rounded-md"
        />

        <input
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
          type="text"
          placeholder="Product Name"
          className="p-2 border rounded-md"
        />

        <input
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
          type="number"
          placeholder="Product Price"
          className="p-2 border rounded-md"
        />

        <select
          onChange={(e) => setProductCategory(e.target.value)}
          value={productCategory}
          className="p-2 border rounded-md"
        >
          <option value="audio">Audio</option>
          <option value="lights">Lights</option>
        </select>

        <input
          onChange={(e) => setProductDimention(e.target.value)}
          value={productDimention}
          type="text"
          placeholder="Product Dimension"
          className="p-2 border rounded-md"
        />

        <textarea
          onChange={(e) => setProductDescription(e.target.value)}
          value={productDescription}
          type="text"
          placeholder="Product Description"
          className="p-2 border rounded-md"
        />

        <button
          onClick={handelUpdateItem}
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
        >
          Update Item
        </button>
        <button onClick={() => {
            navigate("/admin/items")
        }} className="p-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition">
          Cancle
        </button>
      </div>
    </div>
  );
}

export default AdminUpdateItem;
