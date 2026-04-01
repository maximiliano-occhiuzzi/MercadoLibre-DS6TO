import React from 'react';

const Entrada = () => {
  return (
    <div className="entrada-container">
      <header>
        <h1>Bienvenido a MercadoLibre-DS6TO</h1>
      </header>
      
      <main>
        <section className="hero">
          <h2>Punto de Entrada</h2>
          <p>Esta es la página de inicio del sistema.</p>
        </section>

        <section className="acciones">
          {/* Aquí podrías agregar botones para navegar a 'proceso' o 'salida' */}
          <button onClick={() => console.log('Navegar a Proceso')}>
            Iniciar Proceso
          </button>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Proyecto DS6TO</p>
      </footer>
    </div>
  );
};

export default Entrada;

