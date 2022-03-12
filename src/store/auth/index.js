import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
      baseUrl: "here",
      headers: {
          "x-auth-token": "yam",
          
      }
  }),
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (payload) => ({
        url: '/user/login',
        method: 'POST',
        body: payload
      })
    })
  })
});

export const { useUserLoginMutation } = authApi;
