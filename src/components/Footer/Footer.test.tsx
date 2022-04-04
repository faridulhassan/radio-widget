import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

/*Components*/
import Footer from "./Footer";

afterEach(cleanup);

describe("Test the footer", () => {
  test("The footer", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });
});
