import css from "./Feedback.module.css";

function Feedback({ feedbackValue, totalFeedbackProp, positiveFeedbackProp }) {
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
        {totalFeedbackProp > 0 ? (
          <p className={css.textFeedback}>total: {totalFeedbackProp}</p>
        ) : null}
        {totalFeedbackProp > 0 ? (
          <p className={css.textFeedback}>positive: {positiveFeedbackProp}&#37;</p>
        ) : null}
      </ul>
    </div>
  );
}

export default Feedback;
