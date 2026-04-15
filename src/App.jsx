import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/entrada.jsx'; 
import Productos from './pages/productos.jsx'; // 1. Cambiamos el nombre para evitar el error
import Proceso from './pages/Proceso.jsx';
import Salida from './pages/Salida.jsx';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router> {/* 2. Usamos el nombre 'Router' que importaste arriba */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} /> 
          <Route path="/proceso" element={<Proceso />} />
          <Route path="/salida" element={<Salida />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
