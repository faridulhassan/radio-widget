import React from "react";
import { WrapperContainer } from "./components/WrapperContainer/WrapperContainer";
import RadioStationProvider from "./store";
import reducer from "./store/reducer";

function App() {
  return (
    <div className="App">
      <RadioStationProvider reducer={reducer}>
        <WrapperContainer />
      </RadioStationProvider>
    </div>
  );
}

export default App;
