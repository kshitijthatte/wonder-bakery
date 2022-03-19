const ProductCard = () => {
  return (
    <div className="card product-card">
      <img
        className="card-img"
        src="https://source.unsplash.com/LDnmyOaA-ew"
        alt="cake-img"
      />

      <a href="/cakes/chocolatecake.html" className="card-title">
        Chocolate Cake
      </a>
      <a
        href="/cakes/chocolatecake.html"
        className="card-description product-price text-md"
      >
        <strong className=""> ₹890 </strong>
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
