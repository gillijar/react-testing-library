import classes from "../Survey.module.css";

export default function SurveyNameInput(props) {
  return (
    <section className={classes["survey-input"]}>
      <label htmlFor="age-input">
        What's your age? <span aria-label="required">*</span>
      </label>
      <input
        min="18"
        max="99"
        id="age-input"
        type="number"
        name="age"
        placeholder="Enter your age"
        ref={props.ageInput}
      />
    </section>
  );
}
