import { createContext, useContext, useState } from "react";

const PriceContext = createContext();

export const usePrice = () => useContext(PriceContext);

export const PriceProvider = ({ children }) => {
  const [maxPrice, setMaxPrice] = useState(100);

  return (
    <PriceContext.Provider value={{ maxPrice, setMaxPrice }}>
      {children}
    </PriceContext.Provider>
  );
};
