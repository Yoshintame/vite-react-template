import { render, screen } from "@testing-library/react";

import Home from "./home";

describe("Home", () => {
  it("renders env.VITE_APP_TITLE in home page", () => {
    render(<Home />);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
