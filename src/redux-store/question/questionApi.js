import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const questionApi = createApi({
  reducerPath: 'questionsApi',
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
    getQuestion: builder.query({
      query: idTopic => `/api/question/${idTopic}`,
      method: 'GET',
      providesTags: ['Question'],
    }),
    addQuestion: builder.mutation({
      query(body) {
        return {
          url: `/api/question/`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Question'],
    }),
    deleteQuestion: builder.mutation({
      query: id => ({
        url: `/api/question/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Question'],
    }),
  }),
});

export const {
  useGetQuestionQuery,
  useAddQuestionMutation,
  useDeleteQuestionMutation,
} = questionApi;
