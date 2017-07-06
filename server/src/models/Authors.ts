import {Core, Model, Instance, Collection, Index, Property, ObjectID}  from "iridium";

export interface AuthorDocument {
  _id?: string;
  firstName: string;
  lastName: string;
}


@Collection('authors')
export class Author extends Instance<AuthorDocument, Author> implements AuthorDocument {
  @ObjectID _id: string;

  @Property(String)
  firstName: string;

  @Property(String)
  lastName: string;

}

