import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import css from './ContactFilter.module.css';

export const Filter = ({ filter }) => {
  const dispatch = useDispatch();

  const handleChange = evt => {
    dispatch(changeFilter(evt.currentTarget.value));
  };
  return (
    <div>
      <p>Find contacts by Name</p>
      <input
        onChange={handleChange}
        type="text"
        name="filter"
        value={filter}
        className={css.input}
      />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
};
