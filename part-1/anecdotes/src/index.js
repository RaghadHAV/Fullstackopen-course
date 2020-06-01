import React, { useState } from "react";
import ReactDOM from "react-dom";
const Display = ({ text, votes }) => {
  return (
    <>
      <div>{text} </div>
      <div>has {votes} votes</div>
    </>
  );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(anecdotes.map((x) => 0)); //map the values of anecdotes with the votes array and make the values of votes all 0
  console.log(votes);
  const nextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };
  const voteAnecdote = () => {
    const newVotes = [...votes];
    newVotes[selected]++;
    setVotes(newVotes);
  };
  const mostVoted = votes.indexOf(Math.max(...votes)); // to find the max no of the votes
  return (
    <>
      <h1> Anecdote of the Day</h1>
      <Display text={anecdotes[selected]} votes={votes[selected]} />
      <Button onClick={() => voteAnecdote(selected)} text="Vote" />
      <Button onClick={nextAnecdote} text="Next Anecdote" />
      <h1> The Most Voted Anecdote</h1>
      <Display text={anecdotes[mostVoted]} votes={votes[mostVoted]} />
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
