import {gql} from "@apollo/client";

const merge = gql`
query ($fullPath: ID!) {
    project(fullPath: $fullPath) {
         mergeRequests{
        nodes {
            author {
                name
            },
            commitCount,
            createdAt,
            description
        }
    }
    }
   
}
`

export default merge;