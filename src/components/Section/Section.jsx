import React, {Component } from "react";
import style from"./Section.module.css"

export default class Section extends Component {
  render() {
    const {title, children} = this.props;
    return (
      <div className={style.container}>
        <h1 className={style.title}>{title}</h1>
        {children}
      </div>
    );
  }
}
