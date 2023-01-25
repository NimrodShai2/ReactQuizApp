import style from "./Answer.module.css";
import React from "react";
import PropTypes from "prop-types";

function Answers(props) {
  return (
    <span className="input-group mb-3">
      <input
        type={"radio"}
        name={props.question.title}
        value={props.question.answers.findIndex((a) => a === props.text)}
        onInput={props.changeSelectionHandler}
      />
      <span
        className={
          props.isCorrect && props.afterCheck ? style.correctAnswer : ""
        }
      >
        {props.text}
      </span>
    </span>
  );
}
export default Answers;

Answers.propTypes = {
  question: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  afterCheck: PropTypes.bool.isRequired,
  changeSelectionHandler: PropTypes.func.isRequired,
};
