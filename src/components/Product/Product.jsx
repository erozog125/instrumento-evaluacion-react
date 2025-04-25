import React from "react";

export const Product = ({ sku, nameProduct, category, price, description }) => {
  return (
    <div className="mt-2 max-w-sm mx-auto border border-solid rounded-lg p-4 bg-gray-50 shadow-lg text-blue-700">
      <h1 className="text-lg font-bold mb-2">{nameProduct}</h1>

      <p className="text-sm font-medium mb-1">
        SKU: <span className="font-normal">{sku}</span>
      </p>

      <p className="text-sm font-medium mb-1">
        Categoría: <span className="font-normal">{category}</span>
      </p>

      <p className="text-sm font-medium mb-1">
        Precio: <span className="font-normal">{price}</span>
      </p>

      <p className="text-sm font-medium mb-1">
        Descripción: <span className="font-normal">{description}</span>
      </p>
    </div>
  );
};
