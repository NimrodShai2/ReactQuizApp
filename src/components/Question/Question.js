import Answers from "../Answers/Answers";
import React from "react";
import PropTypes from "prop-types";

function Question(props) {
  function changeSelectionHandler(e) {
    props.onSelectAnswer(props.question, e.target.value);
  }
  function onClickDelete() {
    props.deleteQuestion(props.question);
  }

  return (
    <li className="list-group-item bg-info bg-gradient m-3">
      <h1>{props.question.title}</h1>
      <div>
        <h2 className="display-6">{props.question.description}</h2>
      </div>
      <div>
        {props.question.answers.map((a, index) => (
          <Answers
            key={index}
            question={props.question}
            changeSelectionHandler={changeSelectionHandler}
            text={a}
            afterCheck={props.afterCheck}
            isCorrect={
              props.question.correctAnswer ===
              props.question.answers.findIndex((ans) => ans === a)
            }
          />
        ))}
      </div>
      <button className="btn btn-danger" onClick={onClickDelete}>
        Delete Question
      </button>
    </li>
  );
}

export default Question;

Question.propTypes = {
  question: PropTypes.object.isRequired,
  onSelectAnswer: PropTypes.func.isRequired,
  afterCheck: PropTypes.func.isRequired,
  deleteQuestion: PropTypes.func.isRequired,
};
