import { createSlice } from '@reduxjs/toolkit';
import { fetchItem, addQuestion, deleteQuestion } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    filterQuestion: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [addQuestion.pending]: handlePending,
    [fetchItem.pending]: handlePending,
    [deleteQuestion.pending]: handlePending,

    [fetchItem.fulfilled]: handleFulfilled,
    [addQuestion.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteQuestion.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
    },

    [addQuestion.rejected]: handleRejected,
    [fetchItem.rejected]: handleRejected,
    [deleteQuestion.rejected]: handleRejected,
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  questionSlice.actions;

export default questionSlice.reducer;
