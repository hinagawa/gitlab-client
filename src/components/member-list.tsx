import React from "react";
import { useQuery } from "@apollo/client";

import membersInfo from "../queries/members-info";
import Loading from "../components/loading/loading";

function MemberList() {
    const fullPath = "cryptsetup/cryptsetup"; // edit
    const { loading, error, data } = useQuery(membersInfo, {
        variables: {
            fullPath: fullPath,
        }
    });
    if (loading) return <><Loading /></>
    if (error) return <p>Error: {error.message}</p>
    var arr = data.project.projectMembers.nodes;
    return (
        arr.map((obj, key) => {
            return (
                <div id={key} key={key} className="member__div">
                    <p>{obj.user.name}</p>
                    <p>{obj.accessLevel.stringValue}</p>
                    { obj.user.avatarUrl &&
                        <img
                            src={obj.user.avatarUrl}
                            alt="user avatar"
                        ></img>
                    }
                    { !obj.user.avatarUrl &&
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Grey_Square.svg/1024px-Grey_Square.svg.png"
                            alt="user avatar"
                        >
                        </img>
                    }

                </div>
            )
        })
    )
}

export default MemberList;