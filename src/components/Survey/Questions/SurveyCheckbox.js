export default function SurveyCheckbox() {
  return (
    <section>
      <p>
        What did you like most about working with us? (Choose all that apply)
      </p>

      <div>
        <input id="checkbox1" type="checkbox" value="customer service" />
        <label htmlFor="checkbox1">Customer service</label>
      </div>
      <div>
        <input id="checkbox2" type="checkbox" value="user experience" />
        <label htmlFor="checkbox2">User experience</label>
      </div>
      <div>
        <input id="checkbox3" type="checkbox" value="ease of checking out" />
        <label htmlFor="checkbox3">Ease of checking out</label>
      </div>
      <div>
        <input id="checkbox4" type="checkbox" value="course diversity" />
        <label htmlFor="checkbox4">Course diversity</label>
      </div>
      <div>
        <input id="checkbox5" type="checkbox" value="other" />
        <label htmlFor="checkbox5">Other</label>
      </div>
    </section>
  );
}
