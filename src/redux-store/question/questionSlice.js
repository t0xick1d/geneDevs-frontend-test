import { createSlice } from '@reduxjs/toolkit';
import { fetchItem, addQuestion, deleteQuestion } from './operations';

const initialState = {
  question: {
    items: [],
    topicID: '',
    isLoading: false,
    error: null,
  },
};

const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = (state, action) => {
  state.question.isLoading = false;
  state.question.error = null;
  state.question.items = action.payload;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const questionSlice = createSlice({
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
      state.question.items.push({
        id: action.payload.id,
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    [deleteQuestion.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.question.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.question.items.splice(index, 1);
    },

    [addQuestion.rejected]: handleRejected,
    [fetchItem.rejected]: handleRejected,
    [deleteQuestion.rejected]: handleRejected,
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError, filterTopic } =
  questionSlice.actions;

export default questionSlice.reducer;
