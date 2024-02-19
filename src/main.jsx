import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
//import './index.css'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
/*const apiHost = process.env.REACT_APP_PORT;
console.log("PORT"+apiHost) */
const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider >,
)
