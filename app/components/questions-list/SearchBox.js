import React     from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({onKeyPress}) => {
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      onKeyPress(e.target.value);
    }
  };

  return (
    <div className='row'>
      <input
        type='text'
        className='u-full-width search'
        placeholder='Search...'
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

SearchBox.propTypes = {
  onKeyPress: PropTypes.func.isRequired
};

export default SearchBox;
