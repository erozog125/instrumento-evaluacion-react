import React, { useState } from 'react'
import { Product } from './Product'
import { products } from '../assets/products.js'

export const FilterProducts = () => {
  const [filters, setFilters] = useState({
    name: "",
    minPrice: "",
    maxPrice: "",
    category: ""
  });

  const filterByPriceRange = (product, minPrice, maxPrice) => {
    const min = Number(minPrice);
    const max = Number(maxPrice);

    // Validar rango de precios
    if (min && max && min > max) return false;

    return (
      (!minPrice || product.price >= min) &&
      (!maxPrice || product.price <= max)
    );
  };

  const filteredProducts = products.filter((product) => {
    // Filtrar por nombre
    const nameMatch = product.name && product.name.toLowerCase().includes(filters.name.toLowerCase());

    // Filtrar por rango de precios
    const priceMatch = filterByPriceRange(product, filters.minPrice, filters.maxPrice);

    // Filtrar por categoría
    const categoryMatch = !filters.category || product.category === filters.category;

    return nameMatch && priceMatch && categoryMatch;
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-6 space-y-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">Filtrar productos por rango de precios</h2>

        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium text-gray-700">Precio mínimo</label>
          <input
            type="number"
            name="minPrice"
            placeholder="Min"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            value={filters.minPrice}
            onChange={handleFilterChange}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium text-gray-700">Precio máximo</label>
          <input
            type="number"
            name="maxPrice"
            placeholder="Max"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            value={filters.maxPrice}
            onChange={handleFilterChange}
          />
        </div>

        <div className="flex justify-center">
          <button 
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={() => {
              console.log('Filtros aplicados:', filters);
            }}
          >
            Aplicar Filtros
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredProducts.map((product) => (
          <Product key={product.sku} {...product} />
        ))}
      </div>
    </div>
  )
}


