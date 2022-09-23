import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const AsideContainer = styled.aside`
  width: 360px;
  height: 100%;
  align-self: flex-start;
`

const Aside = () => {
  return (
    <AsideContainer className='Aside'>
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
    </AsideContainer>
  )
}

export default Aside