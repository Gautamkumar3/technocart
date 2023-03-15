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

const initData = {
  loading: false,
  error: false,
  data: [],
};

export const partnerReducer = (state = initData, { type, payload }) => {
  switch (type) {
    case GET_PARTNER_DATA_LOADING:
      return { ...state, loading: true, error: false, data: [] };
    case GET_PARTNER_DATA_ERROR:
      return { ...state, loading: false, error: true, data: [] };
    case GET_PARTNER_DATA_SUCCESS:
      return { ...state, loading: false, error: false, data: payload };
    case ADD_PARTNER_DATA_LOADING:
      return { ...state, loading: true, error: false };
    case ADD_PARTNER_DATA_ERROR:
      return { ...state, loading: false, error: true };
    case ADD_PARTNER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: [],
      };
    case DELETE_PARTNER_DATA_LOADING:
      return { ...state, loading: true, error: false };
    case DELETE_PARTNER_DATA_ERROR:
      return { ...state, loading: false, error: true };
    case DELETE_PARTNER_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: [],
      };
    }
    case UPDATE_PARTNER_DATA_LOADING:
      return { ...state, loading: true, error: false };
    case UPDATE_PARTNER_DATA_ERROR:
      return { ...state, loading: false, error: true };
    case UPDATE_PARTNER_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: [],
      };
    }
    default:
      return {
        ...state,
      };
  }
};
