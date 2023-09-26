import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const topicApi = createApi({
  reducerPath: 'topicApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://genedevs-backend-test.onrender.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    getTopic: builder.query({
      query: () => `/api/topic/`,
      method: 'GET',
      providesTags: ['Topic'],
    }),
    addTopic: builder.mutation({
      query(body) {
        return {
          url: `/api/topic/`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Topic'],
    }),
    deleteTopic: builder.mutation({
      query: id => ({
        url: `/api/topic/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Topic'],
    }),
  }),
});

export const { useGetTopicQuery, useAddTopicMutation, useDeleteTopicMutation } =
  topicApi;
