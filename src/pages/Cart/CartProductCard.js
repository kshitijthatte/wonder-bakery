const CartProductCard = () => {
  return (
    <div className="card">
      <div className="card-horizontal">
        <img
          className="card-img"
          src="https://source.unsplash.com/nIFmcMvnxbI"
          alt={''}
        />
        <div className="card-content">
          <div className="card-title">Pineapple Cake</div>
          <div className="card-subtitle">
            <strong> ₹690 </strong> <s>₹1190</s>
          </div>
        </div>
      </div>
      <div className="card-actions">
        <div className="qty">
          <button className="btn btn-sm btn-round material-icons btn-disabled">
            remove
          </button>
          <input type="text" value="1" readOnly/>
          <button className="btn btn-sm btn-primary btn-round material-icons">
            add
          </button>
        </div>
        <button className="btn btn-sm btn-transparent">Add to Wishlist</button>
        <button className="btn btn-sm btn-transparent">Remove</button>
      </div>
    </div>
  );
};

export default CartProductCard;
