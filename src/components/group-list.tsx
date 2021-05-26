import React from "react";

import { useQuery } from "@apollo/client";
import groupInfo from "../queries/group-info";
import Loading from "../components/loading/loading";

function GroupList() {
    const username = localStorage.getItem('username');
    const { loading, error, data } = useQuery(groupInfo, {
        variables: {
            username: username,
        }
    });
    if (loading) return <><Loading /></>
    if (error) return <p>Error: {error.message}</p>
    const arr = data.user.groupMemberships.nodes;
    return (
        arr.map((obj, key) => {
            return (
                <div id={key} key={key} className="group__div">
                    { obj.group.avatarUrl &&
                        <img
                            src={obj.group.avatarUrl}
                            alt="group avatar"
                        ></img>
                    }
                    { !obj.group.avatarUrl &&
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Grey_Square.svg/1024px-Grey_Square.svg.png"
                            alt="group avatar"
                        >
                        </img>
                    }
                    <div className="group__div_a">
                        <a href={obj.group.fullPath}>
                            {obj.group.fullName}
                        </a>
                        <a className="group__vis">
                            {obj.group.visibility}
                        </a>
                    </div>
                </div>
            )
        })
    )
}

export default GroupList;