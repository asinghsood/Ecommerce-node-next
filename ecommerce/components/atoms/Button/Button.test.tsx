/** @jest-environment jsdom */
import { render, screen } from "../../test-utils";
import Button from ".";

describe("Button", () => {
  const fn = jest.fn();
  it("should render the Button", () => {
    const addCartButton = fn(2);
    render(<Button onClick={() => addCartButton(2)}>Add to cart</Button>);

    const buttonText = screen.getByText(/Add to cart/i);
    expect(buttonText).toBeInTheDocument();
  });
});
