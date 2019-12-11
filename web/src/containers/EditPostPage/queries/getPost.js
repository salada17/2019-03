import { gql } from 'apollo-boost';

const GET_POST = gql`
  query Post($postURL: String!) {
    post(postURL: $postURL) {
      id
      content
      writer {
        username
      }
      imageURL
      postURL
    }
  }
`;

export default GET_POST;
