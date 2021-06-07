import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import PipelinesInfo from "../queries/dashboard-info";
import Loading from "../components/loading/loading";

function PipelinesList() {
    const fullPath = "test_hinagawa/new-test-project"; //edit
    const { loading, error, data } = useQuery(PipelinesInfo, {
        variables: {
            fullPath: fullPath
        }
    })
    if (loading) return <><Loading /></>
    if (error) return <p>Error: {error.message}</p>
    var arr = data.project.pipelines.nodes;
    console.log(arr);

    return (
        arr.map((obj, key) => {
            return (
                <div className="pipelines__div" key={key} id={key} >
                    <p >{obj.status}</p>

                    <Link
                        to={obj.commitPath}
                        className="pipelines__link"
                    >
                        Commit
                      </Link>
                    <img src={obj.user.avatarUrl} alt={obj.user.username} title={obj.user.username}></img>
                </div>
            )
        })
    )
}

export default PipelinesList;