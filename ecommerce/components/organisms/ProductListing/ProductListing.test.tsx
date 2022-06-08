/** @jest-environment jsdom */
import { fireEvent, render, screen, act, waitFor } from "../../test-utils";
import ProductListing from ".";

const productMockData = {
  products: [
    {
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
    },
  ],
  totalProductSize: 1024,
  pageSize: 100,
  totalCartItem: 1,
};

const addToCartData = {
  totalCartItem: 2,
  item: {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/2/1.jpg",
      "https://dummyjson.com/image/i/products/2/2.jpg",
      "https://dummyjson.com/image/i/products/2/3.jpg",
      "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
    ],
  },
};

describe("ProductListing", () => {
  it("should render the ProductListing", () => {
    render(<ProductListing />);

    const buttonText = screen.getByText(/No Items/i);
    expect(buttonText).toBeInTheDocument();
  });

  it("should render the ProductListing paginate", () => {
    render(<ProductListing />);

    const buttonText = screen.getAllByText(/2/i)[0];
    fireEvent.click(buttonText);
    expect(buttonText).toBeInTheDocument();
  });
  it("should render the ProductListing paginate", () => {
    render(<ProductListing />);

    const next = screen.queryAllByTestId("next")[0];
    fireEvent.click(next);
    expect(next).toBeInTheDocument();

    const previous = screen.queryAllByTestId("previous")[0];
    fireEvent.click(previous);
    expect(previous).toBeInTheDocument();
  });
  it("should render the ProductListing paginate from bottom", () => {
    render(<ProductListing />);

    const next = screen.queryAllByTestId("next")[1];
    fireEvent.click(next);
    expect(next).toBeInTheDocument();

    const previous = screen.queryAllByTestId("previous")[1];
    fireEvent.click(previous);
    expect(previous).toBeInTheDocument();
  });
});

describe("ProductListing", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(productMockData),
    })
  );

  it("should render the ProductListing with data", async () => {
    act(() => {
      render(<ProductListing />);
    });
    await waitFor(() => {
      const buttonText = screen.getByText(/iPhone 9/i);
      expect(buttonText).toBeInTheDocument();
    });

    const buttonEle = screen.getByText(/Add to cart/i);
    fireEvent.click(buttonEle);
  });
});