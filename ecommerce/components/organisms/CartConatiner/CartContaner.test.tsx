/** @jest-environment jsdom */
import { render, screen, waitFor, act } from "../../test-utils";
import CartConatiner from ".";

const cartMockResponse = [
  {
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    brand: "OPPO",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/4/1.jpg",
      "https://dummyjson.com/image/i/products/4/2.jpg",
      "https://dummyjson.com/image/i/products/4/3.jpg",
      "https://dummyjson.com/image/i/products/4/4.jpg",
      "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
    ],
  },
];

describe("Cart page no items", () => {
  it("should render the Cart with no items", async () => {
    render(<CartConatiner />);
    const cartTitle = screen.getByText(/No Items added to Cart/i);
    expect(cartTitle).toBeInTheDocument();
  });
});

describe("Cart page", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(cartMockResponse),
    })
  );

  it("should render the Cart with items in cart", async () => {
    act(() => {
      render(<CartConatiner />);
    });

    await waitFor(() => {
      const cartTitle = screen.getByText(/OPPOF19/i);
      expect(cartTitle).toBeInTheDocument();
    });
  });
});
