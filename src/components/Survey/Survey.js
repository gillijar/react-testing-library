import SurveyContainer from "./SurveyContainer";
import classes from "./Survey.module.css";

export default function Survey() {
  return (
    <div className={classes.survey}>
      <p>Let us know about your experience!</p>
      <SurveyContainer />
    </div>
  );
}

// progress bar to indicate how close user is to finishing survey
// 3. how would you rate your experience (1-5 stars)
