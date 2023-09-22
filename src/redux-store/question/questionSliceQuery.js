import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const contactSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addNumber, deleteContact, filterContacts } =
  contactSlice.actions;
export default contactSlice.reducer;
