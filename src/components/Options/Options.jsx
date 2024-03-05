import css from "./Options.module.css";

function Options({
  feedbackData,
  onUpdateFeedback,
  totalFeedbackProp,
  onReset,
}) {
  const arrOptions = Object.keys(feedbackData);
  return (
    <div className={css.containerOptions}>
      <ul className={css.listButtons}>
        {arrOptions.map((item) => {
          return (
            <li key={item}>
              <button
                type="button"
                className={css.btnText}
                onClick={() => {
                  onUpdateFeedback(item);
                }}
              >
                {item}
              </button>
            </li>
          );
        })}
        {totalFeedbackProp > 0 ? (
          <button type="button" className={css.btnText} onClick={onReset}>
            Reset
          </button>
        ) : null}
      </ul>
    </div>
  );
}

export default Options;
