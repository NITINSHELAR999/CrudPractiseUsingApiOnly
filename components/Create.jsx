import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Create.css';
import validator from "validator";

export default function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailerror] = useState("")

  const navigate  = useNavigate()
  
  // const handleClick = (e) => {
  //   setName(e.target.value)
  // }
  
  const handleClick2 = (e) => {
    let emailVal = e.target.value
    setEmail(emailVal)

    if(validator.isEmail(emailVal)){
      setEmailerror("*valid Email")
    }else {
      setEmailerror("*Enter Valid Email")
    }
  }
  
  const header = {"Access-Control-Allow-Origin" : '*'}

  const handleSubmit = (e) => {
  
    e.preventDefault()
    console.log('button clicked')
    if(name=="" || email==""){
      return alert('please fill the name or email')
    }
    axios.post('https://64a99dfb8b9afaf4844ae978.mockapi.io/crud-operation',{
        name:name,
        email:email,
        header
      }).then(() => {
        navigate('/read')
      })
  };


  return (
    <div className="form-container-crud m-5 p-5">
      <div className="create-btn-btn-primary"><Link to='/read'><button className="btn btn-primary btn-lg">Show Data</button></Link></div>
      <h2>Create</h2>
      <form >
        <div className="mb-3 mt-5">
          <label  className="form-label">
            Name
          </label>
          <input type="text" className="form-control" 
          onChange={(e) =>setName(e.target.value)} />
        </div>
        <div className="mb-3 ">
          <label  className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleClick2}
          />
          <span style={{color:'red', fontSize:"10px", fontWeight:"bold"}}>{emailError}</span>
        </div>
        
        <button type="submit" className="btn btn-primary btn-lg" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );

  }