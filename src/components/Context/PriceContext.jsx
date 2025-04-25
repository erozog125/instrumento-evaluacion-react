import { createContext, useContext, useState } from "react";

export const PriceContext = createContext();

export const usePrice = () => useContext(PriceContext);

export const PriceProvider = ({ children }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  return (
    <PriceContext.Provider value={{ minPrice, maxPrice, setMinPrice, setMaxPrice }}>
      {children}
    </PriceContext.Provider>
  );
};
