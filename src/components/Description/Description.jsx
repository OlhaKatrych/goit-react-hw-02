import css from "./Description.module.css";

function Description() {
  return (
    <div className={css.containerDesc}>
      <h1 className={css.titleFirst}>Sip Happens Café</h1>
      <p className={css.textDesc}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}

export default Description;
