import classes from "../Survey.module.css";

export default function SurveyRadio() {
  return (
    <section className={classes["survey-input"]}>
      <p>Would you recommend us to friends, family, colleagues?</p>

      <div>
        <input id="radio-yes" type="radio" value="yes" name="recommend" />
        <label htmlFor="radio-yes">Yes</label>
      </div>
      <div>
        <input id="radio-no" type="radio" value="no" name="recommend" />
        <label htmlFor="radio-no">No</label>
      </div>
    </section>
  );
}
