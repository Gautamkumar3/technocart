import {
  GET_PARTNER_DATA_ERROR,
  GET_PARTNER_DATA_LOADING,
  GET_PARTNER_DATA_SUCCESS,
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
      return { ...state, loading: false, error: true, data: payload };
    default:
      return {
        ...state,
      };
  }
};
