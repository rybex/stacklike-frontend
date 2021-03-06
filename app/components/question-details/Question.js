import React          from 'react';
import PropTypes      from 'prop-types';
import Answer         from './Answer';
import ReactMarkdown  from 'react-markdown';

const Question = ({question, onAnswerClick, formStatus, user}) => {
  const buttonText = formStatus ? 'Cancel' : 'Answer';

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
          {
            user ? <button
              className='secondary-button'
              onClick={onAnswerClick}>
              {buttonText}
            </button> : null
          }
        </div>
      </div>
      {answers}
    </div>
  );
};

Question.propTypes = {
  question:      PropTypes.object.isRequired,
  onAnswerClick: PropTypes.func.isRequired,
  formStatus:    PropTypes.bool.isRequired,
  user:          PropTypes.object
};

export default Question;
