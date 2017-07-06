import {resolvers} from "./resolvers";

// import {buildSchema} from "graphql/utilities/buildASTSchema";
import {makeExecutableSchema} from 'graphql-tools';
import gql from "graphql-tag";
import {Database} from "../database/Database";


const typeDefinition = gql`
    #This is a genius item

    type Author {
        _id: String!
        firstName: String
        lastName: String
    }

    type Query {
        authors: [Author]
    }
    
    type Mutation{
        createAuthor(firstName: String, lastName: String): Author
    }
    
    schema {
        query: Query
        mutation: Mutation
    }
`;


export function schema(database: Database) {
  return makeExecutableSchema({
    typeDefs: typeDefinition,
    resolvers: resolvers(database),
  })
}