import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import '../styles/Proceso.css'; 

export default function Proceso() {
  // PRODUCTOS DE PRUEBA (Simulando lo que vendría del Context)
  const carritoPrueba = [
    { 
      id: 1, 
      nombre: "Zapatilla Deportiva Pro", 
      precio: 125000, 
      categoria: "Calzado",
      descripcion: "Ya está en tu carrito" 
    },
    { 
      id: 4, 
      nombre: "Reloj Digital Tech", 
      precio: 95000, 
      categoria: "Electrónica",
      descripcion: "Ya está en tu carrito" 
    }
  ];

  const totalPrecio = carritoPrueba.reduce((acc, prod) => acc + prod.precio, 0);

  return (
    <div className="proceso-container-claro">
      <Navbar />
      
      <main className="proceso-content">
        <nav className="breadcrumb">Home {'>'} Tu Carrito</nav>
        <h1 className="main-title">TU CARRITO DE COMPRAS</h1>
        
        <div className="cart-grid">
          {/* COLUMNA IZQUIERDA: PRODUCTOS */}
          <section className="items-section">
            {carritoPrueba.map((item) => (
              <div key={item.id} className="cart-item-card-clara">
                <div className="item-main-info">
                  {/* El cuadro gris de la imagen de Steam */}
                  <div className="item-img-placeholder">
                    <div className="img-simulada">NET</div>
                  </div>
                  <div className="item-texts">
                    <h3>{item.nombre}</h3>
                    <p className="item-status-green">Disponible para envío</p>
                    <span className="item-meta-gray">Para mi cuenta</span>
                  </div>
                </div>
                
                <div className="item-price-actions">
                  <span className="item-price-black">${item.precio.toLocaleString()}</span>
                  <button className="btn-remove-link">Eliminar</button>
                </div>
              </div>
            ))}
            <Link to="/productos" className="link-volver">← Continuar comprando</Link>
          </section>

          {/* COLUMNA DERECHA: RESUMEN (ESTILO STEAM) */}
          <aside className="summary-section">
            <div className="summary-box-clara">
              <div className="summary-row">
                <span>Total estimado</span>
                <span className="total-price">${totalPrecio.toLocaleString()}</span>
              </div>
              <p className="tax-disclaimer">
                Los impuestos sobre las ventas se calcularán durante el proceso de pago según corresponda.
              </p>
              <button className="btn-finalizar-azul">Continuar al pago</button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
