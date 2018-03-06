import React         from 'react';
import PropTypes     from 'prop-types';
import ReactMarkdown from 'react-markdown';

const Answer = ({answer}) => {
  return (
    <div className='answer-item'>
      <div className='answer-item-section' style={{float: 'right'}}>
        <img className='avatar' src={answer.creator_image} />
      </div>
      <div className='answer-item-section'>
        <ReactMarkdown
          source={answer.body}
        />
      </div>
    </div>
  );
};

Answer.propTypes = {
  answer: PropTypes.object.isRequired
};

export default Answer;
