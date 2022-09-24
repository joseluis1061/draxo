import React from 'react';
import Layout from '../components/Layout';
import styled from '@emotion/styled';
import Card from '../components/Card';

const Page = styled.div`
  width: 100%;
  background-color: var(--backgrond-white);
  padding: 60px 0 60px 80px;
`
const ListaContainer = styled.div`
  width: 90%;  
  height: 100%;
  overflow-y: scroll;
`;
const ListaCasas = () => {
  return (
    <Layout>
      <Page>
        <ListaContainer>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </ListaContainer>
      </Page>
    </Layout>
  )
}

export default ListaCasas