import React, { useState } from "react";
import axios from "axios"
import {API_ENDPOINT} from "./API"
const Home = ()=>{
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState("")
  const [url, setUrl] = useState("")
  const submit = ()=>{
    axios.post(`${API_ENDPOINT}/`, {longURL: url}).then((res)=>{
      setUrl("")
      setMessage(`${window.location.protocol}//${window.location.host}/#/${res.data.instance.short_url}`)
      setSuccess(true)
      document.getElementById("URLInput").value = ""
    }).catch(err =>{
      setMessage(err.response.data.message ? err.response.data.message : "Something went wrong!")
      setError(true)
    })
  }
  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-header text-center py-3">
          <h1>Shawtify <i className="fas fa-link px-2" /></h1>
        </div>
        <div className="px-3 py-4">
          <form>
            <div className="row g-1">
              <div className="col-9">
                <input type="url" className="form-control form-control-lg" id="URLInput" placeholder="Your URL to shorten" required onChange={(e)=> setUrl(e.target.value)} />
              </div>
              <div className="col-2">
                <button style={{marginLeft: "40px"}} className="btn btn-success btn-lg w-100"type="submit" onClick={(e)=> {
                  e.preventDefault()
                  setError(false)
                  setSuccess(false)
                  submit()
                }}>
                  Shorten
                </button>
              </div>
            </div>
          </form>
          {success ? <div className="mx-auto text-center mt-5">
            <h2 className="text-danger">Your shortened URL </h2>
            <p>You can share the URL with your friends!</p>
            <p>{message}</p>
          </div> : <></>}
          {error ? <div className="alert alert-danger mt-4" role="alert">
              <p>{message}</p>
            </div> : <></>}
        </div>
      </div>
    </div>
  )
}

export default Home;