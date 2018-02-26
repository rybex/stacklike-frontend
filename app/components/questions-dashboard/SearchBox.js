import React from 'react';

const SearchBox = () => {
  return (
    <form className='pure-form'>
      <input type='text' className='pure-input-rounded'/>
      <button type='submit' className='pure-button'>Search</button>
    </form>
  );
};

export default SearchBox;
