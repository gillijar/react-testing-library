const SurveyNameInput = (props) => {
  return (
    <section>
      <label htmlFor="name-input">
        What's your name? <span aria-label="required">*</span>
      </label>
      <input
        id="name-input"
        type="text"
        name="name"
        placeholder="Enter your name"
        ref={props.nameInput}
      />
    </section>
  );
};

export default SurveyNameInput;
