import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { InMemoryCache } from "apollo-boost";
const wsLink = new WebSocketLink({
    uri: "ws://localhost:8080/graphql",
    options: {
        reconnect: true,
    },
})
const httpLink = new HttpLink({
    uri: "http://localhost:8080/graphql"
})
const link = split(
    ({query})=> {
        const definition = getMainDefinition(query)
        return (

            definition.kind ==='OperationDefinition' &&
            definition.operation === 'subscribtion'
        );
    },
    wsLink,
    httpLink,
)
export default new ApolloClient({
    cache: new InMemoryCache(),
    link
})