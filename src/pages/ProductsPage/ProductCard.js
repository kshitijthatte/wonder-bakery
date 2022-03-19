const ProductCard = ({ product: { title, categoryName, imgURL, price } }) => {
  return (
    <div className="card product-card">
      <img className="card-img" src={imgURL} alt={title} />
      <a href="/cakes/chocolatecake.html" className="card-title">
        {title.length < 18 ? title : title.slice(0, 18) + "..."}
      </a>
      <p className="card-subtitle">{categoryName.slice(0, -1)}</p>
      <a
        href="/cakes/chocolatecake.html"
        className="card-description product-price text-md"
      >
        <strong> ₹{price} </strong>
      </a>
      <div className="card-actions">
        <button className="btn btn-sm btn-transparent">Add to Cart</button>
        <div className="card-actions-right">
          <button className="btn card-icon material-icons">
            favorite_border
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
