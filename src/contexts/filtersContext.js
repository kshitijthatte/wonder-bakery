import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers/filterReducer";

const FiltersContext = createContext();

const useFilters = () => useContext(FiltersContext);

const FiltersProvider = ({ children }) => {
  const filtersInitialState = {
    sortBy: "POPULARITY",
    price: "500",
    categories: {
      Cakes: false,
      Cookies: false,
      Doughnuts: false,
      Breads: false,
    },
    rating: "1",
  };
  const [filters, filtersDispatch] = useReducer(
    filterReducer,
    filtersInitialState
  );

  return (
    <FiltersContext.Provider
      value={{ filters, filtersInitialState, filtersDispatch }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export { FiltersProvider, useFilters };
