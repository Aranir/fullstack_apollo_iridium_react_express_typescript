
import {Core, Model} from "iridium";
import {Author, AuthorDocument} from "../models/Authors";


export class Database extends Core {
  Authors = new Model<AuthorDocument, Author>(this, Author);


  onConnected() {
    return Promise.all([
      this.Authors.ensureIndexes()
    ]).then(() => {});
  }
}