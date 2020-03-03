import gql from "graphql-tag";

export const CREATE_POST = gql`
  mutation($data: CreatePostInput) {
    createPost(data: $data) {
      content
    }
  }
`;
