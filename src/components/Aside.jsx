import React from 'react';
import { Link } from 'react-router-dom';
import styled from "@emotion/styled/macro";
import { cx, css } from '@emotion/css'

const AsideContainer = styled.aside`
  width: 100%;
  /* max-width: 360px; */
  height: 100%;
  align-self: flex-start;
  background-color: var(--backgrond-black);
`;

const SpanIcon = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: var(--background-gray);  
  border-radius: 50% 50%;
`;

const Line = css`
  ::after{
      content: "";
      position: absolute;
      background-color: #262626;
      display: block;
      top:45px;
      left: 50%;
      height: 30px;
      margin-right: 15px;
      width: 4px;    
    }
`
const Icono = styled.i`
  color: #FFFFFF;
  background-color: #262626;
  font-size: 2rem;
  background-color: transparent;
`;
const Descipcion = styled.p`
  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 22px;
  display: flex;
  letter-spacing: 0.03em;
`;
const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  margin-bottom: 30px;  
  &:hover {
    ${SpanIcon}{
      background-color: var(--icons);
      transition: all 0.7s ease;
    }
    ${Descipcion}{
      color: var(--icons);
      transition: all 0.7s ease;
    }
  }
`;
const Navegacion = styled.nav`
  padding-left: 20px;
  padding-top: 95px;
`;
const Aside = () => {
  return (
    <AsideContainer className='Aside'>
      <Navegacion>
        <Link to="/">
          <NavItem className='nav-item'>
            <SpanIcon className={cx(Line)}>
              <Icono className="fa-solid fa-location-pin"></Icono>
            </SpanIcon>
            <Descipcion>Ver Mapas</Descipcion>
          </NavItem>
        </Link>
        <Link to="/listas">
          <NavItem className='nav-item'>
            <SpanIcon className={cx(Line)}>
              <Icono className="fa-solid fa-layer-group"></Icono>
            </SpanIcon>
           
            <Descipcion>Lista de Casas</Descipcion>
          </NavItem>
        </Link>
        <Link to="/acerca">
          <NavItem className='nav-item'>
            <SpanIcon>
              <Icono className="fa-solid fa-list"></Icono>
            </SpanIcon>
            <Descipcion>Acerca De</Descipcion>
          </NavItem>
        </Link>
      </Navegacion>
    </AsideContainer>
  )
}

export default Aside