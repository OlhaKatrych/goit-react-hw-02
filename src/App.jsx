import css from "./App.module.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import { useEffect, useState } from "react";

const feedbackObj = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const stringified = localStorage.getItem("feedbacks");
    if (!stringified) return feedbackObj;
    const parsedEmails = JSON.parse(stringified);
    return parsedEmails;
  });
  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positiveFeedbackPercent = Math.round(
    ((feedbacks.good + feedbacks.neutral) / totalFeedback) * 100
  );
  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);
  function updateFeedback(feedbackType) {
    setFeedbacks((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  }
  function handleReset() {
    setFeedbacks(feedbackObj);
  }

  return (
    <div>
      <Description />
      <Options
        feedbackData={feedbacks}
        totalFeedbackProp={totalFeedback}
        onUpdateFeedback={updateFeedback}
        onReset={handleReset}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackValue={feedbacks}
          totalFeedbackProp={totalFeedback}
          positiveFeedbackProp={positiveFeedbackPercent}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
