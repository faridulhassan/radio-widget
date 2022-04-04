import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

/*Components*/
import StationList from "./StationList";
import Loader from "../Loader/Loader";

afterEach(cleanup);

describe("Test the station list", () => {
  test("The station list", () => {
    render(<StationList />);
    const stationListWrapper = screen.getByTestId("station-list-wrapper");
    expect(stationListWrapper).toBeInTheDocument();
  });

  test("The loader", () => {
    render(<Loader />);
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });
});
