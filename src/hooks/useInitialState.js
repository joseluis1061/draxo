import React from 'react';
import { useState } from "react";
import useGetApi from "./useGetApi"

const initialState = {
  houses:useGetApi.house
};


const useInitialState = () => {
  const [state, setState] = useState({initialState});
  //Select only house
  const selectHouse = (payload)=>{
    setState({
      ...state,
      cart:[...state.house, payload]
    })
  }
  return {
    state, 
    selectHouse
  }
}

export default useInitialState