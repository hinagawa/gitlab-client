import React from "react";
import { useQuery } from "@apollo/client";

import projectInfo from "../queries/project-info";
import Loading from "../components/loading/loading";

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
                <div id={key} key={key} className="project__div">
                    {
                        obj.avatarUrl &&
                        <img
                            src={obj.avatarUrl}
                            alt="project avatar"
                        ></img>
                    }
                    { !obj.avatarUrl &&
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Grey_Square.svg/1024px-Grey_Square.svg.png"
                            alt="project avatar"
                        >
                        </img>
                    }
                    <div className="project__a">
                    <a href={obj.fullPath}>
                        <p>{obj.name}</p>
                    </a>
                    <p>{obj.createdAt.substr(0,10)}</p>
                    </div>
                </div>
            )
        })
    )
}

export default PageList;