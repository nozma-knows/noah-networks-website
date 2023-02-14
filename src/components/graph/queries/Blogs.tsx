import { gql } from "@apollo/client";

const blogsDocument = gql`
  query Blogs {
    blogs {
      id
      createdAt
      category
      title
      subtitle
      content
      authorId
    }
  }
`;

export default blogsDocument;
