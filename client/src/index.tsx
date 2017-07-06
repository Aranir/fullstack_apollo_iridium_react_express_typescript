

import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';
import App from './App';
import * as React from 'react';
import * as ReactDOM from 'react-dom';



console.log("we got called");

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:4000/graphql',
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  ,
  document.getElementById("root")
);