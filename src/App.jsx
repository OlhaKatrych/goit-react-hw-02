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

  return (
    <div>
      <Description />
      <Options feedbackData={feedbacks} />
      <Feedback feedbackValue={feedbacks}/>
    </div>
  );
}

export default App;
