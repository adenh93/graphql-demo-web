import { gql } from "apollo-boost";
import { postFields } from "../fragments/post";

export const getPosts = gql`
  query {
    posts {
      ...postFields
    }
  }
  ${postFields}
`;

export const getPost = gql`
  query($id: ID!) {
    post(id: $id) {
      ...postFields
    }
  }
  ${postFields}
`;
