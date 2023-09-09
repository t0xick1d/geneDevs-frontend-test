import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchItem = createAsyncThunk('c', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`/api/topic/`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
export const addTopic = createAsyncThunk(
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
export const deleteTopic = createAsyncThunk(
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
