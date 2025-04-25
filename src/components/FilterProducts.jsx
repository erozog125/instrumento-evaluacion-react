import React, { useState } from 'react';
import { Product } from './Product';
import { products } from '../assets/products.js';

export const FilterProducts = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  const handleFilter = () => {
    const filtered = products.filter((product) => {
      const price = parseFloat(product.price);
      const min = minPrice ? parseFloat(minPrice) : -Infinity;
      const max = maxPrice ? parseFloat(maxPrice) : Infinity;
      return price >= min && price <= max;
    });
    setFilteredProducts(filtered);
  };
  

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      {/* Contenedor principal */}
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-6 space-y-6">

        {/* Título */}
        <h2 className="text-3xl font-semibold text-center text-gray-800">Buscar Productos</h2>

        {/* Barra de búsqueda */}
        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium text-gray-700">Buscar por nombre</label>
          <input
            type="text"
            placeholder="Escribe el nombre del producto..."
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
        </div>

        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>

        {/* Filtro por precio */}
        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium text-gray-700">Filtrar por precio</label>
          <div className="flex space-x-4">
            <input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>
        </div>

        {/* Filtro por categoría */}
        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium text-gray-700">Filtrar por categoría</label>
          <select
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          >
            <option value="">Seleccionar categoría</option>
            <option value="electronics">Electrónica</option>
            <option value="fashion">Moda</option>
            <option value="home">Hogar</option>
            <option value="sports">Deportes</option>
          </select>
        </div>

        {/* Botón de aplicar filtro */}
        <div className="flex justify-center">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300" onClick={handleFilter}>
            Aplicar Filtros
          </button>
        </div>
      </div>
      <div>
 

      {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product key={product.sku} {...product} />
          ))
        ) : (
          <p className="text-gray-700">No se encontraron productos.</p>
        )}

      
      </div>
    </div>
  )
}


