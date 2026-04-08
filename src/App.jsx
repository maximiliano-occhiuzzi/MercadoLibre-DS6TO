import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/entrada.jsx'; 
import Proceso from './pages/Proceso.jsx';
import Salida from './pages/Salida.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/proceso" element={<Proceso />} />
        <Route path="/salida" element={<Salida />} />
      </Routes>
    </Router>
  );
}

export default App;
