import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchItem = createAsyncThunk('c', async (idTopic, thunkAPI) => {
  try {
    const response = await axios.get(`/api/question/${idTopic}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
export const addQuestion = createAsyncThunk(
  '/api/question',
  async (topic, thunkAPI) => {
    try {
      const response = await axios.post(`/api/question/`, topic);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteQuestion = createAsyncThunk(
  'topic/deleteTopic',
  async (questionId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/question/${questionId}`);
      if ((response.message = '"Question deleted"')) {
        return (response.data.id = questionId);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
