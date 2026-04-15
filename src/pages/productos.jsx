// src/pages/Productos.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductoCard from '../components/ProductoCard';
import '../styles/Entrada.css'; 

const Productos = () => {
  const [carritoCount, setCarritoCount] = useState(0);

  // Datos de ejemplo (Luego podrías traerlos de una API o contexto)
  const todosLosProductos = [
    { id: 1, nombre: "Zapatilla Deportiva", precio: 125000, categoria: "Calzado" },
    { id: 2, nombre: "Remera Algodón", precio: 35000, categoria: "Ropa" },
    { id: 7, nombre: "Auriculares Bluetooth", precio: 55000, categoria: "Electrónica" },
    // ... más productos
  ];

  return (
    <div className="container-principal">
      {/* 1. Navbar reutilizable */}
      <Navbar carritoCount={carritoCount} />

      <main className="contenido">
        <header style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '32px', color: '#111845' }}>Nuestro Catálogo</h1>
          <p style={{ color: '#666' }}>Explorá todos nuestros productos disponibles</p>
        </header>

        {/* 2. Grilla de Productos reutilizando tus estilos */}
        <section className="grilla-productos">
          {todosLosProductos.map((prod) => (
            <ProductoCard 
              key={prod.id} 
              producto={prod} 
              alAgregar={() => setCarritoCount(carritoCount + 1)} 
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Productos;
