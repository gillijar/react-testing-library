import { useRef, useState } from "react";

export default function InputForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const [error, setError] = useState();

  const submitFormHandler = (e) => {
    e.preventDefault();

    const emailInput = emailInputRef.current.value;
    const passwordInput = passwordInputRef.current.value;
    const confirmPasswordInput = confirmPasswordInputRef.current.value;

    if (
      emailInput === "" ||
      passwordInput === "" ||
      confirmPasswordInput === ""
    ) {
      setError("Please fill in all fields");
      return;
    }

    if (!emailInput.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    if (confirmPasswordInput !== passwordInput) {
      setError("Passwords don't match");
      return;
    }

    setError();
  };

  return (
    <form onSubmit={submitFormHandler}>
      {error && (
        <p data-testid="error-msg" className="input-error">
          {error}
        </p>
      )}
      <label htmlFor="email">
        Email <span aria-label="required">*</span>
      </label>
      <input
        type="text"
        autoComplete="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        ref={emailInputRef}
      />
      <label htmlFor="password">
        Password <span aria-label="required">*</span>
      </label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        ref={passwordInputRef}
      />
      <label htmlFor="confirmPassword">
        Confirm Password <span aria-label="required">*</span>
      </label>
      <input
        type="password"
        id="confirmPassword"
        name="confirm password"
        placeholder="Confirm password"
        ref={confirmPasswordInputRef}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
