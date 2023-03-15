import axios from "axios";
import {
  GET_PARTNER_DATA_ERROR,
  GET_PARTNER_DATA_LOADING,
  GET_PARTNER_DATA_SUCCESS,
} from "./partner.type";

const api = "http://localhost:8080";

export const getPartnerData = (id) => async (dispatch) => {
  dispatch({ type: GET_PARTNER_DATA_LOADING });
  try {
    const res = await axios.get(`${api}/partner`);
    dispatch({ type: GET_PARTNER_DATA_SUCCESS, payload: res.data });
    return res;
  } catch (er) {
    dispatch({ type: GET_PARTNER_DATA_ERROR, payload: er });
  }
};
