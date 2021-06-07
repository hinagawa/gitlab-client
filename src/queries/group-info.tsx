import { gql } from '@apollo/client';

const group = gql`
query ($username: String!){
    user(username:$username) {
      groupCount,
      groupMemberships{
        nodes{
          group{
            id,
            avatarUrl,
            description,
            fullName,
            fullPath,
            visibility
          }
        }
      }
    }
  }
`
export default group;