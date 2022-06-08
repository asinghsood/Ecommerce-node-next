/** @jest-environment jsdom */
import { render, screen } from "../../test-utils";
import Notification from ".";

describe("Notification", () => {
  const testList = [
    {
      id: 1,
      title: "Success",
      description: "Iteam is added",
      backgroundColor: "#5cb85c",
    },
  ];

  it("should render the Notification", () => {
    render(<Notification toastList={testList} />);

    const NotificationText = screen.getByText(/Success/i);
    expect(NotificationText).toBeInTheDocument();
  });
});
