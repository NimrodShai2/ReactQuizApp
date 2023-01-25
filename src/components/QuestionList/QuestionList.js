import React, { useEffect, useState } from "react";
import Question from "../Question/Question";
import Result from "../Result/Result";
import PropTypes from "prop-types";
import "./Questionlist.module.css";

function QuestionList(props) {
  const [numOfCorrectAns, setNumOfCorrectAns] = useState(0);
  const [afterCheck, setAfterCheck] = useState(false);
  const [clickDisabled, setClickDisabled] = useState(true);
  useEffect(() => {
    for (const q of props.list) {
      if (!q.wasAnswered) {
        return;
      }
    }
    setClickDisabled(false);
  }, [props.list]);

  const deleteQuestion = (q) => {
    props.deleteQuestion(q);
  };

  const onSelectAnswer = (question, value) => {
    props.changeSelectedAnswer(question, value);
  };
  const onCheckAnswers = () => {
    props.list.forEach((q) => {
      if (q.selectedAnswer === q.correctAnswer) {
        setNumOfCorrectAns((numOfCorrectAns) => numOfCorrectAns + 1);
      }
    });
    setAfterCheck(true);
    setClickDisabled(true);
  };

  return (
    <div>
      <ul className="list-group">
        {props.list.map((item) => {
          return (
            <Question
              key={item.id}
              question={item}
              onSelectAnswer={onSelectAnswer}
              afterCheck={afterCheck}
              deleteQuestion={deleteQuestion}
            />
          );
        })}
      </ul>
      <button
        onClick={onCheckAnswers}
        disabled={!afterCheck ? clickDisabled : true}
        className="btn btn-info btn-lg m-3"
      >
        Check answers
      </button>
      <Result
        afterCheck={afterCheck}
        numOfCorrectAns={numOfCorrectAns}
        length={props.list.length}
      />
    </div>
  );
}

export default QuestionList;

QuestionList.propTypes = {
  list: PropTypes.array.isRequired,
  deleteQuestion: PropTypes.func.isRequired,
  changeSelectedAnswer: PropTypes.func.isRequired,
};
