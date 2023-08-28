import {
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAILURE,
    ADMIN_LOGOUT_REQUEST,
    ADMIN_LOGOUT_SUCCESS,
  } from "./actionTypes";
  
  const initialState = {
    isLoading: false,
    isAdminAuth: false,
    isError: false,
  };
  
  const adminReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADMIN_LOGIN_REQUEST:
      case ADMIN_LOGOUT_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case ADMIN_LOGIN_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isAdminAuth: true,
          isError: false,
        };
      case ADMIN_LOGIN_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case ADMIN_LOGOUT_SUCCESS:
        return {
          ...state,
          isAdminAuth: false,
          isError: false,
        };
      default:
        return state;
    }
  };
  
  export default adminReducer;
  