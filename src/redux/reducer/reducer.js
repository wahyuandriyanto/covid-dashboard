const initialState = {
  covidIndo: {},
  loading: true,
  covidHarian: [],
  covidProv: []
};

const dataCovid = (state = initialState, action) => {
  switch (action.type) {
    case "COVID_INDO":
      return {
        ...state,
        covidIndo: action.value,
      };
    case "COVID_INDO_LOADING":
      return {
        ...state,
        loading: action.value,
      };
    case "COVID_HARIAN":
      return {
        ...state,
        covidHarian: action.value,
      }  
    case "COVID_PROV":
      return {
        ...state,
        covidProv: action.value,
      }
    default:
      return state;
  }
};
export default dataCovid;
