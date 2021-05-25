import { gql } from "@apollo/client";

const project = gql`
query ($fullPath: ID!) {
  group(fullPath: $fullPath) {
    projects {
    nodes {
    avatarUrl,
    createdAt,
    name,
    archived,
    fullPath
     }
    }
   }
  }
`

export default project;