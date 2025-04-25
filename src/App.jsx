import "./App.css";
import { FilterProducts } from "./components/FilterProducts";
import { PriceProvider } from "./components/Context/PriceContext";

function App() {
  
  return (
    <PriceProvider>
      <FilterProducts/>
    </PriceProvider>
  );
}

export default App;


