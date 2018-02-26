import React          from 'react';
import PropTypes      from 'prop-types';
import QuestionHeader from './QuestionHeader';
import QuestionBody   from './QuestionBody';

import './QuestionDetails.css'

const QuestionDetails = ({question}) => {
  return (
    <div id='main' className='pure-u-1'>
      <div className='question-content'>
        <QuestionHeader question={question}/>
        <QuestionBody question={question}/>
      </div>
    </div>
  );
};

QuestionDetails.propTypes = {
  question: PropTypes.object.isRequired
};

export default QuestionDetails;
