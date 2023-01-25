import React from "react";
import PropTypes from "prop-types";

function Result(props) {
  if (props.afterCheck) {
    return (
      <div>
        Correct answers: {props.numOfCorrectAns} out of {props.length}
      </div>
    );
  } else {
    return <span></span>;
  }
}

export default Result;

Result.propTypes = {
  numOfCorrectAns: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  afterCheck: PropTypes.bool,
};
