import React          from 'react';
import PropTypes      from 'prop-types';
import { withRouter } from 'react-router-dom';

const QuestionItem = ({question, history}) => {
  const handleOnClick = () => {
    history.push('/' + question.id);
  }

  const body = question.body.length > 20 ? `${question.body.substring(0,20)}...` : question.body;

  return (
    <div className='question-item' onClick={handleOnClick}>
      <div className='question-item-section' style={{float: 'right'}}>
        <img className='avatar' src={question.creator_image} />
      </div>
      <div className='question-item-section'>
        <h4 className='question-subject'>{question.title}</h4>
        <p className='question-desc'>
          {body}
        </p>
      </div>
    </div>
  );
};

QuestionItem.propTypes = {
  question: PropTypes.object.isRequired
};

export default withRouter(QuestionItem);
