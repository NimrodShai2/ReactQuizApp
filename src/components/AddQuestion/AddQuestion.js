import React, { useState } from "react";
import PropTypes from "prop-types";

import "./AddQuestion.module.css";

function AddQuestion(props) {
  const [question, setQuestion] = useState({
    id: 0,
    answers: ["", "", "", ""],
    selectedAnswer: -1,
    wasAnswered: false,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    props.addNewQuestion(question);
  };
  const titleInputHandler = (e) => {
    setQuestion({ ...question, title: e.target.value });
  };
  const descriptionInputHandler = (e) => {
    setQuestion({ ...question, description: e.target.value });
  };
  const correctAnswerInputHandler = (e) => {
    setQuestion({ ...question, correctAnswer: e.target.value - 1 });
  };

  const answerInputHandler = (answerNumber) => {
    return (e) => {
      const newAnswers = [...question.answers];
      newAnswers[answerNumber] = e.target.value;
      setQuestion({ ...question, answers: newAnswers });
    };
  };

  return (
    <div className="row justify-content-around">
      <div className="col-sm-12 col-md-7 col-lg-5">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label">Question Title:</label>
            <input
              className="form-control"
              required
              type={"text"}
              onInput={titleInputHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Question Description:</label>
            <input
              className="form-control"
              required
              type={"text"}
              onInput={descriptionInputHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Question Correct Answer Number:
            </label>
            <input
              className="form-control"
              required
              min={1}
              max={4}
              type={"number"}
              onInput={correctAnswerInputHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Question Answer 1:</label>
            <input
              className="form-control"
              required
              type={"text"}
              onInput={answerInputHandler(0)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Question Answer 2:</label>
            <input
              className="form-control"
              required
              type={"text"}
              onInput={answerInputHandler(1)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Question Answer 3:</label>
            <input
              className="form-control"
              required
              type={"text"}
              onInput={answerInputHandler(2)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Question Answer 4:</label>
            <input
              className="form-control"
              required
              type={"text"}
              onInput={answerInputHandler(3)}
            />
          </div>
          <div className="mb-3">
            <input
              className="btn btn-secondary"
              type={"submit"}
              value="Add Question"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddQuestion;

AddQuestion.propTypes = {
  addNewQuestion: PropTypes.func.isRequired,
};
