import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {RootState} from '../app/store';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3001/api/',
  prepareHeaders: (headers, {getState}) => {
    const {token} = (getState() as RootState).user;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

// const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 });

export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: [],
  endpoints: () => ({}),
});
