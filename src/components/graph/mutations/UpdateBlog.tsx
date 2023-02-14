import { gql } from "@apollo/client";

export const updateBlogDocument = gql`
  mutation UpdateBlog($input: BlogInput!) {
    updateBlog(input: $input) {
      id
      createdAt
      updatedAt
      authorId
      content
      title
      subtitle
      category
    }
  }
`;

export default updateBlogDocument;
