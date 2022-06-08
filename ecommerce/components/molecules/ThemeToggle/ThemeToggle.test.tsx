/** @jest-environment jsdom */
import { render, queryByAttribute, fireEvent } from "../../test-utils";
import ThemeToggle from ".";

describe("ThemeToggle", () => {
  const fn = jest.fn();
  const getById = queryByAttribute.bind(null, "id");
  it("should render the ThemeToggle", () => {
    const toggleTheme = fn();
    const dom = render(<ThemeToggle toggleTheme={toggleTheme} />);

    const DayIconDom = getById(dom.container, "DayIcon");
    expect(DayIconDom).toBeInTheDocument();
  });

  it("should toggle input checkbox", async () => {
    const toggleTheme = fn();
    const dom = render(<ThemeToggle toggleTheme={toggleTheme} />);

    const toggleCheckbox = getById(
      dom.container,
      "checkbox"
    ) as HTMLInputElement;
    fireEvent.change(toggleCheckbox, {
      target: { checked: true },
    });
    dom.rerender(<ThemeToggle toggleTheme={toggleTheme} />)
  });
});
