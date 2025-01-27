import "./ProductCard.css"
function ProductCard() {
    return (
        <div className="main_div">
      <img
        src="https://m.media-amazon.com/images/I/711Y6Q3suKL._SS400_.jpg"
        alt=""
        className="product_image"
      />
      <span className="spn_name">Bluetooth Speaker</span>
      <span className="span_price">LKR. 2500.00</span>
      <h1>Product Card</h1>
    </div>
    )
    
}

export default ProductCard;