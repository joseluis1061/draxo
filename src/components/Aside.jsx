import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const AsideContainer = styled.aside`
  width: 360px;
  height: 100%;
  align-self: flex-start;
  background-color: var(--backgrond-black);
`;
const Navegacion = styled.nav`
  padding-left: 20px;
  padding-top: 95px;
`;
const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  background-color: red;
`;
const Icono = styled.i`
  color: #FFFFFF;
  background-color: #262626;
  font-size: 2.5rem;
  padding: 10px 10px;
  border-radius: 50% 50%;
`;
const Descipcion = styled.p`
  
`;

const Aside = () => {
  return (
    <AsideContainer className='Aside'>
      <Navegacion>
        <Link to="/">
          <NavItem className='nav-item'>
            <Icono className="fa-solid fa-location-pin"></Icono>
            <Descipcion>Ver Mapas</Descipcion>
          </NavItem>
        </Link>
        <Link to="/listas">
          <NavItem className='nav-item'>
            <Icono className="fa-solid fa-layer-group"></Icono>
            <Descipcion>Lista de Casas</Descipcion>
          </NavItem>
        </Link>
        <Link to="/acerca">
          <NavItem className='nav-item'>
            <Icono className="fa-solid fa-list"></Icono>
            <Descipcion>Acerca De</Descipcion>
          </NavItem>
        </Link>
      </Navegacion>
    </AsideContainer>
  )
}

export default Aside