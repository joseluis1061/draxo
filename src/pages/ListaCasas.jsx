import React from 'react';
import Layout from '../components/Layout';
import styled from '@emotion/styled';
import ImageHouse from '../assets/image/draxoH1.jpg';

const Page = styled.div`
  width: 100%;
  background-color: var(--backgrond-white);
  padding: 60px 0 60px 80px;
`
const ListaContainer = styled.div`
  width: 90%;  
`;
const CardHouse = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: greenyellow;
`;
const HouseId = styled.h2`
  width: 100%;
  border-bottom: 1px solid var(--background-gray);
  margin-bottom: 20px;
  font-size: 1.8rem; 
`;
const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: red;
`;
const Figura = styled.figure`
  margin: 0;
  width: 30%;  
  background-color: gray;
`;
const Imagen = styled.img`
  display: block;
  width: 100%;  
`;
const CardInfo = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
`;
const Parrafo = styled.p`
  margin: 0;  
`;
const ButtonVer = styled.a`
  margin-right: 15px;
  text-decoration: underline;
`;
const ListaCasas = () => {
  return (
    <Layout>
      <Page>
        <ListaContainer>

          <CardHouse>
            <HouseId>A</HouseId>
            <CardContainer>
              <Figura>
                <Imagen src={ImageHouse} alt="House"/>
              </Figura>
              <CardInfo>
                <CardText>
                  <Parrafo>No.454, Aquino Dúplex 1937-1937</Parrafo>
                  <Parrafo>2430 Leavenworth Street, San Francisco, California, EEUU</Parrafo>
                </CardText>

                <ButtonVer>Ver</ButtonVer>
              </CardInfo>
            </CardContainer>

          </CardHouse>

          <CardHouse>
            <HouseId>A</HouseId>
            <CardContainer>
              <Figura>
                <Imagen src={ImageHouse} alt="House"/>
              </Figura>
              <CardInfo>
                <CardText>
                  <Parrafo>No.454, Aquino Dúplex 1937-1937</Parrafo>
                  <Parrafo>2430 Leavenworth Street, San Francisco, California, EEUU</Parrafo>
                </CardText>

                <ButtonVer>Ver</ButtonVer>
              </CardInfo>
            </CardContainer>

          </CardHouse>
        </ListaContainer>
      </Page>
    </Layout>
  )
}

export default ListaCasas