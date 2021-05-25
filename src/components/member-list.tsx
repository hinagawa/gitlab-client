import React from "react";
import { useQuery } from "@apollo/client";

import membersInfo from "../queries/members-info";

function MemberList() {
    const fullPath = document.location.pathname.substr(1,);
    console.log(fullPath);
    const { loading, error, data } = useQuery(membersInfo, {
        variables: {
            fullPath: fullPath,
        }
    });
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    console.log(data.project.name);
    var arr = data.project.projectMembers.nodes;
    console.log(arr);
    return (
        arr.map((obj, key) => {
            return (
                <div id={key} key={key}>
                    <p>{obj.user.name}</p>
                    <p>{obj.accessLevel.stringValue}</p>
                </div>
            )
        })
    )
}

export default MemberList;