import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

/*Components*/
import StationListItem from "./StationListItem";

/*Types*/
import { Station } from "../../types";

afterEach(cleanup);

describe("Test the station list item", () => {
  const station: Station = {
    id: 1,
    name: "Putin FM",
    image: "./assets/images/stations/station_1.jpg",
    frequency: "66,6",
  };
  test("The station list item", async () => {
    render(<StationListItem station={station} />);
    const stationListItem = screen.getByTestId("station-list-item");
    const stationListItemDetails = await screen.findByTestId(
      "station-list-item-details"
    );
    expect(stationListItem).toBeInTheDocument();
    expect(stationListItemDetails).toBeInTheDocument();
  });
});
