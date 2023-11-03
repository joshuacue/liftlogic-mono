import { GraphQLClient } from 'graphql-request';
import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { HYDRATE } from 'next-redux-wrapper';

export const client = new GraphQLClient(process.env.NEXT_PUBLIC_ENDPOINT as string);

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    client,
    customErrors: ({ name, stack, response }) => {
      return {
        name,
        stack,
        message: response.errors && response?.errors[0]?.message,
      };
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action['payload'][reducerPath];
    }
  },
  endpoints: () => ({}),
});
