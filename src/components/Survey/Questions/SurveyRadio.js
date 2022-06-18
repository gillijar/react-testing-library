export default function SurveyRadio() {
  return (
    <section>
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
