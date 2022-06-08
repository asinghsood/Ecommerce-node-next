/** @jest-environment jsdom */
import { render, queryByAttribute } from "../../test-utils";
import {CartIcon, CheckoutIcon, DayIcon, NightIcon} from ".";

describe("Icon", () => {
    const getById = queryByAttribute.bind(null, 'id');
  it("should render the CartIcon", () => {
    const dom = render(<CartIcon />);

    const CartIconDom = getById(dom.container, 'CartIcon');
    expect(CartIconDom).toBeInTheDocument();
  });

  it("should render the CheckoutIcon", () => {
    const dom = render(<CheckoutIcon />);

    const CheckoutIconDom = getById(dom.container, 'CheckoutIcon');
    expect(CheckoutIconDom).toBeInTheDocument();
  });

  it("should render the DayIcon", () => {
    const dom = render(<DayIcon />);

    const DayIconDom = getById(dom.container, 'DayIcon');
    expect(DayIconDom).toBeInTheDocument();
  });

  it("should render the NightIcon", () => {
    const dom = render(<NightIcon />);

    const NightIconDom = getById(dom.container, 'NightIcon');
    expect(NightIconDom).toBeInTheDocument();
  });
});
