import "./App.css";
import { FilterProducts } from "./components/FilterProducts";

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
    setMaxPrice(2000);
  };
  
  return (
    <>
     <></>
      <FilterProducts/>
    </>
  );
}

export default App;

