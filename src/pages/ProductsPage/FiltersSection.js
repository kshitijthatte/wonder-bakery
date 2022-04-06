import { useFilters } from "../../contexts/filtersContext";
import { useProducts } from "../../contexts/productsContext";

const FiltersSection = () => {
  const { categories } = useProducts();
  const { filters, filtersDispatch } = useFilters();
  const { sortBy, price, categories: categoriesState, rating } = filters;

  return (
    <aside className="filters">
      <div className="sticky-container">
        <div className="aside-header text-md">
          <span>Filters</span>
          <button
            className="btn btn-transparent btn-sm"
            onClick={() => filtersDispatch({ type: "CLEAR_FILTERS" })}
          >
            Clear all
          </button>
        </div>

        <hr className="divider" />

        <strong className="aside-subheader text-sm">Sort By</strong>
        <div className="filter-container">
          <input
            type="radio"
            id="popularity"
            name="sort"
            checked={sortBy === "POPULARITY"}
            onChange={() =>
              filtersDispatch({ type: "SORT_BY", payload: "POPULARITY" })
            }
          />
          <label htmlFor="popularity">Popularity</label>
        </div>
        <div className="filter-container">
          <input
            type="radio"
            id="low-to-high"
            name="sort"
            checked={sortBy === "LOW_TO_HIGH"}
            onChange={() =>
              filtersDispatch({ type: "SORT_BY", payload: "LOW_TO_HIGH" })
            }
          />
          <label htmlFor="low-to-high">Price - Low to High</label>
        </div>
        <div className="filter-container">
          <input
            type="radio"
            id="high-to-low"
            name="sort"
            checked={sortBy === "HIGH_TO_LOW"}
            onChange={() =>
              filtersDispatch({ type: "SORT_BY", payload: "HIGH_TO_LOW" })
            }
          />
          <label htmlFor="high-to-low">Price - High to Low</label>
        </div>

        <hr className="divider" />

        <label htmlFor="price" className="aside-subheader text-sm">
          <strong>Price</strong>
        </label>
        <input
          type="range"
          className="slider"
          min="50"
          max="500"
          step="50"
          list="price"
          value={price}
          onChange={event =>
            filtersDispatch({
              type: "PRICE_CHANGE",
              payload: event.target.value,
            })
          }
        />
        <datalist id="price">
          <option value="50"></option>
          <option value="100"></option>
          <option value="150"></option>
          <option value="200"></option>
          <option value="250"></option>
          <option value="300"></option>
          <option value="350"></option>
          <option value="400"></option>
          <option value="450"></option>
          <option value="500"></option>
          <span>{price >= 500 ? `₹${price}+` : `<= ₹${price}`}</span>
        </datalist>

        <hr className="divider" />

        <strong className="aside-subheader text-sm">Categories</strong>
        {categories.map(category => (
          <div className="filter-container" key={category}>
            <input
              type="checkbox"
              id={category}
              name="category"
              value={category}
              checked={categoriesState[category]}
              onChange={() =>
                filtersDispatch({
                  type: "CATEGORY_CHANGE",
                  payload: {
                    ...categoriesState,
                    [category]: !categoriesState[category],
                  },
                })
              }
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}

        <hr className="divider" />

        <strong className="aside-subheader text-sm">Ratings</strong>
        <div className="filter-container">
          <input
            type="radio"
            id="4"
            name="rating"
            checked={rating === "4"}
            onChange={() =>
              filtersDispatch({ type: "RATING_CHANGE", payload: "4" })
            }
          />
          <label htmlFor="4"> 4★ &amp; above</label>
        </div>
        <div className="filter-container">
          <input
            type="radio"
            id="3"
            name="rating"
            checked={rating === "3"}
            onChange={() =>
              filtersDispatch({ type: "RATING_CHANGE", payload: "3" })
            }
          />
          <label htmlFor="3"> 3★ &amp; above</label>
        </div>
        <div className="filter-container">
          <input
            type="radio"
            id="2"
            name="rating"
            checked={rating === "2"}
            onChange={() =>
              filtersDispatch({ type: "RATING_CHANGE", payload: "2" })
            }
          />
          <label htmlFor="2"> 2★ &amp; above</label>
        </div>
        <div className="filter-container">
          <input
            type="radio"
            id="1"
            name="rating"
            checked={rating === "1"}
            onChange={() =>
              filtersDispatch({ type: "RATING_CHANGE", payload: "1" })
            }
          />
          <label htmlFor="1"> 1★ &amp; above</label>
        </div>
      </div>
    </aside>
  );
};

export default FiltersSection;
