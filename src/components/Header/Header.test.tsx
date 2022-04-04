import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

/*Components*/
import Header from "./Header";

afterEach(cleanup);

describe("Test the header", () => {
  test("The header", () => {
    render(<Header />);

    const header = screen.getByRole("navigation"),
      backButton = screen.getByTitle("Back"),
      stopButton = screen.getByTitle("Stop"),
      title = screen.getByText("Stations");

    expect(header).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
    expect(stopButton).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
