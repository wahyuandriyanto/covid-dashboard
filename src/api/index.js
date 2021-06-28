import { covidIndo, covidIndoLoading, covidHarian, covidProv } from '../redux/action/action';
import {store} from '../redux/index';


const {dispatch} = store;

export const getDataCovidIndo = () => {
  fetch('/update.json')
    .then((res) => res.json())
    .then((json) => {
      dispatch(covidIndo(json.update.total));
      dispatch(covidIndoLoading(false));
      dispatch(covidHarian(json.update.harian));
      return json;
    });
};

export const getDataCovidProv = () => {
  fetch('/prov.json')
    .then((res) => res.json())
    .then((json) => {
      dispatch(covidProv(json.list_data));
      return json;
    });
};
