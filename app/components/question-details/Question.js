import React          from 'react';
import PropTypes      from 'prop-types';
import Answer         from './Answer';
import ReactMarkdown  from 'react-markdown';

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
        <div className='question-content-header'>
          <h1 className='question-content-title'>{question.title}</h1>
          <p className='question-content-subtitle'>
            From <a>{question.creator_name}</a> at <span>{question.created_at}</span>
          </p>
        </div>
        <div className='question-content-body'>
          <ReactMarkdown
            source={question.body}
          />
        </div>
        <div className='question-content-controls'>
          <button
            className='secondary-button'
            onClick={onAnswerClick}>Answer
          </button>
        </div>
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
