import React from "react";
import { Product } from "./components/Product/Product.jsx";

export default function App() {
  return (
    <div>
      <Product
        sku="DEP001"
        nameProduct="Bicicleta de montaña"
        category="Deportes"
        price="1200000"
        description="Bicicleta ideal para senderismo y rutas difíciles."
      />

      <Product
        sku="DEP002"
        nameProduct="Balón de fútbol"
        category="Deportes"
        price="150000"
        description="Balón de fútbol de alta calidad para entrenamientos y partidos."
      />

      <Product
        sku="DEP003"
        nameProduct="Raqueta de tenis"
        category="Deportes"
        price="250000"
        description="Raqueta profesional para jugadores de nivel avanzado."
      />
    </div>
  );
}
