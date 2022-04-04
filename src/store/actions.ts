/*Types*/
import { Action, Station } from "../types";

/*Action constants*/
export const SET_LOADING_STATE = "SET_LOADING_STATE";
export const SET_STATIONS = "SET_STATIONS";
export const SET_SELECTED_STATION = "SET_SELECTED_STATION";

/*Action methods*/
export const setLoadingState = (payload: boolean): Action => ({
  type: SET_LOADING_STATE,
  payload,
});

export const setStations = (payload: Station[]): Action => ({
  type: SET_STATIONS,
  payload,
});

export const setSelectedStation = (payload: Station | null): Action => ({
  type: SET_SELECTED_STATION,
  payload,
});
