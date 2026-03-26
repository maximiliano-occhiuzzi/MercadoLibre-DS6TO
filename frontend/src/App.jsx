import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/';
import Proceso from './pages/proceso';
import Salida from './pages/salida';

function App() {
  return (
    <Router>
      <nav style={{ padding: '20px', background: '#fff159' }}> {/* Color Mercado Libre */}
        <Link to="/Entrada" style={{ marginRight: '10px' }}>Inicio</Link>
        <Link to="/proceso" style={{ marginRight: '10px' }}>Carrito</Link>
        <Link to="/salida">Estado Final</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Entrada />} />
        <Route path="/proceso" element={<Proceso />} />
        <Route path="/salida" element={<Salida />} />
      </Routes>
    </Router>
  );
}

export default App;
