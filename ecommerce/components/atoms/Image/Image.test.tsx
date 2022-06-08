/** @jest-environment jsdom */
import { render } from "../../test-utils";
import Image from ".";

describe("Image", () => {
  it("should render the Image tag", () => {
    const { getByAltText } = render(
      <Image
        src="https://dummyjson.com/image/i/products/1/thumbnail.jpg"
        alt="test image"
        width="100"
        height="100"
      />
    );

    const image = getByAltText("test image") as HTMLImageElement;

    expect(image).toBeTruthy();
  });
});
