import React from "react";

/*Single Station */
export interface Station {
  id: number;
  name: string;
  image: string;
  frequency: string;
}

/*Station State*/
export interface StationState {
  stations: Station[];
  loading: boolean;
  selectedStation: Station | null;
}

/*Action*/
export interface Action {
  type: string;
  payload?: any;
}

/*Station Provider Props*/
export interface StationProviderProps {
  children?: JSX.Element | JSX.Element[];
  reducer: (state: StationState, action: Action) => StationState;
}

/*Station Context*/
export interface StationContextType {
  state: StationState;
  dispatch: React.Dispatch<Action>;
}

/*Station List Item Details Props*/
export interface StationListItemDetailsProps {
  station: Station;
  isOpened?: boolean;
}
