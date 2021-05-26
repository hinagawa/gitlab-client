import React from "react";
import { useQuery } from "@apollo/client";

import issueInfo from "../queries/issue-info";
import Loading from "../components/loading";

function IssueList() {
    const fullPath = "cryptsetup/cryptsetup";
    const { loading, error, data } = useQuery(issueInfo, {
        variables: {
            fullPath: fullPath,
        }
    });
    if (loading) return <><Loading /></>
    if (error) return <p>Error: {error.message}</p>
    var arr = data.project.issues.nodes;
    return (
        arr.map((obj, key) => {
            return (
                <div id={key} key={key} className="issue__div">
                    <p>{obj.title}</p>
                    <p>{obj.closedAt}</p>
                    <p>{obj.createdAt}</p>
                    <p>{obj.author.username}</p>
                    <p>{obj.dueDate}</p>
                </div>
            )
        })
    )
}

export default IssueList;