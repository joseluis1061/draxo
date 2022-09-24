import React from 'react';
import Layout from '../components/Layout';
import styled from '@emotion/styled';

const Page = styled.div`
  width: 100%;
  background-color: greenyellow;
`

const VerMapa = () => {
  return (
    <div>
      <Layout>
        <Page>Ver Mapa</Page>
      </Layout>
    </div>
  )
}

export default VerMapa