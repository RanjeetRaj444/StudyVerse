import axios from "axios";

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

export const registerUser = (userData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const res = await axios.post("http://localhost:8080/user/register", userData);
    dispatch({ type: REGISTER_SUCCESS });
    return res.data;
  } catch (err) {
    dispatch({ type: REGISTER_FAILURE, payload: err.message });
    return err.response.data.msg; 
  }
};

export const loginUser = (userData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const res = await axios.post("http://localhost:8080/user/login", userData);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    return res.data.msg;
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE, payload: err.response.data.msg });
    return err.response.data.msg; 
  }
};

export const logoutUser = (token) => async (dispatch) => {
  dispatch({ type: LOGOUT_REQUEST });
  try {
    await axios.post("http://localhost:8080/user/logout", null, {
      headers: {
        Authorization: token,
      },
    });
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (err) {
    throw err;
  }
};
