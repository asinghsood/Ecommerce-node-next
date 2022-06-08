/** @jest-environment jsdom */
import { render, screen } from "../../test-utils";
import Typography from ".";

describe("Typography", () => {
  it("should render the Typography", () => {
    render(<Typography>Add to cart</Typography>);

    const buttonText = screen.getByText(/Add to cart/i);
    expect(buttonText).toBeInTheDocument();
  });
});
