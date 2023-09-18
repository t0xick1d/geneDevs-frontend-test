import { createSlice } from '@reduxjs/toolkit';
import { fetchItem, addTopic, deleteTopic } from './operations';

const initialState = {
  topic: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = (state, action) => {
  state.topic.isLoading = false;
  state.topic.error = null;
  state.topic.items = action.payload;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const topicSlice = createSlice({
  name: 'topic',
  initialState,
  reducers: {
    filterTopic: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [addTopic.pending]: handlePending,
    [fetchItem.pending]: handlePending,
    [deleteTopic.pending]: handlePending,

    [fetchItem.fulfilled]: handleFulfilled,
    [addTopic.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.topic.items.push({
        id: action.payload.id,
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    [deleteTopic.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.topic.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.topic.items.splice(index, 1);
    },

    [addTopic.rejected]: handleRejected,
    [fetchItem.rejected]: handleRejected,
    [deleteTopic.rejected]: handleRejected,
  },
});

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  filterTopic,
} = topicSlice.actions;

export default topicSlice.reducer;
