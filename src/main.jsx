import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider >,
)
//yarn add subscriptions-transport-ws @apollo/client
 





/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink, split } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

// Создание HTTP ссылки
const httpLink = createHttpLink({
  uri: 'http://localhost:5000/graphql',
});

// Создание WebSocket ссылки
const wsLink = new WebSocketLink({
  uri: `ws://localhost:5000/graphql`,
  options: {
    reconnect: true,
  },
});

// Разделение ссылок для HTTP и WebSocket
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

// Middleware для добавления заголовков в запросы
const authLink = setContext((_, { headers }) => {
  // Получение токена авторизации из localStorage или любого другого места
  const token = localStorage.getItem('token');
  // Возврат объекта с заголовками
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Обработка ошибок
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
    });
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

// Соединение всех ссылок в цепочку
const link = authLink.concat(errorLink).concat(splitLink);

// Создание клиента Apollo
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

// Рендеринг приложения
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
*/