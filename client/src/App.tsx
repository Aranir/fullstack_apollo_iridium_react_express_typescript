import * as React from "react";
import gql from "graphql-tag";
import {withApollo} from "react-apollo";
import graphql from "react-apollo/lib/graphql";


const authors = gql`{
    authors {
        _id
        firstName
        lastName
    }

}`;

interface Author {
  _id: string
  firstName: string
  lastName: string
}

interface AppProps {
  data?: {
    authors: Author[];
    loading: boolean;
  }
}




class App extends React.Component<AppProps, {}> {


  render() {

    let authors = this.props.data.authors;
    console.log(authors);
    if (authors != null) {
      return (<div>
          <h1>Its Me again</h1>
            {authors.map((a: Author) => this.renderAuthors(a))}
        </div>
      )
    } else {
      return (
        <div>
          <h1>Its Me again</h1>
        </div>
      )
    }
  }

  renderAuthors(author: Author) {
    return (<p key={author._id}>{author.firstName} {author.lastName}</p>)
  }
}

export default withApollo(graphql<any>(authors)(App))