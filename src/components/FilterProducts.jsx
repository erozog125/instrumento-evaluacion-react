import React from 'react'
import { Product } from './Product'
import { products } from '../assets/products.js'
import { useState } from 'react'

export const FilterProducts = () => {
  const [Name, SetName] = useState(""); 
  
  const [selectedCategory, setSelectedCategory] = useState("");

  const [filteredProducts, setFilteredProducts] = useState(products);


  const applyFilters = () => {
    let filtered = [...products];
    
  
    if (selectedCategory) {
      filtered = filtered.filter(product => 
        product.category === selectedCategory
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
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Seleccionar categoría</option>
            <option value="Electrónica">Electrónica</option>
            <option value="Moda">Moda</option>
            <option value="Hogar">Hogar</option>
            <option value="Deportes">Deportes</option>
          </select>
        </div>

        {/* Botón de aplicar filtro */}
        <div className="flex justify-center">
          <button 
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={applyFilters}
          >
            Aplicar Filtros
          </button>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product key={product.sku} {...product} />
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-lg text-gray-600">No se encontraron productos en esta categoría.</p>
          </div>
        )}
      </div>
    </div>
  )
}

