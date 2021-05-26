import {gql} from "@apollo/client";

const issue= gql`
query ($fullPath: ID!) {
    project(fullPath: $fullPath) {
        issues {
            nodes {
              author{
                username
              },
              closedAt,
              createdAt,
              title,
              dueDate,
              labels{
                nodes {
                  color,
                  title
                }
              }
              
              
            }
            
          }
    }
   
}
`

export default issue;