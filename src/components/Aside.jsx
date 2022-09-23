import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Aside_Container = styled.aside`
  grid-area: Aside;
  background-color: red;
`

const Aside = () => {
  return (
    <Aside_Container className='Aside'>
      <nav>
        <Link to="/">
          <div className='nav-item'>
            <i className="fa-solid fa-location-pin"></i>
            <p>Ver Mapas</p>
          </div>
        </Link>
        <Link to="/listas">
          <div className='nav-item'>
            <i className="fa-solid fa-layer-group"></i>
            <p>Lista de Casas</p>
          </div>
        </Link>
        <Link to="/acerca">
          <div className='nav-item'>
            <i className="fa-solid fa-list"></i>
            <p>Acerca De</p>
          </div>
        </Link>
      </nav>
    </Aside_Container>
  )
}

export default Aside