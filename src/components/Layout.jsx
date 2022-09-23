import React from 'react';
import Header from './Header';
import Aside from './Aside';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  max-height: 100vh;
  display: grid;
  grid-template-areas: "Header Header"
                       "Aside  Page";
  grid-template-columns: 360px auto;
  grid-template-rows: 95px calc(100vh - 95px);
`

const Layout = ({children}) => {
  return (
    <Container>
      <Header/>
      <Aside/>
      {children}    
    </Container>
  )
}

export default Layout