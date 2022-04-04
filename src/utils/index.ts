/*Types*/
import { Station } from "../types";

/*Stations api url*/
const stationsApiUrl = "./stations/stations.json";

/*Load stations from api*/
export const getStations = (): Promise<Station[]> => {
  return fetch(stationsApiUrl)
    .then((stations) => {
      return stations.json();
    })
    .catch((error) => error);
};
