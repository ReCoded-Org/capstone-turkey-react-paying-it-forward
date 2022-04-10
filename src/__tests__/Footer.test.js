import { render, screen, fireEvent, wait } from "@testing-library/react";
import Footer from "../components/Footer";

describe("<Footer />", () => {
  test("subscription field", () => {
    render(<Footer />);

    const subElement = screen.getByTestId("subscription");
    expect(subElement).toBeInTheDocument();
    expect(subElement).toHaveAttribute("type", "email");
    const subElementButton = screen.getByTestId("subscriptionButton");
    expect(subElementButton).toBeInTheDocument();
  });
});

describe("Pass valid email to email input field", () => {
  test("subscription field", async () => {
    render(<Footer />);

    await wait(() => {
      fireEvent.click(screen.getByTestId("subscriptionButton"));
    });

    expect(screen.getByText("Required")).toBeInTheDocument();

    await wait(() => {
      fireEvent.change(screen.getByTestId("subscription"), {
        target: { value: "test@test" },
      });
      fireEvent.click(screen.getByTestId("subscriptionButton"));
    });

    expect(screen.getByText("Invalid email")).toBeInTheDocument();

    await wait(() => {
      fireEvent.change(screen.getByTestId("subscription"), {
        target: { value: "test@test.tr" },
      });
      fireEvent.click(screen.getByTestId("subscriptionButton"));
    });

    expect(() => screen.getByText("Invalid email")).toThrow(
      "Unable to find an element"
    );
    expect(() => screen.getByText("Required")).toThrow(
      "Unable to find an element"
    );
  });
});
