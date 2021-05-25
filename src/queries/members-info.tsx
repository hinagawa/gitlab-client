import { gql } from "@apollo/client";

const members = gql`
query($fullPath: ID!) {
    project(fullPath:$fullPath) {
      description,
      name,
      lastActivityAt,
      projectMembers {
        nodes {
          accessLevel{
            stringValue
          },
          createdAt,
          createdBy{
            name
          },
          user{
            name
          }
        }
      }
    }
  }
`
export default members;