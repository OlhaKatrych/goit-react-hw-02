import css from "./Feedback.module.css";

function Feedback({ feedbackValue }) {
  const arrFeedback = Object.keys(feedbackValue);
  return (
    <div className={css.containerFeedback}>
      <ul>
        {arrFeedback.map((item) => {
          return (
            <li key={item}>
              <p className={css.textFeedback}>
                {item}: {feedbackValue[item]}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Feedback;
