import React from 'react';
import Layout from '../components/Layout';
import styled from '@emotion/styled';
import { useContext } from 'react';
import HousesContex from '../context/HousesContex';
import Maps from '../components/Maps';

const Page = styled.div`
  width: 100%;
  background-color: var(--backgrond-white);
  padding: 30px 30px 30px 60px;
  overflow-y: scroll;
`
const CardHouse = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`;
const HouseId = styled.h2`
  width: 100%;
  border-bottom: 1px solid var(--background-gray);
  margin-bottom: 20px;
  font-size: 1.8rem; 
`;
const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const Figura = styled.figure`
  margin: 0;
  max-height: 40vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Imagen = styled.img`
  object-fit: contain;
  width: 100%;  
`;
const CardInfo = styled.div`
  width: 100%;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 25px;
`;
const CardText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 25px;
  font-size: 2.2rem;
`;
const Parrafo = styled.p`
  margin: 0;  
  text-align: justify;
`;
const ButtonVer = styled.span`
  margin-right: 15px;
  text-decoration: underline;
  color: var(--black);
  cursor: pointer;
`;
const AcercaDe = () => {
  const {house} = useContext(HousesContex);
  //console.log(house); 38 y 11
  let lengthMessage = 0;
  let endIndex = 0;
  
  if(house.length > 0 && house[0][1][0].description){
    lengthMessage = house[0][1][0].description.length;    
    endIndex = lengthMessage - 11;
  }
 
  return (
    <Layout>
      <Page>
        {house.length >0?
          (
          <CardHouse>
            <HouseId>{house[0][0]}</HouseId>
            <CardContainer>
              <Figura>
                <Imagen src={house[0][1][0].url} alt={`House ${house[0][1][0].name}`}/>
              </Figura>
              <CardInfo>
                <CardText>
                  <Parrafo>No.{house[0][1][0].number}, , {house[0][1][0].name} {house[0][1][0].building_start_date} - {house[0][1][0].building_end_date}</Parrafo>
                  <Parrafo>{house[0][1][0].address}</Parrafo>
                  {
                    house[0][1][0].description?  
                    <Parrafo>{`${house[0][1][0].description?.slice(38, endIndex)}`}</Parrafo>                
                    : ''
                  }
                </CardText>
              </CardInfo> 
            </CardContainer>
            <Maps
              latitude={house[0][1][0]?.location.latitude}
              longitude={house[0][1][0]?.location.longitude}
            />
          </CardHouse>
          )
          :
          (<Parrafo>Sin datos seleccione una casa en la Lista de Casas</Parrafo>)
        }
      </Page>
    </Layout>
  )
}

export default AcercaDe;