import React, { useState } from 'react';
import { Product } from './Product';
import { products } from '../assets/products.js';

export const FilterProducts = () => {
  const [Name, SetName] = useState(""); 
  const [Category, SetCategory] = useState("");

  // Filtrar productos válidos
  const validProducts = products.filter((product) => product.nameProduct && product.category);

  // Aplicar filtros
  const FilteredProducts = validProducts.filter((product) => {
    const matchesName = product.nameProduct.toLowerCase().includes(Name.toLowerCase());
    const matchesCategory = Category ? product.category === Category : true;
    return matchesName && matchesCategory;
  });

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
            onChange={(e) => SetName(e.target.value)}
          />
        </div>

        {/* Filtro por categoría */}
        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium text-gray-700">Filtrar por categoría</label>
          <select
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            value={Category}
            onChange={(e) => SetCategory(e.target.value)}
          >
            <option value="">Seleccionar categoría</option>
            <option value="Deportes">Deportes</option>
            <option value="Moda">Moda</option>
            <option value="Hogar">Hogar</option>
            <option value="Electrónica">Electrónica</option>
          </select>
        </div>

        {/* Lista de productos filtrados */}
        <div>
          {FilteredProducts.length > 0 ? (
            FilteredProducts.map((product) => (
              <Product key={product.sku} {...product} />
            ))
          ) : (
            <p className="text-gray-500">No se encontraron productos.</p>
          )}
        </div>
      </div>
    </div>
  );
};


