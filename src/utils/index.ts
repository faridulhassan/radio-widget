import { RadioStation } from "../types";

/*Stations api url*/
const stationsApiUrl = "./stations/stations.json";

/*Load stations*/
export const getStations = (): Promise<RadioStation[]> => {
  return fetch(stationsApiUrl)
    .then((stations) => stations.json())
    .catch((error) => error);
};
