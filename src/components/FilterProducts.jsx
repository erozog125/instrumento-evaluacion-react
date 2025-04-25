import React, { useContext } from 'react';
import { Product } from './Product';
import { products } from '../assets/products.js';
import { NameContext } from './Context.jsx';

export const FilterProducts = () => {
  const { Name, SetName } = useContext(NameContext);

  // Filtrar productos por nombre
  const filteredProducts = products?.filter((product) =>
    product?.name?.toLowerCase().includes(Name.toLowerCase())
  ) || [];

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

        {/* Lista de productos filtrados */}
        <ul>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))
          ) : (
            <li className="text-gray-500">No se encontraron productos</li>
          )}
        </ul>

        {/* Filtro por precio */}
        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium text-gray-700">Filtrar por precio</label>
          <div className="flex space-x-4">
            <input
              type="number"
              placeholder="Min"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <input
              type="number"
              placeholder="Max"
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
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            Aplicar Filtros
          </button>
        </div>
      </div>

      {/* Mostrar todos los productos */}
      <div>
        {products.map((product) => (
          <Product key={product.sku} {...product} />
        ))}
      </div>
    </div>
  );
};