import React from 'react';
import { Link } from 'react-router-dom';

const Aside = () => {
  return (
    <aside className='Aside'>
      <nav>
        <Link>
          <div className='nav-item'>
            <i className="fa-solid fa-location-pin"></i>
            <p>Ver Mapas</p>
          </div>
          <div className='nav-item'>
            <i className="fa-solid fa-layer-group"></i>
            <p>Lista de Casas</p>
          </div>
          <div className='nav-item'>
            <i className="fa-solid fa-list"></i>
            <p>Acerca De</p>
          </div>
        </Link>
      </nav>
    </aside>
  )
}

export default Aside