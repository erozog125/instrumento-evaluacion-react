import React, { useState, createContext } from "react";
import { products } from "../assets/products.js";

export const context = createContext();

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState({});
  const [PriceMin, setPriceMin] = useState(0);
  const [PriceMax, setPriceMax] = useState(0);
  const [Message, SetMessage] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(products); 

  const updateState = (newState) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  return (
    <context.Provider value={{ state, updateState, PriceMin, setPriceMin, PriceMax, setPriceMax , Message, SetMessage, filteredProducts, setFilteredProducts }}>
      {children}
    </context.Provider>
  );
};