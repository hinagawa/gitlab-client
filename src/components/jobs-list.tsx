import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import JobsInfo from "../queries/jobs-info";
import Loading from "../components/loading/loading";

function JobsList() {
    const fullPath = "test_hinagawa/new-test-project"; //edit
    const { loading, error, data } = useQuery(JobsInfo, {
        variables: {
            fullPath: fullPath
        }
    })
    if (loading) return <><Loading /></>
    if (error) return <p>Error: {error.message}</p>
    var arr = data.project.jobs.nodes;
    console.log(arr);

    return (
        arr.map((obj, key) => {
            return (
                <div className="pipelines__div" key={key} id={key} >
                    <p >{obj.status}</p>
                    <p>{obj.name}</p>
                    <p className="jobs__label">{obj.tags}</p>
                      <p>{obj.refName}</p>  
                      <p>{obj.stage.name}</p>
                   </div>
            )
        })
    )
}

export default JobsList;