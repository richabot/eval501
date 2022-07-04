//Create ActionCreator functions here
// eslint-disable-next-line
import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import * as types from "./actionTypes";
export const getLoginAPI = (params) => (dispatch) => {
    dispatch({ type: types.LOGIN_FAILURE});
    return axios
      .post(`https://reqres.in/api/login`, params)
      .then((r) => dispatch({ type: types.LOGIN_SUCCESS, payload: r.data }))
      .catch((err) => dispatch({ type:types.LOGIN_FAILURE, payload: err }));
  };
  