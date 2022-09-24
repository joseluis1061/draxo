import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import imagenLogo from '../assets/image/logo-draxo.png';

const ContainerHeader = styled.header`
  width: 100%;
  height: 95px;
  display: grid;
  grid-template-columns: minmax(max-content, 360px)  minmax(70%, max-content);
  grid-template-rows: 95px;
  align-items: center;
`;
const Logo = styled.figure`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
const Imagen = styled.img`
  width: 100%;
  max-width: 200px;
`;
const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 5.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
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