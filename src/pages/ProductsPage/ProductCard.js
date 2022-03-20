const ProductCard = ({
  product: { title, categoryName, imgURL, price, rating },
}) => {
  return (
    <div className="card card-badge product-card">
      <img className="card-img" src={imgURL} alt={title} />
      <a href="/" className="card-title">
        {title.length < 18 ? title : title.slice(0, 18) + "..."}
      </a>
      <div
        className="c-badge-right rating-badge"
        style={{ background: rating < 3.8 && "var(--yellow)" }}
      >
        {rating} <span className="material-icons">star</span>
      </div>
      <p className="card-subtitle">{categoryName.slice(0, -1)}</p>
      <a href="/" className="card-description product-price text-md">
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
