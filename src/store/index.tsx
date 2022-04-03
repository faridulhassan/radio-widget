import React, { createContext, useContext, useMemo, useReducer } from "react";
import {
  Action,
  RadioStationContextType,
  RadioStationProviderProps,
} from "../types";
import reducer from "./reducer";

const contextInitialState: RadioStationContextType = {
  state: {
    stations: [],
    loading: false,
    selectedStation: null,
  },
  dispatch: (action: Action) => {},
};
export const RadioStationContext =
  createContext<RadioStationContextType>(contextInitialState);

export const useRadioStationContext = () => useContext(RadioStationContext);

const RadioStationProvider = ({ children }: RadioStationProviderProps) => {
  const [state, dispatch] = useReducer(reducer, contextInitialState.state);
  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <RadioStationContext.Provider value={contextValue}>
      {children}
    </RadioStationContext.Provider>
  );
};
export default RadioStationProvider;
