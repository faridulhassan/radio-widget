import React from "react";
import { WrapperContainer } from "./components/WrapperContainer/WrapperContainer";
import StationProvider from "./store";
import reducer from "./store/reducer";

function App() {
  return (
    <div className="App">
      <StationProvider reducer={reducer}>
        <WrapperContainer />
      </StationProvider>
    </div>
  );
}

export default App;
