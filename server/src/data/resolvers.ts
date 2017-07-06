import {Author, AuthorDocument} from "../models/Authors";
import {Database} from "../database/Database";

export function resolvers(database: Database) {


  return {
    Query: {
      async authors(obj, args, context, info) {
        return await database.Authors.find({}).map(a => a.document);;
      },
    },
    Mutation: {
      async createAuthor(root, {firstName, lastName}) {
        let newAuthor: AuthorDocument = {
          firstName: firstName,
          lastName: lastName
        };

        return await database.Authors.insert(newAuthor).then(a => a.document);

      }
    }
  }
}
