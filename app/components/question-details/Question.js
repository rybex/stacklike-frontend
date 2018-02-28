import React          from 'react';
import PropTypes      from 'prop-types';
import QuestionHeader from './QuestionHeader';
import QuestionBody   from './QuestionBody';
import Answer         from './Answer';

const Question = ({question, onAnswerClick}) => {
  const answers = question.answers.map((answer, index) => {
    return (
      <Answer
        key={index}
        answer={answer}
      />
    );
  });

  return (
    <div className='row'>
      <div className='question-content'>
        <QuestionHeader question={question} onClick={onAnswerClick}/>
        <QuestionBody question={question}/>
        {answers}
      </div>
    </div>
  );
};

Question.propTypes = {
  question:      PropTypes.object.isRequired,
  onAnswerClick: PropTypes.func.isRequired
};

export default Question;
