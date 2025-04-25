import React, { useState } from 'react'
import { Product } from './Product'
import { products } from '../assets/products.js'

export const FilterProducts = () => {
  const [Name, SetName] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name?.toLowerCase().includes(Name.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      {/* Contenedor principal */}
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-6 space-y-6">

        {/* Título */}
        <h2 className="text-3xl font-semibold text-center text-gray-800">Buscar Productos</h2>

        {/* Barra de búsqueda */}

        {/* <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium text-gray-700">Buscar por nombre</label>
          <input
            type="text"
            placeholder="Escribe el nombre del producto..."
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            onChange={(e) => SetName(e.target.value)}
          />
        </div> */}
        {/* Barra de búsqueda */}

        <div className="flex flex-col space-y-2 relative">
          <label className="text-lg font-medium text-gray-700">Buscar por nombre</label>
          <input
            type="text"
            placeholder="Escribe el nombre del producto..."
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            value={Name}
            onChange={(e) => SetName(e.target.value)}
          />

          {Name && (
            <ul className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-lg shadow z-10 max-h-40 overflow-y-auto">
              {filteredProducts.slice(0, 5).map((product) => (
                <li
                  key={product.id}
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                  onClick={() => SetName(product.name)}
                >
                  {product.name}
                </li>
              ))}
              {filteredProducts.length === 0 && (
                <li className="px-4 py-2 text-gray-500">No hay coincidencias</li>
              )}
            </ul>
          )}
        </div>


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

      {/* Lista de productos filtrados */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Product key={product.sku} {...product} />
        ))}
      </div>
    </div>
  )
}
