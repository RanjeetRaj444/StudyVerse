import { BOOKS_GET_FAILD_ADMIN, BOOKS_GET_REQUEST_ADMIN, BOOKS_GET_SUCCESS_ADMIN } from "./actionTypes";
  
  const InitialState = {
    data: [],
    isLoading: false,
    isError: false,
  };
  
  export const reducer = (state = InitialState, { type, payload }) => {
    switch (type) {
      case BOOKS_GET_REQUEST_ADMIN:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case BOOKS_GET_SUCCESS_ADMIN:
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: payload,
        };
      case BOOKS_GET_FAILD_ADMIN:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        return state;
    }
  };
  