/** @jest-environment jsdom */
import { render, queryByAttribute } from "../../test-utils";
import Loader from ".";

describe("Loader", () => {
    const getById = queryByAttribute.bind(null, 'id');
  it("should render the Button", () => {
    const dom = render(<Loader />);

    const CheckoutIconDom = getById(dom.container, 'loader');
    expect(CheckoutIconDom).toBeInTheDocument();
  });
});
