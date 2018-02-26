import React from 'react';

const SearchBox = () => {
  return (
    <input
      type='text'
      className='pure-input-rounded'
      placeholder='Search...' 
      style={{width: "100%", height: "40px", marginBottom: "10px"}}
    />
  );
};

export default SearchBox;
