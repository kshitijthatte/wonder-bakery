import { Link } from "react-router-dom";

const Category = ({ categoryName, imgURL }) => {
  return (
    <Link className="card card-overlay" to="/products">
      <img className="card-img category-img" src={imgURL} alt={categoryName} />
      <div className="overlay-content">
        <div className="card-title">{categoryName}</div>
      </div>
    </Link>
  );
};

export default Category;
