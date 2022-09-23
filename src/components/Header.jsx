import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import imagenLogo from '../assets/image/logo-draxo.png';

const ContainerHeader = styled.header`
  width: 100%;
  height: 95px;
  display: grid;
  grid-template-columns: 360px auto;
  grid-template-rows: 95px;
  align-items: center;
`;
const Logo = styled.figure`
  width: 360px;
  height: 100%;
  margin: 0;
`;
const Imagen = styled.img`
  position: absolute;
  width: 200px;
  height: 68px;
  left: 68px;
  top: 13px;
`;
const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 5.5rem;
`;
const Title = styled.h1`
  color: var(--black);
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.02rem;
  text-align: left;
`;
const Subtitle = styled.h3`
  color: var(--secondary-color);
  font-size: 1.6rem;
  font-style: italic;
  font-weight: 300;
  line-height: 22px;
  letter-spacing: 0.03rem;
  text-align: left;
`;

const Header = () => {
  return (
    
  <ContainerHeader>    
    <Logo>
      <Link to="/">
        <Imagen src={imagenLogo} alt="Logo Draxo"/>
      </Link>
    </Logo>
    <TitleContainer>
      <Title>Lista de Casas</Title>
      <Subtitle>Lista de casas en San Francisco</Subtitle>
    </TitleContainer>
  </ContainerHeader>
    
  )
}

export default Header