import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductoCard from '../components/ProductoCard';
import '../styles/Entrada.css';

const Entrada = () => {
  // 1. ESTADOS
  const [carritoCount, setCarritoCount] = useState(0);
  const [busqueda, setBusqueda] = useState("");
  const [catSeleccionada, setCatSeleccionada] = useState("Todas");
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(0);

  // 2. DATOS DEL CARRUSEL Y PRODUCTOS
  const banners = [
    { id: 1, color: "#111845", texto: "Ofertas de Verano", sub: "Hasta 50% OFF en calzado" },
    { id: 2, color: "#1a237e", texto: "Nueva Colección Tech", sub: "Lo último en gadgets y accesorios" },
    { id: 3, color: "#0d47a1", texto: "Envío Gratis", sub: "En compras mayores a $30.000" }
  ];

  const categorias = ["Todas", "Calzado", "Ropa", "Accesorios", "Electrónica"];

  const listaProductos = [
    { id: 1, nombre: "Zapatilla Deportiva", precio: 125000, categoria: "Calzado", descripcion: "Ideal para running y entrenamiento intenso." },
    { id: 2, nombre: "Remera Algodón", precio: 35000, categoria: "Ropa", descripcion: "Textura suave, 100% algodón premium." },
    { id: 3, nombre: "Gorra Urbana", precio: 22000, categoria: "Accesorios", descripcion: "Ajustable con visera curva de alta calidad." },
    { id: 4, nombre: "Reloj Digital", precio: 95000, categoria: "Electrónica", descripcion: "Resistente al agua con cronómetro." },
    { id: 5, nombre: "Buzo Oversize", precio: 75000, categoria: "Ropa", descripcion: "Tendencia urbana con frisa abrigada." },
    { id: 6, nombre: "Mochila Tech", precio: 85000, categoria: "Accesorios", descripcion: "Compartimento para notebook." },
  ];

  // 3. LÓGICA DEL CARRUSEL AUTOMÁTICO
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  // 4. FILTRADO
  const productosFiltrados = listaProductos.filter(prod => {
    const coincideBusqueda = prod.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = catSeleccionada === "Todas" || prod.categoria === catSeleccionada;
    return coincideBusqueda && coincideCategoria;
  });

  return (
    <div className="container-principal">
  <nav className="navbar">
  <div className="logo">NET</div>
  
  <div className="menu-derecha">
    <Link to="/">HOME</Link>
    <Link to="/productos">PRODUCTOS</Link>

    {/* Envolvemos el carrito en un Link hacia /proceso */}
    <Link to="/proceso" className="cart-container" style={{ textDecoration: 'none', color: 'inherit' }}>
      <ShoppingCart className="icon-cart" />
      {carritoCount > 0 && (
        <span className="cart-badge">{carritoCount}</span>
      )}
    </Link>
  </div>
</nav>

      {/* HERO CON CARRUSEL DINÁMICO */}
      <header className="hero-azul" style={{ backgroundColor: banners[currentBanner].color, transition: 'background-color 0.8s ease' }}>
        <div className="banner-info" style={{ textAlign: 'center', color: 'white', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '800' }}>{banners[currentBanner].texto}</h2>
          <p style={{ opacity: '0.8' }}>{banners[currentBanner].sub}</p>
        </div>

        {/* Indicadores del Carrusel */}
        <div className="indicadores" style={{ display: 'flex', gap: '8px', position: 'absolute', bottom: '45px' }}>
          {banners.map((_, index) => (
            <div 
              key={index}
              onClick={() => setCurrentBanner(index)}
              style={{
                width: '8px', height: '8px', borderRadius: '50%', cursor: 'pointer',
                backgroundColor: currentBanner === index ? 'white' : 'rgba(255,255,255,0.3)',
                transform: currentBanner === index ? 'scale(1.2)' : 'scale(1)',
                transition: '0.3s'
              }}
            />
          ))}
        </div>

        <div className="contenedor-busqueda">
          <Search size={20} color="#666" />
          <input 
            type="text" 
            placeholder="¿Qué estás buscando?" 
            className="input-busqueda"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </header>

      <main className="contenido">
        <aside className="tabla-categorias">
          <div className="cabecera-cat" onClick={() => setMenuAbierto(!menuAbierto)}>
            <h3 className="titulo-cat">{catSeleccionada}</h3>
            <ChevronRight className={`flecha-menu ${menuAbierto ? 'rotada' : ''}`} size={20} />
          </div>
          
          <ul className={`lista-cat ${menuAbierto ? 'visible' : 'oculta'}`}>
            {categorias.map(cat => (
              <li 
                key={cat} 
                className={`item-cat ${catSeleccionada === cat ? "active" : ""}`}
                onClick={() => {
                  setCatSeleccionada(cat);
                  setMenuAbierto(false);
                }}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>
    
        <section className="grilla-productos">
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((prod) => (
              <ProductoCard 
                key={prod.id} 
                producto={prod} 
                alAgregar={() => setCarritoCount(carritoCount + 1)} 
              />
            ))
          ) : (
            <p className="no-results">No se encontraron productos.</p>
          )}
        </section>
      </main>

      <footer className="paginacion">
        <button className="btn-flecha"><ChevronLeft size={20} /></button>
        <button className="btn-flecha"><ChevronRight size={20} /></button>
      </footer>
    </div>
  );
};

export default Entrada;
