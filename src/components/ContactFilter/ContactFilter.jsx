import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ handleChange }) => (
  <div>
    <p>Find contacts by Name</p>
    <input onChange={handleChange} type="text" name="filter" />
  </div>
);

export default Filter;

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
