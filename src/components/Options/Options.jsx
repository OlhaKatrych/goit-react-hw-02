import css from "./Options.module.css";

function Options({ feedbackData, onUpdateFeedback }) {
  const arrOptions = Object.keys(feedbackData);
  return (
    <div className={css.containerOptions}>
      <ul className={css.listButtons}>
        {arrOptions.map((item) => {
          return (
            <li key={item}>
              <button className={css.btnText} onClick={()=> onUpdateFeedback(item)}>
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Options;
