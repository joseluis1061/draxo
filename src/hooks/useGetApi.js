import { useState, useEffect } from "react";
import axios from "axios";

const API ="https://modern-houses-api-production.herokuapp.com/api/v1/houses/California?city=San%20Francisco";
const useGetApi = () => {
  const [houses, setHouses] = useState([]);
  const [house, setHouse] = useState([]);

  useEffect(() => {
    const getHouses = async () => {
      const response = await axios(`${API}`);
      const data = response.data;
      const sortData = sortHouses(data);
      const housesData = Object.entries(sortData);

      setHouses(housesData);
    };
    getHouses();
  }, []);
  //Sort API Response
  const sortHouses = Houses => {
    return Object.keys(Houses).sort().reduce((newHouse, key)=> {
      newHouse[key] = Houses[key];
      return newHouse;
    },{});
  }
  //Seleccionar una sola casa
  const selectHouse = id =>{
    const onlyHouse = houses.filter(house=> house[1][0].id === id);
    setHouse(onlyHouse);    
  };
  
  return {
    houses,
    house,
    selectHouse
  };
};
export default useGetApi;
