import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Check } from 'lucide-react';

const ProductoCard = ({ producto, alAgregar }) => {
  const [agregado, setAgregado] = React.useState(false);

  const manejarClick = () => {
    setAgregado(true);
    alAgregar(); // Avisa al padre que sume uno al carrito
    setTimeout(() => setAgregado(false), 2000); // Vuelve al estado normal tras 2s
  };

  return (
    <div className="tarjeta-producto">
      <Link to="/proceso" className="imagen-link">
        <div className="imagen-box">
           {/* Si tuvieras una imagen real: <img src={producto.imagen} /> */}
           <div className="placeholder-img"></div>
        </div>
      </Link>
      
      <div className="info-contenedor">
        <h3 className="prod-titulo">{producto.nombre}</h3>
        <p className="prod-descripcion">{producto.descripcion}</p>
        
        <div className="prod-footer">
          <span className="prod-precio">$ {producto.precio.toLocaleString()}</span>
          <button 
            className={`btn-agregar ${agregado ? 'agregado' : ''}`} 
            onClick={manejarClick}
          >
            {agregado ? <Check size={14} /> : <Plus size={14} />}
            {agregado ? 'Listo' : 'Carrito'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductoCard;
