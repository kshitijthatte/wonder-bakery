import { useNavigate } from "react-router-dom";
import { useFilters } from "../../contexts/filtersContext";

const Category = ({ categoryName, imgURL }) => {
  const navigate = useNavigate();
  const {
    filters: { categories: categoriesState },
    filtersDispatch,
  } = useFilters();
  const categoriesReset = Object.keys(categoriesState).forEach(
    cateogory => (categoriesState[cateogory] = false)
  );
  return (
    <div
      className="card card-overlay"
      onClick={() => {
        filtersDispatch({
          type: "CLEAR_FILTERS",
        });
        filtersDispatch({
          type: "CATEGORY_CHANGE",
          payload: {
            ...categoriesReset,
            [categoryName]: true,
          },
        });
        navigate("/products");
      }}
    >
      <img className="card-img category-img" src={imgURL} alt={categoryName} />
      <div className="overlay-content">
        <div className="card-title">{categoryName}</div>
      </div>
    </div>
  );
};

export default Category;
