import axios from "axios";
import {
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAILURE,
  ADMIN_LOGOUT_REQUEST,
  ADMIN_LOGOUT_SUCCESS,
} from "./actionTypes";

export const loginAdmin = (adminData) => async (dispatch) => {
  dispatch({ type: ADMIN_LOGIN_REQUEST });
  try {
    const res = await axios.post(
      "https://studyverse-drgj.onrender.com/admin/login",
      adminData
    );
    const { username, email } = res.data;
    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: { username, email },
    });
    return res.data.msg;
  } catch (err) {
    dispatch({
      type: ADMIN_LOGIN_FAILURE,
      payload: err.response.data.msg,
    });
    return err.response.data.msg;
  }
};

export const logoutAdmin = () => async (dispatch) => {
  dispatch({ type: ADMIN_LOGOUT_REQUEST });
  try {
    await axios.post("https://studyverse-drgj.onrender.com/admin/logout");
    dispatch({ type: ADMIN_LOGOUT_SUCCESS });
  } catch (err) {
    throw err;
  }
};
