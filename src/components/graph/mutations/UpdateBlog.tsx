import { gql } from "@apollo/client";

export const updateBlogDocument = gql`
  mutation UpdateBlog($id: String!, $input: BlogInput!) {
    updateBlog(id: $id, input: $input) {
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
