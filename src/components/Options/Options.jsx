import css from "./Options.module.css";

function Options({ feedbackData }) {
  const keyFeedbackData = [];
  for (const feedback in feedbackData) {
    keyFeedbackData.push(feedback);
  }

  return (
    <div className={css.containerOptions}>
      <ul className={css.listButtons}>
        {keyFeedbackData.map((item) => {
          return (
            <li key={item}>
              <button className={css.btnText}>{item}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Options;
