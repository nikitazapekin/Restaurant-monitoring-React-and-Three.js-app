/*import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { gql, useSubscription } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';

//const client = new ApolloClient({
 //   uri: 'http://localhost:5000/graphql',
 //   cache: new InMemoryCache()
//}) 
const wsLink = new WebSocketLink({
  uri: `ws://localhost:5000/graphql`,
  options: {
    reconnect: true,
  },
});

const client = new ApolloClient({
  link: wsLink,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider >,
)
*/


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, split } from '@apollo/client';
import { gql, useSubscription } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

// HTTP Link
const httpLink = new HttpLink({
  uri: 'http://localhost:5000/graphql',
});

// WebSocket Link
const wsLink = new WebSocketLink({
  uri: `ws://localhost:5000/graphql`,
  options: {
    reconnect: true,
  },
});

// Split Link
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

// Apollo Client
const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

// Render
ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
