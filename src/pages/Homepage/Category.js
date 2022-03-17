const Category = ({ categoryName, imgURL }) => {
  return (
    <a className="card card-overlay" href="/">
      <img className="card-img category-img" src={imgURL} alt={categoryName} />
      <div className="overlay-content">
        <div className="card-title">{categoryName}</div>
      </div>
    </a>
  );
};

export default Category;
