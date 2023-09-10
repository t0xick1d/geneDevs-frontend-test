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
  'topic/addTopic',
  async (topic, thunkAPI) => {
    try {
      const response = await axios.post(`/api/topic/`, topic);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteQuestion = createAsyncThunk(
  'topic/deleteTopic',
  async (topicId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/topic/${topicId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
