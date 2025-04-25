import React from 'react'
import { Product } from './Product'
import { products } from '../assets/products.js'
import { useState } from 'react'

export const FilterProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-6 space-y-6">
        {/* Título */}
        <h2 className="text-3xl font-semibold text-center text-blue-900">Buscar Productos</h2>

        {/* Campo de búsqueda (deshabilitado) */}
        <div className="space-y-2">
          <h3 className="text-lg text-gray-700">Buscar por nombre</h3>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 cursor-not-allowed"
            placeholder="Escribe el nombre del producto..."
            disabled
          />
        </div>

        {/* Filtro por precio (deshabilitado) */}
        <div className="space-y-2">
          <h3 className="text-lg text-gray-700">Filtrar por precio</h3>
          <div className="flex gap-4">
            <input
              type="number"
              placeholder="Min"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 cursor-not-allowed"
              disabled
            />
            <input
              type="number"
              placeholder="Max"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 cursor-not-allowed"
              disabled
            />
          </div>
        </div>

        {/* Filtro por categoría (funcional) */}
        <div className="space-y-2">
          <h3 className="text-lg text-gray-700">Filtrar por categoría</h3>
          <select
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Seleccionar categoría</option>
            <option value="Deportes">Deportes</option>
            <option value="Moda">Moda</option>
            <option value="Electrónica">Electrónica</option>
            <option value="Hogar">Hogar</option>
          </select>
        </div>

        {/* Botón (deshabilitado) */}
        <button 
          className="w-full bg-gray-500 text-white py-2 px-4 rounded-lg cursor-not-allowed"
          disabled
        >
          Aplicar Filtros
        </button>
      </div>
      
      {/* Lista de productos filtrados */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {filteredProducts.map((product) => (
          <Product key={product.sku} {...product} />
        ))}
      </div>
    </div>
  )
}



