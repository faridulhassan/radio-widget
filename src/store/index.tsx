import React, { createContext, useContext, useMemo, useReducer } from "react";

/*Types*/
import {
  Action,
  RadioStationContextType,
  RadioStationProviderProps,
} from "../types";

/*Reducer*/
import reducer from "./reducer";

/*Initial state along with the dispatch method*/
const contextInitialState: RadioStationContextType = {
  state: {
    stations: [],
    loading: false,
    selectedStation: null,
  },
  dispatch: (action: Action) => {},
};

/*Radio station context with state and dispatch*/
export const RadioStationContext =
  createContext<RadioStationContextType>(contextInitialState);

/*Custom hook for using the RadioStationContext*/
export const useRadioStationContext = () => useContext(RadioStationContext);

/*Radio Station Provider*/
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
