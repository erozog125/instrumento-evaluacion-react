import React, { useState, createContext } from 'react';


// Crear el contexto
export const NameContext = createContext();

export const Context = ({ children }) => {
  const [Name, SetName] = useState("");

  return (
    <NameContext.Provider value={{ Name, SetName }}>
      {children}
    </NameContext.Provider>
  );
};