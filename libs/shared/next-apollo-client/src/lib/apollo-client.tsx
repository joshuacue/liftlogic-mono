import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from '@apollo/client';
import { useMemo } from 'react';

let apolloClient: ApolloClient<any>;

function initializeApollo(initialState: any = null) {
  const ssrMode = typeof window === 'undefined';
  const cache = new InMemoryCache().restore(initialState || {});
  const link = new HttpLink({
    uri: 'http://localhost:8000/api/graphql',
  });

  const _apolloClient =
    apolloClient ??
    new ApolloClient({
      ssrMode,
      link,
      cache,
      connectToDevTools: true,
    });

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (ssrMode) return _apolloClient;

  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}

interface ApolloClientProviderProps {
  children: React.ReactNode;
  initialState: any;
}

export function ApolloClientProvider({
  children,
  initialState,
}: ApolloClientProviderProps) {
  const client = useApollo(initialState);
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
