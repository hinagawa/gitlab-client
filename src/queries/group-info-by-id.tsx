import { gql } from "@apollo/client";

const group_by_id = gql`
query group_id($fullPath: ID!) {
    group(fullPath: $fullPath) {
        avatarUrl,
        name
    }
}
`

export default group_by_id;