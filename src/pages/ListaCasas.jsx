import React from 'react';
import Layout from '../components/Layout';
import styled from '@emotion/styled';
import Card from '../components/Card';
import { useContext } from 'react';
import HousesContex from '../context/HousesContex';
import useGetApi from '../hooks/useGetApi';
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
  const houses = useGetApi();
  return (
    <Layout>
      <Page>
        <ListaContainer>
          {houses && houses.length>0?
            houses.map((house)=>{
              return <Card
                key={house[1][0].id}
                casa = {house[0]}
                data = {house[1][0]}
              />
            }):
            setTimeout(()=>{'Cargando'},2500)
            
          }
          <Card 
          
          />
        </ListaContainer>
      </Page>
    </Layout>
  )
}

export default ListaCasas