import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders text input and button", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Please enter number string/);
  const btn = screen.getByRole("button", { name: /calculate/i });
  expect(input).toBeInTheDocument();
  expect(btn).toBeInTheDocument();
});

test("should show result as 4 for 1,3 input", async () => {
  render(<App />);
  const btn = screen.getByRole("button", { name: /calculate/i });
  const input = screen.getByPlaceholderText(/Please enter number string/);
  await userEvent.type(input, "1,3");
  await userEvent.click(btn);

  const result = await screen.findByText(/Result: 4/i);
  expect(result).toBeInTheDocument();
});

test("should show result as 6 for 1\\n2,3 input", async () => {
  render(<App />);
  const btn = screen.getByRole("button", { name: /calculate/i });
  const input = screen.getByPlaceholderText(/Please enter number string/);
  await userEvent.type(input, "1\n2,3");
  await userEvent.click(btn);

  const result = await screen.findByText(/Result: 6/i);
  expect(result).toBeInTheDocument();
});

test("should show result as 8 for //[***]\\n3***2***3 input", async () => {
  render(<App />);
  const btn = screen.getByRole("button", { name: /calculate/i });
  const input = screen.getByPlaceholderText(/Please enter number string/);
  fireEvent.input(input, {
    target: { value: "//[***]\n3***2***3" },
  });
  await userEvent.click(btn);

  const result = await screen.findByText(/Result: 8/i);
  expect(result).toBeInTheDocument();
});
