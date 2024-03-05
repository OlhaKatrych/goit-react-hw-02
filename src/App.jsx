import css from "./App.module.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import { useState } from "react";

const feedbackObj = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedbacks, setFeedbacks] = useState(feedbackObj);
  function updateFeedback(feedbackType) {
    setFeedbacks((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  }
  return (
    <div>
      <Description />
      <Options feedbackData={feedbacks} onUpdateFeedback={updateFeedback} />
      <Feedback feedbackValue={feedbacks} />
    </div>
  );
}

export default App;
