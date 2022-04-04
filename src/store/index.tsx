import React, { createContext, useContext, useMemo, useReducer } from "react";

/*Types*/
import { Action, StationContextType, StationProviderProps } from "../types";

/*Reducer*/
import reducer from "./reducer";

/*Initial state along with the dispatch method*/
const contextInitialState: StationContextType = {
  state: {
    stations: [],
    loading: false,
    selectedStation: null,
  },
  dispatch: (action: Action) => {},
};

/*station context with state and dispatch*/
export const StationContext =
  createContext<StationContextType>(contextInitialState);

/*Custom hook for using the StationContext*/
export const useStationContext = () => useContext(StationContext);

/*Station Provider*/
const StationProvider = ({ children }: StationProviderProps) => {
  const [state, dispatch] = useReducer(reducer, contextInitialState.state);
  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <StationContext.Provider value={contextValue}>
      {children}
    </StationContext.Provider>
  );
};
export default StationProvider;
