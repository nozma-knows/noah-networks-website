import { gql } from "@apollo/client";

const blogDocument = gql`
  query Blog($title: String!) {
    blog(title: $title) {
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
