import css from "./Options.module.css";

function Options({ feedbackData }) {
  const arrOptions = Object.keys(feedbackData);
  return (
    <div className={css.containerOptions}>
      <ul className={css.listButtons}>
        {arrOptions.map((item) => {
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
