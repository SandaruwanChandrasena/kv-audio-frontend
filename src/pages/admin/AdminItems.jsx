const sampleArr = [
  {
    key: "P001",
    name: "JBL Flip 6",
    price: 19999,
    category: "audio",
    description:
      "Portable Bluetooth speaker with deep bass and IP67 waterproof rating.",
    dimentions: "18 x 7.4 x 6.8 cm",
    availability: true,
    productImage: ["https://images.jbl.com/FLIP6-.png"],
  },
  {
    key: "P002",
    name: "Sony WH-1000XM5",
    price: 56999,
    category: "audio",
    description:
      "Industry-leading noise-canceling wireless headphones with 30-hour battery life.",
    dimentions: "20 x 25 x 5 cm",
    availability: true,
    productImage: [
      "https://m.media-amazon.com/images/I/71zBUO-Oj7L._AC_SX425_.jpg",
    ],
  },
  {
    key: "P003",
    name: "Philips Hue Smart LED",
    price: 8999,
    category: "lights",
    description:
      "Smart LED bulb with adjustable colors and voice control compatibility.",
    dimentions: "6 x 6 x 11 cm",
    availability: true,
    productImage: [
      "https://m.media-amazon.com/images/I/51jTZkgcuQL._AC_SX679_.jpg",
    ],
  },
  {
    key: "P004",
    name: "Bose SoundLink Mini II",
    price: 34999,
    category: "audio",
    description:
      "Compact wireless speaker with rich sound and up to 12 hours of battery life.",
    dimentions: "18 x 5 x 6 cm",
    availability: false,
    productImage: [
      "https://m.media-amazon.com/images/I/81Wx7hwAwiL._AC_SX425_.jpg",
    ],
  },
  {
    key: "P005",
    name: "Nanoleaf Shapes Hexagons",
    price: 42999,
    category: "lights",
    description: "Customizable modular LED panels with smart home integration.",
    dimentions: "20 x 23 x 1 cm",
    availability: true,
    productImage: [
      "https://m.media-amazon.com/images/I/81+uDTj2AhL._AC_SX679_.jpg",
    ],
  },
];

import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

function AdminItems() {
  const [items, setItems] = useState(sampleArr);

  return (
    <div className="w-full h-full flex flex-col relative">
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Dimensions</th>
            <th>Availability</th>
          </tr>
        </thead>
          {
            items.map((product) => {

              console.log(product);

              return (
                <tr key={product.key}>
                  <td>{product.key}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.dimentions}</td>
                  <td>{product.availability ? "Available" : "Not Available"}</td>
                </tr>
              )
              
            })
          }
        <tbody>
          
        </tbody>
      </table>

      <Link to="/admin/items/add">
        <IoIosAddCircleOutline className="text-[50px] absolute right-10 bottom-10 hover:text-red-500 hover:text-[60px] " />
      </Link>
    </div>
  );
}

export default AdminItems;
