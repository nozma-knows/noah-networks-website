import { gql } from "@apollo/client";

export const createBlogDocument = gql`
  mutation CreateBlog($input: BlogInput!) {
    createBlog(input: $input) {
      id
      createdAt
      updatedAt
      authorId
      category
      title
      subtitle
      content
    }
  }
`;

export default createBlogDocument;
