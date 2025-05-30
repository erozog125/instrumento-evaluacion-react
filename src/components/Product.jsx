// Product.jsx
import React from "react";
// products.js
export const products = [
  {
    id: 1,
    name: "Camiseta Nike",
    price: 29000,
    category: "Moda",
    sku: "nike123",
    description: "Camiseta deportiva"
  },
  {
    id: 2,
    name: "Balon Adidas",
    price: 19000,
    category: "Deportes",
    sku: "ball456",
    description: "Balon oficial "
  }
];


export const Product = (currentProduct) => {
  const { sku, name, category, price, description } = currentProduct;

  return (
    <div className="mt-2 max-w-sm mx-auto border border-solid rounded-lg p-4 bg-gray-50 shadow-lg text-blue-700">
      {/* Título del producto */}
      <h2 className="text-xl font-semibold mb-2 text-center">{name}</h2>

      {/* SKU */}
      <p className="text-sm font-medium mb-1">
        SKU: <span className="font-normal">{sku}</span>
      </p>

      {/* Categoría */}
      <p className="text-sm font-medium mb-1">
        Categoría: <span className="font-normal">{category}</span>
      </p>

      {/* Precio */}
      <p className="text-sm font-medium mb-1">
        Precio: <span className="font-normal">${price}</span>
      </p>

      {/* Descripción */}
      <p className="text-sm font-medium mb-1">
        Descripción: <span className="font-normal">{description}</span>
      </p>
    </div>
  );
};
