import React from "react";
import { useEffect, useState } from "react";
import AddQuestion from "./components/AddQuestion/AddQuestion";
import QuestionList from "./components/QuestionList/QuestionList";
import QuestionService from "./services/question-service";
import style from "./App.module.css";

function App() {
  const service = new QuestionService();
  const getData = async () => {
    const response = await service.get();
    setQuestions(response.data);
    return response.data;
  };

  const [questions, setQuestions] = useState([]);
  const addNewQuestion = (q) => {
    service.post(q);
    setQuestions([...questions, q]);
  };

  useEffect(() => {
    getData();
  }, []);
  const changeSelectedAnswer = (question, value) => {
    value = Number(value);
    service.put({ ...question, selectedAnswer: value, wasAnswered: true });
    getData();
  };
  const deleteQuestion = (questionToDelete) => {
    service
      .delete(questionToDelete.id)
      .then(
        setQuestions((oldQuestions) =>
          oldQuestions.filter((question) => question.id !== questionToDelete.id)
        )
      );
  };

  return (
    <div className={style["body-background"]}>
      <div className="container">
        <QuestionList
          list={questions}
          changeSelectedAnswer={changeSelectedAnswer}
          deleteQuestion={deleteQuestion}
        />
      </div>
      <div className="container">
        <AddQuestion addNewQuestion={addNewQuestion} />
      </div>
    </div>
  );
}

export default App;
