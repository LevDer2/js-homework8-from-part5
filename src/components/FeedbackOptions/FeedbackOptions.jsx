import React, { Component } from "react";
import style from "./FeedbackOptions.module.css";

export default class FeedbackOptions extends Component {
  render() {
    const {options, onLeaveFeedback} = this.props
    return (
      <div className={style.buttonBox}>
        {options.map((item) => {
          return (
            <button
              type="button"
              key={item}
              className={style.button}
              onClick={() => onLeaveFeedback(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
    );
  }
}
