import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const Figura = styled.figure`
  margin: 0;
  width: 30%;  
  max-height: 250px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Imagen = styled.img`
  width: 100%;  
  object-fit: cover;
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

const Card = ({casa,data}) => {
  return (
    <>
      <CardHouse>
        <HouseId>{casa}</HouseId>
        <CardContainer>
          <Figura>
            <Imagen src={data?.url} alt={`House ${data?.name}`}/>
          </Figura>

          <CardInfo>
            <CardText>
              <Parrafo>No.{data?.number}, , {data?.name} {data?.building_start_date} - {data?.building_end_date}</Parrafo>
              <Parrafo>{data?.address}</Parrafo>
            </CardText>

            <Link to="/acerca">
              <ButtonVer>Ver</ButtonVer>
            </Link>
          </CardInfo>
        </CardContainer>
      </CardHouse>
    </>
  )
}

export default Card;