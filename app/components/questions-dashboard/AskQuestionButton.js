import React from 'react';

import './AskQuestionButton.css'

const AskQuestionButton = () => {
  return (
    <div className='row'>
      <input
        className='button-primary ask-question'
        type='button'
        value='Ask question'/>
    </div>
  );
};

export default AskQuestionButton;
