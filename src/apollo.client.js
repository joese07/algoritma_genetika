import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: "https://project-skripsi.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "8mBWVZsTp07OzEtAps12jjW9wws4XGqFu16Yyeakrqnr0Cn9a1cKp9PTVT0hwvNE",
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "https://project-skripsi.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "8mBWVZsTp07OzEtAps12jjW9wws4XGqFu16Yyeakrqnr0Cn9a1cKp9PTVT0hwvNE",
      },
    },
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
