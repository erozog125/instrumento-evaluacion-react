import React, { useState } from 'react';
import { Product } from './Product';
import { products } from '../assets/products.js';

export const FilterProducts = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el filtro por nombre
  const [minPrice, setMinPrice] = useState(""); // Estado para el precio mínimo
  const [maxPrice, setMaxPrice] = useState(""); // Estado para el precio máximo
  const [category, setCategory] = useState(""); // Estado para la categoría
  const [filteredProducts, setFilteredProducts] = useState(products); // Estado para los productos filtrados

  // Función para aplicar los filtros
  const handleFilter = () => {
    let filtered = products;

    // Filtrar por nombre
    if (searchTerm.trim()) {
      filtered = filtered.filter((product) =>
        product.nameProduct?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }


   

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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filtro por precio */}
        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium text-gray-700">Filtrar por precio</label>
          <div className="flex space-x-4">
            <input
              type="number"
              placeholder="Min"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              value={minPrice}
             
            />
            <input
              type="number"
              placeholder="Max"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              value={maxPrice}
             
            />
          </div>
        </div>

        {/* Filtro por categoría */}
        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium text-gray-700">Filtrar por categoría</label>
          <select
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            value={category}
         
          >
            <option value="">Seleccionar categoría</option>
            <option value="electronics">Electrónica</option>
            <option value="fashion">Moda</option>
            <option value="home">Hogar</option>
            <option value="sports">Deportes</option>
          </select>
        </div>

        {/* Botón de aplicar filtros */}
        <div className="flex justify-center">
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={handleFilter}
          >
            Aplicar Filtros
          </button>
        </div>

        {/* Lista de productos filtrados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Product key={product.sku} {...product} />
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No se encontraron productos
            </p>
          )}
        </div>
      </div>
    </div>
  );
};