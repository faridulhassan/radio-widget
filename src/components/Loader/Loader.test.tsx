import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

/*Components*/
import Loader from "./Loader";

afterEach(cleanup);

describe("Test the loader", () => {
  test("The loader", () => {
    render(<Loader />);
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });
});
