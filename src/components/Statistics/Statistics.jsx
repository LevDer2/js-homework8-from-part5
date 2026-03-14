import React, { Component } from "react";
import style from "./Statistics.module.css"

export default class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div className={style.card}>
        {total === 0 ? (
          <p className="message">Please give feedback!</p>
        ) : (
          <>
            <h2 className={style.subtitle}>Statistics</h2>
            <p className={style.stat}>
              Good: <span>{good}</span>
            </p>
            <p className={style.stat}>
              Neutral: <span>{neutral}</span>
            </p>
            <p className={style.stat}>
              Bad: <span>{bad}</span>
            </p>
            <p className={style.stat}>
              Total: <span>{total}</span>
            </p>
            <p className={style.stat}>
              Positive feedback: <span>{positivePercentage}%</span>
            </p>
          </>
        )}
      </div>
    );
  }
}
