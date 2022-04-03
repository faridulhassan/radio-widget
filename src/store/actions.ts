/*Types*/
import { RadioStation } from "../types";

/*Action constants*/
export const SET_LOADING_STATE = "SET_LOADING_STATE";
export const SET_STATIONS = "SET_STATIONS";
export const SET_SELECTED_STATION = "SET_SELECTED_STATION";

/*Action methods*/
export const setLoadingState = (payload: boolean) => ({
  type: SET_LOADING_STATE,
  payload,
});

export const setStations = (payload: RadioStation[]) => ({
  type: SET_STATIONS,
  payload,
});

export const setSelectedStation = (payload: RadioStation | null) => ({
  type: SET_SELECTED_STATION,
  payload,
});
