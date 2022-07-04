import * as types from "./actionTypes";
const initialState = {
  data: {
    isAuth: false,
    token: "",
  },
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState,{ type, payload }) => {
  switch (type) {
    case types.LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }
    case types.LOGIN_SUCCESS: {
      return { ...state, isLoading: false, 
        data:{
          ...state.data,
          token: payload,
           isAuth: true 
           
        },
     
       
      };
    
    }
    case types.LOGIN_FAILURE: {

      return { ...state, isError: true,
        data:{
          ...state.data,
          token: payload,
           isAuth: false
        } };
    }
    // case LOGOUT: {
    //   return { ...state, isError: false, isAuth: false };
    // }
    default: {
      return state;
    }
  }
}

