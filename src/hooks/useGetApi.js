import { useState, useEffect } from "react";
import axios from "axios";

const API ="https://modern-houses-api-production.herokuapp.com/api/v1/houses/California?city=San%20Francisco";
const useGetApi = () => {
  const [houses, setHouses] = useState([]);

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

  /*const HouseData = Object.entries(houses).map(([key, value]) => {
    //console.log(typeof(key));
    //console.log(value);
    console.log(value[0].number);
    console.log(value[0].name);
    console.log(value[0].building_start_date);
    console.log(value[0].building_end_date);
    console.log(value[0].address);
    console.log(value[0].city_latitude);
    console.log(value[0].city_longitude);
    console.log(value[0].url);
    console.log(value[0].description);
    const llave = key;
    const data = {
      llave:{
        'number':value[0].number,
        'name': value[0].name,
        'building_start_date': value[0].building_start_date,
        'building_end_date': value[0].building_end_date,
        'address': value[0].address,
        'city_latitude': value[0].city_latitude,
        'city_longitude': value[0].city_longitude,
        'url': value[0].url,
        'description': value[0].description
      } 
    }
    return data;
  });
  //console.log(typeof(houses));
  //console.log(houses.A);
  //const housesData = Object.entries(houses);
  //const housesData2 = Object.keys(houses);//.map((key)=>{
  //   return [Number(key), houses[key]];
  // })
  //console.log("**********DesdeHook*************");
  //console.log(houses.A[0]);
  //console.log(houses);
  //console.log(HouseData);
  //console.log(housesData)
  //console.log(housesData2);

  //No.{number}, {name} {building_start_date} - {building_end_date}
  //{address} 
  //{city_latitude} {city_longitude}
  //{url}
  //{description}

  //console.log("**********FIN DesdeHook*************");*/
  //console.log(houses);

  return houses;
};
export default useGetApi;
