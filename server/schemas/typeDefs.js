const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }
  
  type Book {
    bookId: String!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Query {
    me: User!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input AddUserInput {
    username: String!
    email: String!
    password: String!
  }

  input SaveBookInput {
    authors: [String]
    description: String
    title: String!
    bookId: String!
    image: String
    link: String
  }

  type Mutations {
    login(input: LoginInput): Auth
    addUser(input: AddUserInput): Auth
    saveBook(input: SaveBookInput): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;