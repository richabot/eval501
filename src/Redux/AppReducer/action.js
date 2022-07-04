//Create ActionCreator functions here

import axios from "axios";
import { GET_SHOES_DATA_FAILURE, GET_SHOES_DATA_REQUEST, GET_SHOES_DATA_SUCCESS } from "./actionTypes";


export const getshoes = (params) => (dispatch) => {
    dispatch({ type: GET_SHOES_DATA_REQUEST });
    axios
      .get(`http://localhost:8080/shoes`, params)
      .then((r) => dispatch({ type: GET_SHOES_DATA_SUCCESS, payload: r.data }))
      
      .catch((err) => dispatch({ type: GET_SHOES_DATA_FAILURE, payload: err }));
  };
  