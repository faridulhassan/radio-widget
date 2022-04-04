import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

/*Types*/
import { Station } from "../../types";

/*Components*/
import StationListItemDetails from "./StationListItemDetails";

afterEach(cleanup);

describe("Test the station list item details", () => {
  const station: Station = {
    id: 1,
    name: "Putin FM",
    image: "./assets/images/stations/station_1.jpg",
    frequency: "66,6",
  };
  test("Station list item details (closed mode)", () => {
    render(<StationListItemDetails station={station} isOpened={false} />);
    const stationListItemDetails = screen.getByTestId(
        "station-list-item-details"
      ),
      prevButton = screen.getByTitle("previous"),
      nextButton = screen.getByTitle("next");
    expect(stationListItemDetails.classList.contains("expanded")).toBe(false);
    expect(stationListItemDetails).toBeInTheDocument();
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });
  test("Station list item details (opened mode)", () => {
    render(<StationListItemDetails station={station} isOpened={true} />);
    const stationListItemDetails = screen.getByTestId(
        "station-list-item-details"
      ),
      prevButton = screen.getByTitle("previous"),
      nextButton = screen.getByTitle("next");
    expect(stationListItemDetails.classList.contains("expanded")).toBe(true);
    expect(stationListItemDetails).toBeInTheDocument();
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });
});
