import React, { useState } from 'react';
import { Product } from './Product';
import { products } from '../assets/products.js';

export const FilterProducts = () => {
  const [Name, setName] = useState(""); 
  const [filteredProducts, setFilteredProducts] = useState(products); 

  const handleName = () => {
    const filtered = products.filter((product) =>
      product.nameProduct?.toLowerCase().includes(Name.toLowerCase())
    );
    setFilteredProducts(filtered); 
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      {/* Contenedor principal */}
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-6 space-y-6">

        {/* Título */}
        <h2 className="text-3xl font-semibold text-center text-gray-800">Buscar Productos</h2>

        {/* Campo de texto para buscar productos */}
        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium text-gray-700">Buscar por nombre</label>
          <input
            type="text"
            placeholder="Escribe el nombre del producto..."
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            value={Name} 
            onChange={(e) => setName(e.target.value)} 
          />
          
          {/* Botón de búsqueda */} 
          <button
            onClick={handleName} 
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Aplicar Filtros
          </button>
        </div>

        {/* Lista de productos filtrados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <Product key={product.sku} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};
