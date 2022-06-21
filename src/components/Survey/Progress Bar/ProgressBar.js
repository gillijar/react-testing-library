import classes from "./ProgressBar.module.css";

export default function ProgressBar({ formQuestion }) {
  return (
    <section>
      <div className={classes["progress-bar__container"]}>
        <div
          data-testid="progress-bar"
          className={classes["progress-bar"]}
          style={{
            transform: `translateX(${-100 + (100 / 5) * formQuestion}%)`,
          }}
        ></div>
      </div>
    </section>
  );
}
