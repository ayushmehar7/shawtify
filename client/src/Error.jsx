import React from "react";
import errorImage from "./error.svg"

const Error = ()=>{
    return (
        <div className="container">
            <div className="flex-column d-flex align-items-center mt-2 p-5">
                <img src={errorImage} alt="error" width="100" height="100"/>
                <h1 className="mt-2">Site not found!</h1>
            </div>
        </div>
    )
}

export default Error;