import axios from "axios";
import {
  ADD_PARTNER_DATA_ERROR,
  ADD_PARTNER_DATA_LOADING,
  ADD_PARTNER_DATA_SUCCESS,
  DELETE_PARTNER_DATA_ERROR,
  DELETE_PARTNER_DATA_LOADING,
  DELETE_PARTNER_DATA_SUCCESS,
  GET_PARTNER_DATA_ERROR,
  GET_PARTNER_DATA_LOADING,
  GET_PARTNER_DATA_SUCCESS,
  UPDATE_PARTNER_DATA_ERROR,
  UPDATE_PARTNER_DATA_LOADING,
  UPDATE_PARTNER_DATA_SUCCESS,
} from "./partner.type";

// const api = "http://localhost:8080";
const api = "https://technocart-api-production.up.railway.app";
const token = JSON.parse(localStorage.getItem("token"));

export const getPartnerData =
  (page = 1, limit = 10) =>
  async (dispatch) => {
    dispatch({ type: GET_PARTNER_DATA_LOADING });
    try {
      const res = await axios.get(`${api}/partner?page=${page}&limit=${limit}`);
      dispatch({
        type: GET_PARTNER_DATA_SUCCESS,
        payload: { data: res.data.data, length: res.data.length },
      });

      return res;
    } catch (er) {
      return dispatch({ type: GET_PARTNER_DATA_ERROR, payload: er });
    }
  };

export const addPartnerToDatabase = (data) => async (dispatch) => {
  dispatch({ type: ADD_PARTNER_DATA_LOADING });
  try {
    const res = await axios.post(`${api}/partner`, data, {
      headers: { token: token },
    });
    dispatch({ type: ADD_PARTNER_DATA_SUCCESS, payload: res.data.data });
    return res.data;
  } catch (er) {
    dispatch({ type: ADD_PARTNER_DATA_ERROR, payload: er });
    return er;
  }
};

export const deletePartnerToDatabase = (id) => async (dispatch) => {
  dispatch({ type: DELETE_PARTNER_DATA_LOADING });
  try {
    const res = await axios.delete(`${api}/partner/${id}`, {
      headers: { token: token },
    });
    dispatch({ type: DELETE_PARTNER_DATA_SUCCESS, payload: res.data.data });
    return res.data;
  } catch (er) {
    dispatch({ type: DELETE_PARTNER_DATA_ERROR, payload: er });
    return er;
  }
};

export const updatePartnerToDatabase = (id, data) => async (dispatch) => {
  console.log(id, data);
  dispatch({ type: UPDATE_PARTNER_DATA_LOADING });
  try {
    const res = await axios.patch(`${api}/partner/${id}`, data, {
      headers: { token: token },
    });
    dispatch({ type: UPDATE_PARTNER_DATA_SUCCESS, payload: res.data.data });
    return res.data;
  } catch (er) {
    dispatch({ type: UPDATE_PARTNER_DATA_ERROR, payload: er });
    return er;
  }
};
