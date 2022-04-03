/*Single Station */
import React from "react";

export interface RadioStation {
  id: number;
  name: string;
  image: string;
  frequency: string;
}

/*Radio Station State*/
export interface RadioStationState {
  stations: RadioStation[];
  loading: boolean;
  selectedStation: RadioStation | null;
}

/*Action*/
export interface Action {
  type: string;
  payload?: any;
}

/*Radio Station Provider Props*/
export interface RadioStationProviderProps {
  children?: JSX.Element | JSX.Element[];
  reducer: (state: RadioStationState, action: Action) => RadioStationState;
}

/*Radio Station Context*/
export interface RadioStationContextType {
  state: RadioStationState;
  dispatch: React.Dispatch<Action>;
}
