import { createSlice } from '@reduxjs/toolkit';

export const filter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { changeFilter } = filter.actions;
export default filter.reducer;
export const getFilter = state => state.filter;
