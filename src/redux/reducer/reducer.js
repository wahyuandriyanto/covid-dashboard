const initialState = {
  covidIndo: {},
};

const dataCovid = (state = initialState, action) => {
  switch (action.type) {
    case "COVID_INDO":
      return {
        ...state,
        covidIndo: action.value,
      };
    default:
      return state;
  }
};
export default dataCovid;
