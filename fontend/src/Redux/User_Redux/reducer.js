import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  token: localStorage.getItem("token") || "",
  isAuth: false,
  username: "",
  email: "",
  isError: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        isAuth: true,
        username: action.payload.username,
        email: action.payload.email,
        isError: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      return {
        ...state,
        token: "",
        isAuth: false,
        username: "",
        email: "",
        isError: false,
      };
    default:
      return state;
  }
};

export default userReducer;
