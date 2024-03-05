import css from "./Feedback.module.css";

function Feedback({ feedbackValue }) {
  const properties = [];
  const keys = Object.keys(feedbackValue);
  for (const key of keys) {
    properties.push(key);
  }

  return (
    <div className={css.containerFeedback}>
      <ul>
        {properties.map((item) => {
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
