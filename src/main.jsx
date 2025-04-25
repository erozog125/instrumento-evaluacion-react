import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';
import { ContextProvider } from './components/Context.jsx'; 

createRoot(document.getElementById('root')).render(

    <ContextProvider> {/* Envuelve la aplicación con ContextProvider */}
      <App />
    </ContextProvider>

);