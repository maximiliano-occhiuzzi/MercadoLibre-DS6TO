import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importamos tus páginas
// Asegúrate de que los nombres de archivos sean exactos (minúsculas/mayúsculas)
import Inicio from './pages/Entrada.jsx'; 
import Proceso from './pages/proceso.jsx';
import Salida from './pages/salida.jsx';

function App() {
  return (
    <Router>
      <div className="main-container">
        {/* BARRA DE NAVEGACIÓN: Debe estar DENTRO del <Router> */}
        <nav style={{ padding: '20px', background: '#fff159', display: 'flex', gap: '15px' }}>
          <Link to="/" style={{ color: '#333', textDecoration: 'none', fontWeight: 'bold' }}>Inicio</Link>
          <Link to="/proceso" style={{ color: '#333', textDecoration: 'none' }}>Carrito</Link>
          <Link to="/salida" style={{ color: '#333', textDecoration: 'none' }}>Estado</Link>
        </nav>

        {/* LAS RUTAS: Aquí se decide qué componente mostrar */}
        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/proceso" element={<Proceso />} />
            <Route path="/salida" element={<Salida />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
