import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputForm from "../components/InputForm";

// initializing setup for InputForm and less repetitive code
const setup = () => render(<InputForm />);

// function for easily adding values to inputs inside of test functions
const typeIntoInput = ({ email, password, confirmPassword }) => {
  const emailInput = screen.getByLabelText(/email */i);
  const passwordInput = screen.getByLabelText("Password *");
  const confirmPasswordInput = screen.getByLabelText("Confirm Password *");

  if (email) {
    userEvent.type(emailInput, email);
  }
  if (password) {
    userEvent.type(passwordInput, password);
  }
  if (confirmPassword) {
    userEvent.type(confirmPasswordInput, confirmPassword);
  }
};

// function to display the error message and make sure fields are correct and it appears in the document
const displayErrorMsg = (errorMsg) => {
  const errorEl = screen.getByTestId("error-msg");
  expect(errorEl).toBeInTheDocument();
  expect(errorEl).toHaveTextContent(errorMsg);
  expect(errorEl).toHaveClass("input-error");
};

test("inputs and button appear in document with initial values being empty", () => {
  setup();

  // find inputs and expect all to be in the document
  const emailInput = screen.getByLabelText(/email */i);
  expect(emailInput).toBeInTheDocument();

  const passwordInput = screen.getByLabelText("Password *");
  expect(passwordInput).toBeInTheDocument();

  const confirmPasswordInput = screen.getByLabelText("Confirm Password *");
  expect(confirmPasswordInput).toBeInTheDocument();

  // find submit button and expect it to be in the document
  const submitButton = screen.getByRole("button", { name: /submit/i });
  expect(submitButton).toBeInTheDocument();

  // expect inital values to be empty
  expect(emailInput.value).toBe("");
  expect(passwordInput.value).toBe("");
  expect(confirmPasswordInput.value).toBe("");
});

test("can enter an email", () => {
  setup();

  const emailInput = screen.getByLabelText(/email/i);

  //   entering input into email field
  typeIntoInput({
    email: "julia@gmail.com",
  });
  expect(emailInput.value).toBe("julia@gmail.com");
});

test("can enter a password", () => {
  setup();

  const passwordInput = screen.getByLabelText("Password *");

  // entering input into password field
  typeIntoInput({
    password: "codingisfun7",
  });
  expect(passwordInput.value).toBe("codingisfun7");
});

test("can enter confirm password", () => {
  setup();

  const confirmPasswordInput = screen.getByLabelText("Confirm Password *");

  // entering input into confirm password field
  typeIntoInput({
    confirmPassword: "codingisfun7",
  });
  expect(confirmPasswordInput.value).toBe("codingisfun7");
});

// Testing form validity
test("one or more empty input fields notifies user of error to fill in all fields", () => {
  setup();

  const submitButton = screen.getByRole("button", { name: /submit/i });

  // one or more form inputs are empty which will throw error
  typeIntoInput({
    email: "",
    password: "",
    confirmPassword: "",
  });

  userEvent.click(submitButton);

  // error message displayed to user
  displayErrorMsg(/please fill in all fields/i);
});

test("invalid email notifies user of error", () => {
  setup();

  const submitButton = screen.getByRole("button", { name: /submit/i });

  // email is invalid which throws error
  typeIntoInput({
    email: "juliagmail.com",
    password: "codingisfun7",
    confirmPassword: "codingisfun7",
  });

  userEvent.click(submitButton);

  // error message displayed to user
  displayErrorMsg(/please enter a valid email/i);
});

test("passwords don't match and notifies user of error", () => {
  setup();

  const submitButton = screen.getByRole("button", { name: /submit/i });

  // passwords don't match so an error is thrown
  typeIntoInput({
    email: "julia@gmail.com",
    password: "codingisfun7",
    confirmPassword: "codingissuperfun",
  });

  userEvent.click(submitButton);

  // error message displayed to user
  displayErrorMsg(/passwords don't match/i);
});
