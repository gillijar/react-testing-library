import { useState, useRef } from "react";
import classes from "./Survey.module.css";
import ProgressBar from "./Progress Bar/ProgressBar";
import SurveyNameInput from "./Questions/SurveyNameInput";
import SurveyAgeInput from "./Questions/SurveyAgeInput";
import SurveyCheckbox from "./Questions/SurveyCheckbox";
import SurveyRadio from "./Questions/SurveyRadio";

export default function SurveyContainer() {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const formLength = 5;
  const [formQuestion, setFormQuestion] = useState(1);
  const [disabled, setDisabled] = useState(true);

  // set up functionality for validity to check if submit button is disabled or enabled

  const goBackHandler = () => {
    setFormQuestion(formQuestion - 1);
  };

  const goToNextHandler = () => {
    setFormQuestion(formQuestion + 1);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    const nameInput = nameInputRef.current.value;
    const ageInput = ageInputRef.current.value;

    const formBody = {
      name: nameInput,
      age: ageInput,
    };

    console.log(formBody);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <ProgressBar formQuestion={formQuestion} />
      <div
        className={classes["survey-container"]}
        data-testid="form-container"
        style={{ transform: `translateX(${-100 * (formQuestion - 1)}%)` }}
      >
        <SurveyNameInput nameInput={nameInputRef} />
        <SurveyAgeInput ageInput={ageInputRef} />
        <SurveyCheckbox />
        <SurveyRadio />
      </div>
      <div>
        {formQuestion > 1 && (
          <button type="button" onClick={goBackHandler}>
            Back
          </button>
        )}
        {formQuestion !== formLength && (
          <button type="button" onClick={goToNextHandler}>
            Next
          </button>
        )}
        {formQuestion === formLength && (
          <button type="submit" disabled={disabled}>
            Submit
          </button>
        )}
      </div>
    </form>
  );
}
