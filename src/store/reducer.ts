/*Types*/
import { Action, RadioStationState } from "../types";

/*Store/Context/Actions*/
import {
  SET_LOADING_STATE,
  SET_SELECTED_STATION,
  SET_STATIONS,
} from "./actions";

/*Main reducer*/
export default function reducer(state: RadioStationState, action: Action) {
  switch (action.type) {
    case SET_LOADING_STATE: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case SET_SELECTED_STATION: {
      return {
        ...state,
        selectedStation: action.payload,
      };
    }
    case SET_STATIONS: {
      return {
        ...state,
        stations: action.payload,
      };
    }

    default:
      return state;
  }
}
