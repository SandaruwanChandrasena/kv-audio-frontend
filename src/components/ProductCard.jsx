function ProductCard({ item }) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4 w-72 max-h-[500px] min-h-[450px] flex flex-col items-center m-5 relative">
       
        <img
          src={item.productImage[0]}
          alt={item.name}
          className="w-65 h-40 object-cover rounded-md"
        />
        <h2 className="text-lg font-semibold mt-3 text-center">{item.name}</h2>
        <p className="text-gray-600 text-sm text-center mt-2 ">{item.description}</p>
        <p className="text-blue-600 font-bold text-lg mt-2 ">Rs.{item.price}</p>
        <p className={`text-sm font-semibold mt-2 text-center ${item.availability ? "text-green-600" : "text-red-600"}`}>
          {item.availability ? "Available" : "Not Available"}
        </p>
        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition absolute bottom-3">
          Add to Cart
        </button>
      
      </div>
    );
  }
  
  export default ProductCard;
  