import { gql } from "@apollo/client";

const blogDocument = gql`
  query Blog($id: String!) {
    blog(id: $id) {
      id
      authorId
      createdAt
      updatedAt
      category
      title
      subtitle
      content
    }
  }
`;

export default blogDocument;
