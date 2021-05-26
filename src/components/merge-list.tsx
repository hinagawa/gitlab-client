import React from "react";
import { useQuery } from "@apollo/client";

import MergeInfo from "../queries/merge-requests-info";
import Loading from "../components/loading/loading";

function MergeList() {
    const fullPath = "cryptsetup/cryptsetup"; //edit
    const { loading, error, data } = useQuery(MergeInfo, {
        variables: {
            fullPath: fullPath
        }
    })
    if (loading) return <><Loading /></>
    if (error) return <p>Error: {error.message}</p>
    var arr = data.project.mergeRequests.nodes;
    return (
        arr.map((obj, key) => {
            return (
                <div className="merge__div" key={key} id={key} >
                    <p>{obj.createdAt.substr(0,10)}</p>
                    <p>{obj.description.substr(0,20) + "..."}</p>
                    <p>{obj.author.name}</p>
                    <p>{obj.commitCount}  commits</p>
                </div>
            )
        })
    )
}

export default MergeList;