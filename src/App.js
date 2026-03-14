import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (item) => {
    this.setState((prevState) => {
      return { [item]: prevState[item] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const option = ["good", "neutral", "bad"];
    const total = this.countTotalFeedback();
    const percents = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;

    return (
      <div className="container">
        <h1 className="title">Please leave feedback about our coffee</h1>

        <div className="buttonBox">
          {option.map((item) => {
            return (
              <button
                type="button"
                key={item}
                className={`button ${item}`}
                onClick={() => this.handleFeedback(item)}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="card">
          {total === 0 ? (
            <p className="message">Please give feedback!</p>
          ) : (
            <>
              <h2 className="subtitle">Statistics</h2>
              <p className="stat">
                Good: <span>{good}</span>
              </p>
              <p className="stat">
                Neutral: <span>{neutral}</span>
              </p>
              <p className="stat">
                Bad: <span>{bad}</span>
              </p>
              <p className="stat">
                Total: <span>{total}</span>
              </p>
              <p className="stat">
                Positive feedback: <span>{percents}%</span>
              </p>
            </>
          )}
        </div>
      </div>
    );
  }
}
