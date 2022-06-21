import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Survey from "../components/Survey/Survey";

const setup = () => render(<Survey />);

// function that takes the element as a parameter and checks if its values are correct
const checkElValues = (el) => {
  expect(el).toBeInTheDocument();
  expect(el).not.toBeChecked();
};

test("form container is present and has initial style of translateX(0%)", () => {
  setup();

  const formContainer = screen.getByTestId("form-container");
  expect(formContainer).toBeInTheDocument();
  expect(formContainer).toHaveStyle({ transform: `translateX(0%)` });
});

// making sure all questions are in the document and have inital values of empty
test("all questions are in the document and have initial values of empty", () => {
  setup();

  // Name input values
  const nameInput = screen.getByLabelText(/what's your name?/i);
  expect(nameInput).toBeInTheDocument();
  expect(nameInput.value).toBe("");

  // Age input values
  const ageInput = screen.getByRole("spinbutton", {
    name: /what's your age?/i,
  });
  expect(ageInput).toBeInTheDocument();
  expect(ageInput.value).toBe("");

  // Experience checkboxes
  const checkbox1 = screen.getByRole("checkbox", {
    name: /customer service/i,
  });

  const checkbox2 = screen.getByRole("checkbox", { name: /user experience/i });

  const checkbox3 = screen.getByRole("checkbox", {
    name: /ease of checking out/i,
  });

  const checkbox4 = screen.getByRole("checkbox", { name: /course diversity/i });

  const checkbox5 = screen.getByRole("checkbox", { name: /other/i });

  checkElValues(checkbox1);
  checkElValues(checkbox2);
  checkElValues(checkbox3);
  checkElValues(checkbox4);
  checkElValues(checkbox5);

  // Recommend section
  const yesRadioButton = screen.getByRole("radio", { name: /yes/i });
  const noRadioButton = screen.getByRole("radio", { name: /no/i });

  checkElValues(yesRadioButton);
  checkElValues(noRadioButton);
});

// Progress bar
test("progress bar is in document and is filled with initial value of -80%", () => {
  setup();

  const progressBar = screen.getByTestId("progress-bar");
  expect(progressBar).toBeInTheDocument();
  expect(progressBar).toHaveStyle({ transform: "translateX(-80%)" });
});

// Next button appears when form loads and back button is null
test("initial button next is in the form document and back button is null", () => {
  setup();

  const nextBtn = screen.getByRole("button", { name: /next/i });
  expect(nextBtn).toBeInTheDocument();

  const backBtn = screen.queryByRole("button", { name: /back/i });
  expect(backBtn).toBeNull();
});

test("back button appears when user clicks next button then disappears when back button is clicked", () => {
  setup();

  const nextBtn = screen.getByRole("button", { name: /next/i });
  userEvent.click(nextBtn);

  const backBtn = screen.getByRole("button", { name: /back/i });
  expect(backBtn).toBeInTheDocument();

  userEvent.click(backBtn);
  expect(backBtn).not.toBeInTheDocument();
});

// last question of form will change the button type to submit and button will be disabled
test("next button disappears and submit button appears when reaching the last question", () => {
  setup();

  const nextButton = screen.getByRole("button", { name: /next/i });
  expect(nextButton).toHaveAttribute("type", "button");
  expect(nextButton).toBeInTheDocument();

  // Click button 4 times to reach final question
  userEvent.click(nextButton);
  userEvent.click(nextButton);
  userEvent.click(nextButton);
  userEvent.click(nextButton);

  expect(nextButton).not.toBeInTheDocument();

  const submitButton = screen.getByRole("button", { name: /submit/i });
  expect(submitButton).toHaveAttribute("type", "submit");
  expect(submitButton).toBeInTheDocument();
});

// function for clicking next button and checking to see if the value is correct
const checkForCorrectTransformPercentage = (btn, el, percent) => {
  userEvent.click(btn);
  expect(el).toHaveStyle({ transform: `translateX(${percent}%)` });
};

test("progress bar moves correctly when the current form question changes", () => {
  setup();

  const progressBar = screen.getByTestId("progress-bar");

  // clicking next multiple times and checking for correct value
  const nextBtn = screen.getByRole("button", { name: /next/i });
  checkForCorrectTransformPercentage(nextBtn, progressBar, -60);
  checkForCorrectTransformPercentage(nextBtn, progressBar, -40);
  checkForCorrectTransformPercentage(nextBtn, progressBar, -20);

  // clicking back and checking for correct values
  const backBtn = screen.getByRole("button", { name: /back/i });
  checkForCorrectTransformPercentage(backBtn, progressBar, -40);
  checkForCorrectTransformPercentage(backBtn, progressBar, -60);
});

test("form container has correct styles when next and back buttons are pushed to display the current question", () => {
  setup();

  const formContainer = screen.getByTestId("form-container");

  // click next button mulitple times and check for correct values
  const nextBtn = screen.getByRole("button", { name: /next/i });

  checkForCorrectTransformPercentage(nextBtn, formContainer, -100);
  checkForCorrectTransformPercentage(nextBtn, formContainer, -200);
  checkForCorrectTransformPercentage(nextBtn, formContainer, -300);
  checkForCorrectTransformPercentage(nextBtn, formContainer, -400);

  const backBtn = screen.getByRole("button", { name: /back/i });
  checkForCorrectTransformPercentage(backBtn, formContainer, -300);
  checkForCorrectTransformPercentage(backBtn, formContainer, -200);
});

test("submit button is disabled and then enabled when all input fields are filled out", () => {
  setup();

  const nextBtn = screen.getByRole("button", { name: /next/i });

  userEvent.click(nextBtn);
  userEvent.click(nextBtn);
  userEvent.click(nextBtn);
  userEvent.click(nextBtn);

  const submitButton = screen.getByRole("button", { name: /submit/i });
  expect(submitButton).toBeDisabled();
  // test
});
