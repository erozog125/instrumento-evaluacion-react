import React from "react";

export const Product = ({ sku, nameProduct, category, price, description }) => {
  return (
    <div className="product-container">
      <h1>{nameProduct}</h1>
      <p>
        SKU: <span>{sku}</span>
      </p>
      <p>
        Categoría: <span>{category}</span>
      </p>
      <p>
        Precio: <span>{price}</span>
      </p>
      <p>
        Descripción: <span>{description}</span>
      </p>
    </div>
  );
};