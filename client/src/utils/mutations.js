import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($input: LoginInput) {
    login(input: $input) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($input: AddUserInput) {
    addUser(input: $input) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: SaveBookInput) {
    saveBook(input: $input) {
      _id
      username
      savedbooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;