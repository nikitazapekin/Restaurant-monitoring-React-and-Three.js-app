
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, split } from '@apollo/client';
import { gql, useSubscription } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary.jsx';

const httpLink = new HttpLink({
  uri: 'http://localhost:5000/graphql',
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:5000/graphql`,
  options: {
    reconnect: true,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  </ErrorBoundary>
);
