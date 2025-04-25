import "./App.css";
import { FilterProducts } from "./components/FilterProducts";
import { products } from "./assets/products";
import { useState } from "react";

function App() {
  const[min, setMinPrice] = useState(0);
  const[max, setMaxPrice] = useState(1000);
  const [FilterProducts, setFilteredProducts] = useState(products);

  const handlePriceFilter = (min, max) => {
    const min =parseInt(minPrice);
    const max =parseInt(maxPrice);

    const filteredProducts = products.filter(
      (product) => product.price >= min && product.price <= max
    );
    setFilteredProducts(filteredProducts);
  };
  const handleReset = () => {
    setFilteredProducts(products);
    setMinPrice(0);
    setMaxPrice(3000);
  };
  
  return (
    <div className="container">
    <h1>Catálogo de Productos</h1>

     <div className="filter-section">
      <input
          type="number"
          placeholder="Precio mínimo"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}/>
            
        <input
          type="number"
          placeholder="Precio máximo"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
         <button onClick={handlePriceFilter}>Filtrar</button>
        <button onClick={handleReset}>Resetear filtros</button>
      </div>

      <FilterProducts products={filteredProducts} />
    </div>
  );
}

export default App;

