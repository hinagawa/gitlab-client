import React from "react";
import { useQuery } from "@apollo/client";

import MergeInfo from "../queries/merge-requests-info";

function MergeList() {
    const fullPath = "cryptsetup/cryptsetup"; //edit
    const { loading, error, data } = useQuery(MergeInfo, {
        variables: {
            fullPath: fullPath
        }
    })
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    var arr = data.project.mergeRequests.nodes;
    return (
        arr.map((obj, key) => {
            return (
                <div className="merge__div" key={key} id={key} >
                    <p>{obj.commitCount}</p>
                    <p>{obj.createdAt}</p>
                    <p>{obj.description}</p>
                    <p>{obj.author.name}</p>
                </div>
            )
        })
    )
}

export default MergeList;