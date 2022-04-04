/*Types*/
import { Station } from "../types";

/*Stations api url*/
const stationsApiUrl = "./stations/stations.json";

/*Load stations from api*/
export const getStations = (): Promise<Station[]> => {
  return fetch(stationsApiUrl)
    .then((response) => {
      return response.json();
    })
    .catch((error) => error);
};
