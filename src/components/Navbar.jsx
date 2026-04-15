// src/components/Navbar.jsx
import React from 'react';
import '../styles/Navbar.css'; // Importamos el CSS específico

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MERCADOLIBRE-DS6</div>

      <div className="menu-derecha">
        <a href="#productos">Productos</a>
        <a href="#categorias">Categorías</a>
        <a href="#contacto">Contacto</a>
        
        <div className="cart-container">
          <span role="img" aria-label="carrito">🛒</span>
          {/* Aquí el badge podría ser dinámico luego */}
          <span className="cart-badge">3</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
