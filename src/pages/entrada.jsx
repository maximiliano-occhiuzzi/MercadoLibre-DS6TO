import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, SlidersHorizontal, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import '../../src/Entrada.css';

const Entrada = () => {
  // Aumentamos a 8 para que se vea bien la grilla de 4 columnas
  const productos = [1, 2, 3, 4, 5, 6, 7, 8]; 

  return (
    <div className="container-principal">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">NET</div>
        <div className="menu-derecha">
          <Link to="/">HOME</Link>
          <Link to="/salida">CONTACT</Link>
          <Link to="/proceso">PRODUCTOS</Link>
          <div className="cart-container">
            <ShoppingCart className="icon-cart" />
            <span className="cart-badge">0</span>
          </div>
        </div>
      </nav>

      {/* HERO AZUL OSCURO */}
      <header className="hero-azul">
        <div className="contenedor-busqueda">
          <Search className="icon-search" size={20} color="#666" />
          <input type="text" placeholder="Buscar productos..." className="input-busqueda" />
        </div>
      </header>

      {/* CUERPO DE LA PÁGINA */}
      <main className="contenido">
        <aside className="sidebar-filtros">
          <SlidersHorizontal size={30} strokeWidth={1.5} />
        </aside>

        <section className="grilla-productos">
          {productos.map((item) => (
            <div key={item} className="tarjeta-producto">
              {/* Parte superior: Imagen (clicleable para ir a detalle) */}
              <Link to="/proceso" className="imagen-link">
                <div className="imagen-box">
                  <div className="placeholder-img"></div>
                </div>
              </Link>
              
              {/* Parte inferior: Info y Botón */}
              <div className="info-contenedor">
                <h3 className="prod-titulo">Producto {item}</h3>
                <p className="prod-descripcion">
                  Esta es una breve descripción del producto para completar el diseño del contenedor.
                </p>
                <div className="prod-footer">
                  <span className="prod-precio">$25.000</span>
                  <button className="btn-agregar" onClick={() => alert('Agregado!')}>
                    <Plus size={14} /> Carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* BOTONES DE PAGINACIÓN ABAJO */}
      <footer className="paginacion">
        <button className="btn-flecha"><ChevronLeft size={20} /></button>
        <button className="btn-flecha"><ChevronRight size={20} /></button>
      </footer>
    </div>
  );
};

export default Entrada;
