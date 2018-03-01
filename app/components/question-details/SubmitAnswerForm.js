import React     from 'react';
import PropTypes from 'prop-types';

const SubmitAnswerForm = ({questionId, onSubmit}) => {
  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({
      questionId: questionId,
      body: e.target.body.value,
    });
  };

  return (
    <div className='row'>
      <form onSubmit={handleSubmit}>
        <textarea id='body' className='u-full-width' placeholder='Answer...' required/>
        <input className='button-primary' type='submit' value='Submit'/>
      </form>
    </div>
  );
};

SubmitAnswerForm.propTypes = {
  questionId: PropTypes.string.isRequired,
  onSubmit:   PropTypes.func.isRequired
};

export default SubmitAnswerForm;
