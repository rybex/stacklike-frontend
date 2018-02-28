import React from 'react';

import './AskQuestionButton.css'

const AskQuestionButton = ({onClick, formStatus}) => {
  const value = formStatus ? 'Cancel' : 'Ask question';

  return (
    <div className='row'>
      <input
        className='button-primary ask-question'
        type='button'
        value={value}
        onClick={onClick}/>
    </div>
  );
};

export default AskQuestionButton;
