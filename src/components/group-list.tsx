import React from "react";

import { useQuery } from "@apollo/client";
import groupInfo from "../queries/group-info";

function GroupList() {
    const username = localStorage.getItem('username');
    const { loading, error, data } = useQuery(groupInfo, {
        variables: {
            username: username,
        }
    });
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    const arr = data.user.groupMemberships.nodes;
    return (
        arr.map((obj, key) => {
            return (
                <div id={key} key={key}>
                    <a href={obj.group.fullPath}>
                        <h2>{
                            obj.group.fullName}
                        </h2>
                    </a>
                    <a>
                        {obj.group.visibility}
                    </a>
                </div>
            )
        })
    )
}

export default GroupList;