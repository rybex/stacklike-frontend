import React from 'react';

import './NewQuestionForm.css';

const NewQuestionForm = ({status, onSubmit}) => {
  const visibility = status ? '' : 'invisible';

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({
      title: e.target.title.value,
      body: e.target.body.value,
    });
  };

  return (
    <div className={'row ' + visibility}>
      <form onSubmit={handleSubmit}>
        <input id='title' className='u-full-width' type='text' placeholder='Question title' required/>
        <textarea id='body' className='u-full-width' placeholder='Question body' required/>
        <input className='button-primary' type='submit' value='Submit'/>
      </form>
    </div>
  );
};

export default NewQuestionForm;
