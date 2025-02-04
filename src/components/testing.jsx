import { useState } from "react";

function Testing() {
  const [count, setCount] = useState(0);
  const [itemName, setItemName] = useState("cocunot");

  // const itemName = "coconut"

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-9xl font-bold pb-5 ">
        {count} + {itemName}s
      </h1>

      <button
        className="text-2xl w-[100px] h-[40px] bg-black text-white rounded-lg"
        onClick={() => {
          const newCount = count + 1;
          setCount(newCount);
        }}
      >
        count
      </button>

      <div className="w-full p-4 flex items-center justify-evenly">
        <button
          className="text-2xl w-[100px] h-[40px] bg-blue-500 text-white rounded-lg "
          onClick={() => {
            setItemName("Coconut");
          }}
        >
          Coconut
        </button>
        <button
          className="text-2xl w-[100px] h-[40px] bg-blue-500 text-white rounded-lg
        "
          onClick={() => {
            setItemName("Banana");
          }}
        >
          Banana
        </button>
        <button
          className="text-2xl w-[100px] h-[40px] bg-blue-500 text-white rounded-lg "
          onClick={() => {
            setItemName("Apple");
          }}
        >
          Apple
        </button>
        <button
          className="text-2xl w-[100px] h-[40px] bg-blue-500 text-white rounded-lg "
          onClick={() => {
            setItemName("Other");
          }}
        >
          Other
        </button>
      </div>
    </div>
  );
}

export default Testing;
