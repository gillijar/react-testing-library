export default function SurveyNameInput(props) {
  return (
    <section>
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
