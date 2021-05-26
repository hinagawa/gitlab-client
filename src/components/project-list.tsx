import React from "react";
import { useQuery } from "@apollo/client";

import projectInfo from "../queries/project-info";
import Loading from "../components/loading";

function PageList() {
    const fullPath = document.location.pathname.substr(1,);
    const { loading, error, data } = useQuery(projectInfo, {
        variables: {
            fullPath: fullPath,
        }
    });
    if (loading) return <><Loading /></>
    if (error) return <p>Error: {error.message}</p>
    const arr = data.group.projects.nodes;
    return (
        arr.map((obj, key) => {
            return (
                <div id={key} key={key}>
                    {
                        obj.avatarUrl &&
                        <img
                            src={obj.avatarUrl}
                            alt="project avatar"
                        ></img>
                    }
                    <a href={obj.fullPath}>
                        <h2>{obj.name}</h2>
                    </a>
                    <p>{obj.createdAt}</p>
                    {
                        obj.archived && <p>Archived</p>
                    }

                </div>
            )
        })
    )
}

export default PageList;