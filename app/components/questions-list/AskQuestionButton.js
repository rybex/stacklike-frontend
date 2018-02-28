import React     from 'react';
import PropTypes from 'prop-types';

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

AskQuestionButton.propTypes = {
  onClick:    PropTypes.func.isRequired,
  formStatus: PropTypes.bool.isRequired
};

export default AskQuestionButton;
