import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders text input and button", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Please enter number string/);
  const btn = screen.getByRole("button", { name: /calculate/i });
  expect(input).toBeInTheDocument();
  expect(btn).toBeInTheDocument();
});
