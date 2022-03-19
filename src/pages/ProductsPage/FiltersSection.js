const FiltersSection = ({ categories }) => {
  return (
    <aside className="filters">
      <div className="sticky-container">
        <div className="aside-header text-md">
          <span>Filters</span>
          <button className="btn btn-transparent btn-sm">Clear all</button>
        </div>

        <hr className="divider" />

        <strong className="aside-subheader text-sm">Sort By</strong>
        <div className="filter-container">
          <input type="radio" id="popularity" name="sort" />
          <label htmlFor="popularity">Popularity</label>
        </div>
        <div className="filter-container">
          <input type="radio" id="low-to-high" name="sort" />
          <label htmlFor="low-to-high">Price - Low to High</label>
        </div>
        <div className="filter-container">
          <input type="radio" id="high-to-low" name="sort" />
          <label htmlFor="high-to-low">Price - High to Low</label>
        </div>

        <hr className="divider" />

        <label htmlFor="price" className="aside-subheader text-sm">
          <strong>Price</strong>
        </label>
        <input
          type="range"
          className="slider"
          min="0"
          max="1000"
          step="100"
          list="price"
        />
        <datalist id="price">
          <option value="0" label="0">
            0
          </option>
          <option value="100"></option>
          <option value="200"></option>
          <option value="300"></option>
          <option value="400"></option>
          <option value="500"></option>
          <option value="600"></option>
          <option value="700"></option>
          <option value="800"></option>
          <option value="900"></option>
          <option value="1000"></option>
          <span>₹1000+</span>
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
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}

        <hr className="divider" />

        <strong className="aside-subheader text-sm">Ratings</strong>
        <div className="filter-container">
          <input type="checkbox" id="4" name="rating" value="4" />
          <label htmlFor="4"> 4★ &amp; above</label>
        </div>
        <div className="filter-container">
          <input type="checkbox" id="3" name="rating" value="3" />
          <label htmlFor="3"> 3★ &amp; above</label>
        </div>
        <div className="filter-container">
          <input type="checkbox" id="2" name="rating" value="2" />
          <label htmlFor="2"> 2★ &amp; above</label>
        </div>
        <div className="filter-container">
          <input type="checkbox" id="1" name="rating" value="1" />
          <label htmlFor="1"> 1★ &amp; above</label>
        </div>
      </div>
    </aside>
  );
};

export default FiltersSection;
