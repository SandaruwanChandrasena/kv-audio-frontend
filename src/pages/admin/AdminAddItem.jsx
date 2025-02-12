import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AdminAddItem() {
  const [productKey, setProductKey] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productCategory, setProductCategory] = useState("audio");
  const [productDimention, setProductDimention] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const navigate = useNavigate()

  async function handelAddItem() {
    try {
      const token = localStorage.getItem("token");
  
      if (!token) {
        toast.error("You're not authorized to add items");
        return;
      }
  
      const result = await axios.post(
        "http://localhost:3000/api/products",
        {
          key: productKey,
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
      toast.success("Item added successfully!");
      navigate("/admin/items")

    } catch (error) {
      console.error("Error adding item:", error.message);
      toast.error("Failed to add item. Please try again.");
    }
  }
  

  return (
    <div className="w-full h-full bg-purple-200 flex flex-col items-center p-4">
      <h1 className="text-xl font-bold mb-4">Add Product Page</h1>

      <div className="w-[400px] border p-4 flex flex-col gap-3 bg-white shadow-md rounded-lg">
        <input
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

        <input
          onChange={(e) => setProductDescription(e.target.value)}
          value={productDescription}
          type="text"
          placeholder="Product Description"
          className="p-2 border rounded-md"
        />

        <button
          onClick={handelAddItem}
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
        >
          Add
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

export default AdminAddItem;
