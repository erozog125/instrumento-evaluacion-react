import React from 'react'
import { Product } from './Product'
import { products } from '../assets/products.js'
import { useState, useContext } from 'react'
import { context } from './Context.jsx'

export const FilterProducts = () => {
  const [Name, SetName] = useState(""); 
  const {PriceMin, setPriceMin} = useContext(context);
  const {PriceMax, setPriceMax} = useContext(context);

  const filteredProductsByPrice = PriceMin && PriceMax ? products.filter((product) => { 
    return product.price >= PriceMin && product.price <= PriceMax;
  }) : products;

  
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
              value={PriceMin}
              onChange={(e) => setPriceMin(e.target.value)}
              placeholder="Min"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <input {...setPriceMax}
              type="number"
              value={PriceMax}
              onChange={(e) => setPriceMax(e.target.value)}
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
        <button onClick={() => console.log(filteredProductsByPrice)} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">            Aplicar Filtros
          </button>
        </div>
      </div>
      <div>
        {
          filteredProductsByPrice.map((product) => (
            <Product
              key={product.id}
              sku={product.sku}
              nameProduct={product.name}
              category={product.category}
              price={product.price}
              description={product.description}
            />
          ))
        }
      </div>
    </div>
  )
}


