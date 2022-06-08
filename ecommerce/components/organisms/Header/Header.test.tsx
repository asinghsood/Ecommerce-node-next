/** @jest-environment jsdom */
import { render, screen } from "../../test-utils";
import Header from ".";

describe("Header", () => {
  it("should render the Button", () => {
    render(<Header />);

    const buttonText = screen.getByText(/Cartify/i);
    expect(buttonText).toBeInTheDocument();
  });
});
