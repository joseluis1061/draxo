import React from 'react';
import Layout from '../components/Layout';
import styled from '@emotion/styled';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import HousesContex from '../context/HousesContex';

const Page = styled.div`
  width: 100%;
  background-color: var(--backgrond-white);
  padding: 60px 0 60px 80px;
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
  width: 100%;  
  max-height: 400px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Imagen = styled.img`
  object-fit: cover;
  width: 100%;  
  height: 100%;
`;
const CardInfo = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;
const CardText = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 25px;
`;
const Parrafo = styled.p`
  margin: 0;  
`;
const ButtonVer = styled.span`
  margin-right: 15px;
  text-decoration: underline;
  color: var(--black);
  cursor: pointer;
`;
const AcercaDe = () => {
  const {house} = useContext(HousesContex);
  console.log('house');
  //console.log(house);
  console.log(house[0][0]);
  console.log(house[0][1][0].id);

  const {id, url, name, number, building_start_date, building_end_date, address} = house[0][1][0];

  return (
    <Layout>
      <Page>
        <CardHouse>
          <HouseId>{house[0][0]}</HouseId>
          <CardContainer>
            <Figura>
              <Imagen src={house[0][1][0]?.url} alt={`House ${house[0][1][0]?.name}`}/>
            </Figura>

            <CardInfo>
              <CardText>
                <Parrafo>No.{house[0][1][0]?.number}, , {house[0][1][0]?.name} {house[0][1][0]?.building_start_date} - {house[0][1][0]?.building_end_date}</Parrafo>
                <Parrafo>{house[0][1][0]?.address}</Parrafo>
              </CardText>

              <Link to="/">
                <ButtonVer
                
                >Mapa</ButtonVer>
              </Link>
            </CardInfo> 
          </CardContainer>
        </CardHouse>
      </Page>
    </Layout>
  )
}

export default AcercaDe