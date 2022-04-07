const CheckoutProduct = ({ product }) => {
  const { title, categoryName, imgURL, price, qty } = product;
  
  return (
    <div className="card">
      <div className="card-horizontal">
        <img className="card-img" src={imgURL} alt={title} />
        <div className="card-content">
          <div className="card-title">{title}</div>
          <p className="card-subtitle">{categoryName.slice(0, -1)}</p>
          <div className="card-subtitle">
            <strong> ₹{price} </strong> x {qty} ={" "}
            <strong>₹{price * qty}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
