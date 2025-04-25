import React from "react";
export const products = [
  {
    id: 1,
    name: "Camiseta Nike",
    price: 29.000,
    category: "fashion",
    sku: "nike123"
  },
  {
    id: 2,
    name: "Balon Adidas",
    price: 19.000,
    category: "sports",
    sku: "ball456"
  }
];

export const Product = (currentProduct) => {
  const { sku, nameProduct, category, price, description,products } = currentProduct;

  return (
    <div className="mt-2 max-w-sm mx-auto border border-solid rounded-lg p-4 bg-gray-50 shadow-lg text-blue-700">
      {/* Título del producto */}
      <h2 className="text-xl font-semibold mb-2 text-center">{nameProduct + {products}}</h2>


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
        Precio: <span className="font-normal">{price}</span>
      </p>

      {/* Descripción */}
      <p className="text-sm font-medium mb-1">
        Descripción: <span className="font-normal">{description}</span>
      </p>
    </div>
  );
};
