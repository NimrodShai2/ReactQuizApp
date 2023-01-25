import axios from "axios";

const URL =
  // eslint-disable-next-line no-undef
  process.env.REACT_APP_API_URL + process.env.REACT_APP_QUESTIONS_ROUTE;

class QuestionService {
  get() {
    return axios.get(URL);
  }
  put(question) {
    return axios.put(URL + question.id, question);
  }
  delete(id) {
    return axios.delete(URL + id);
  }
  post(question) {
    return axios.post(URL, { ...question });
  }
}

export default QuestionService;
