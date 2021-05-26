import React from "react";
import { useQuery } from "@apollo/client";

import issueInfo from "../queries/issue-info";
import Loading from "../components/loading/loading";

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
                    <p>{obj.title.substr(0, 20) + "..."}</p>
                    {
                        obj.closedAt &&
                        <p className="closed__p">Closed</p>
                    }
                    {
                        !obj.closedAt &&
                        <p className="open__p">  Open</p>
                    }
                    <p>{obj.createdAt.substr(0, 10)}</p>
                    <p>{obj.author.username}</p>
                    <p>{obj.dueDate}</p>
                </div>
            )
        })
    )
}

export default IssueList;