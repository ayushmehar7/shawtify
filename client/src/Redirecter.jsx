import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import axios from "axios"
import { API_ENDPOINT } from "./API";
import Error from "./Error";

const Redirecter = ()=>{
    const {url} = useParams()
    const [error, setError] = useState(false)
    useEffect(()=>{
        axios.post(`${API_ENDPOINT}/redirect/`, {url}).then(res =>{
            const {long_url} = res.data.instance
            window.location.replace(long_url)
        }).catch(err=>{
            setError(true)
        })
    })
    if(error){
        return <Error />
    }
    return (
        <div className="container">
            <div className="card mt-5">
                <div className="card-header text-center py-3">
                    <h2>Thank You for using Shawtify <i className="fas fa-link px-2" /></h2>
                </div>
                <div className="card-body text-center">
                    <div id="wave">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Redirecter;