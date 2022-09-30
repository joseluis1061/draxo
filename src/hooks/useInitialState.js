import React from 'react';
import { useState } from "react";

const initialState = {
  houses:[],
  house:[]
};


const useInitialState = () => {
  const [state, setState] = useState({initialState});
  //Funcion mostrar una sola vivienda
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