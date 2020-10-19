const initialState = {
  covidIndo: {},
  loading: true,
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
    default:
      return state;
  }
};
export default dataCovid;
