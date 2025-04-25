import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FilterProvider } from './components/context/FilterContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <FilterProvider>
    <App />
  </FilterProvider>,
)


