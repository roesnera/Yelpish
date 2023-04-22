import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


/* TODO: authentication, CORS headers on ApolloClient */

const client = new ApolloClient({
    uri: 'https://api.yelp.com/v3/graphql',
    cache: new InMemoryCache(),
  });


client
.query({
query: gql`
    query GetLocations {
    locations {
        id
        name
        description
        photo
    }
    }
`,
})
.then((result) => console.log(result));

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(
<App />
)