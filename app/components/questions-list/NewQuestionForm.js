import React     from 'react';
import PropTypes from 'prop-types';

const NewQuestionForm = ({onSubmit}) => {
  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({
      title: e.target.title.value,
      body: e.target.body.value,
    });
  };

  return (
    <div className='row'>
      <form onSubmit={handleSubmit}>
        <input
          id='title'
          className='u-full-width question-title'
          type='text'
          placeholder='Question title'
          required
        />
        <textarea
          id='body'
          className='u-full-width question-body'
          placeholder='Question body'
          required
        />
        <input
          className='button-primary'
          type='submit'
          value='Submit'
        />
      </form>
    </div>
  );
};

NewQuestionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default NewQuestionForm;
