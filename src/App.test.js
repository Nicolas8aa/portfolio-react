import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Me navbar item", () => {
  render(<App />);
  const linkElement = screen.getByText(/Me/);
  expect(linkElement).toBeInTheDocument();
});
