import React, { useState } from "react";
import ReactDOM from "react-dom";

const Buttun = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>

      <td>{value}</td>
    </tr>
  );
};
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const avarage = (good - bad) / total;
  const positive = (good * 100) / total;
  if (total > 0) {
    return (
      <table>
        <tbody>
          <Statistic text={"Good"} value={good} />

          <Statistic text={"Bad"} value={bad} />

          <Statistic text={"Neutral"} value={neutral} />

          <Statistic text={"Total No. of Feedback :"} value={total} />

          <Statistic text={"The Avarage Score is :"} value={avarage} />

          <Statistic
            text={"The Percentage of the Positive Feedback is :"}
            value={positive + "%"}
          />
        </tbody>
      </table>
    );
  } else return "No Feedback Availabe ";
};
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState([]);

  const displayGood = () => {
    setGood(good + 1);
    setAll(allClicks.concat("G"));
  };
  const displayNeutral = () => {
    setNeutral(neutral + 1);
    setAll(allClicks.concat("N"));
  };
  const displayBad = () => {
    setBad(bad + 1);
    setAll(allClicks.concat("B"));
  };

  return (
    <div>
      <h1>Give your Feeback</h1>
      <Buttun handleClick={displayGood} text="Good" />

      <Buttun handleClick={displayNeutral} text="neutral" />

      <Buttun handleClick={displayBad} text="Bad" />

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
