/** @jest-environment jsdom */
import {
  fireEvent,
  render,
  screen,
  waitFor,
  queryByAttribute,
} from "../../test-utils";
import Card from ".";

describe("Card", () => {
  const itemData = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/1/1.jpg",
      "https://dummyjson.com/image/i/products/1/2.jpg",
      "https://dummyjson.com/image/i/products/1/3.jpg",
      "https://dummyjson.com/image/i/products/1/4.jpg",
      "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
    ],
  };
  const getById = queryByAttribute.bind(null, "id");

  it("should render the Card", () => {
    render(<Card addCartButton={jest.fn()} id={0} item={itemData} />);

    const cartTitle = screen.getByText(/iPhone 9/i);
    expect(cartTitle).toBeInTheDocument();
  });

  it("should render the Card and click add to cart", async () => {
    const dom = render(
      <Card addCartButton={jest.fn()} id={0} item={itemData} />
    );

    const cartTitle = screen.getAllByText(/Add to cart/i)[0];
    fireEvent.click(cartTitle);
    await waitFor(() => {
      const loaderSvg = getById(dom.container, "loader");
      expect(loaderSvg).not.toBeInTheDocument();
    });
  });
});
