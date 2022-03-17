const BestSelling = ({ itemName, imgURL }) => {
  return (
    <div className="card">
      <div className="card-horizontal">
        <img className="card-img" src={imgURL} alt={itemName} />
        <div className="card-content">
          <div className="card-title">{itemName}</div>
          <div className="card-actions">
            <button className="btn btn-sm btn-primary">Order Now</button>
            <button className="btn card-icon material-icons">
              favorite_border
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
