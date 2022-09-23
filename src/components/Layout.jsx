import React from 'react';
import Header from './Header';
import Aside from './Aside';
import styled from '@emotion/styled';

const LayoutContainer = styled.div`
  width: 100%;
  max-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /*display: grid;
  grid-template-areas: "Header Header"
                       "Aside  Page"; 
  grid-template-columns: 360px auto;
  grid-template-rows: 95px calc(100vh - 95px);*/
`;
const MainContainer = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 360px auto;
  grid-template-rows: calc(100vh - 95px);
  background-color: pink;
`;

const Layout = ({children}) => {
  return (
    <LayoutContainer>
      <Header/>
      <MainContainer>
        <Aside/>
        {children}    
      </MainContainer>
    </LayoutContainer>
  )
}

export default Layout