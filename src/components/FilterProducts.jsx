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

  const [appliedFilters, setAppliedFilters] = useState({
    name: "",
    minPrice: "",
    maxPrice: "",
    category: ""
  });

  const filteredProducts = products.filter((product) => {
    // Filtro por nombre
    const nameMatch = product.nameProduct.toLowerCase().includes(appliedFilters.name.toLowerCase());
    
    // Filtro por precio
    const minPrice = appliedFilters.minPrice ? Number(appliedFilters.minPrice) : 0;
    const maxPrice = appliedFilters.maxPrice ? Number(appliedFilters.maxPrice) : Infinity;
    const priceMatch = product.price >= minPrice && product.price <= maxPrice;
    
    // Filtro por categoría
    const categoryMatch = !appliedFilters.category || product.category === appliedFilters.category;
    
    return nameMatch && priceMatch && categoryMatch;
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleApplyFilters = () => {
    // Validar que el precio mínimo no sea mayor que el máximo
    if (filters.minPrice && filters.maxPrice && 
        Number(filters.minPrice) > Number(filters.maxPrice)) {
      alert("El precio mínimo no puede ser mayor que el precio máximo");
      return;
    }
    
    setAppliedFilters(filters);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Buscar
      </h1>
      <h2 className="text-xl font-bold text-center text-gray-800 mb-6">
        Productos
      </h2>

      <div className="space-y-6">
        {/* Búsqueda por nombre */}
        <div>
          <label className="block text-sm font-medium text-red-700 mb-2 text-center">
            Buscar por nombre
          </label>
          <input
            type="text"
            name="name"
            placeholder="Escribe el nombre del producto..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={filters.name}
            onChange={handleFilterChange}
          />
        </div>

        {/* Filtro por precio */}
        <div>
          <label className="block text-sm font-medium text-red-700 mb-2 text-center">
            Filtrar por precio
          </label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              name="minPrice"
              placeholder="Min"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={filters.minPrice}
              onChange={handleFilterChange}
              min="0"
            />
            <input
              type="number"
              name="maxPrice"
              placeholder="Max"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={filters.maxPrice}
              onChange={handleFilterChange}
              min="0"
            />
          </div>
        </div>

        {/* Filtro por categoría */}
        <div>
          <label className="block text-sm font-medium text-red-700 mb-2 text-center">
            Filtrar por categoría
          </label>
          <select
            name="category"
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
            value={filters.category}
            onChange={handleFilterChange}
          >
            <option value="">Seleccionar categoría</option>
            <option value="Deportes">Deportes</option>
            <option value="Moda">Moda</option>
            <option value="Electrónica">Electrónica</option>
            <option value="Hogar">Hogar</option>
          </select>
        </div>

        {/* Botón de aplicar filtros */}
        <div className="text-center">
          <button 
            className="w-full px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            onClick={handleApplyFilters}
          >
            Aplicar Filtros
          </button>
        </div>
      </div>

      {/* Lista de productos filtrados */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Product key={product.sku} {...product} />
        ))}
      </div>
    </div>
  );
}


