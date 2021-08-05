import {
    LOGIN_FAIL,
    REGISTER,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN,
    LOGIN_SUCCESS,
    
  } from "../Types";
  import axios from "axios";
  
  export const register = (newUser) => async (dispatch) => {
    dispatch({
      type: REGISTER,
    });
    try {
      let res = await axios.post("/register/registerad", newUser);
      console.log(res);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data,
      });
    }
  };
  
  export const login = (user) => async (dispatch) => {
    dispatch({
      type: LOGIN,
    });
    try {
      let  res = await  axios.post("/login/login", user);
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data,
      });
    }
  };
  

  