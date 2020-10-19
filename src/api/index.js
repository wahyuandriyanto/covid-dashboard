import { covidIndo, covidIndoLoading } from '../redux/action/action';
import {store} from '../redux/index';


const {dispatch} = store;

export const getDataCovidIndo = () => {
  let proxy = "https://cors-anywhere.herokuapp.com/";
  let api = "https://data.covid19.go.id/public/api/update.json";
  fetch(proxy + api)
    .then((res) => res.json())
    .then((json) => {
      dispatch(covidIndo(json.update.total));
      dispatch(covidIndoLoading(false))
      return json;
    });
};
