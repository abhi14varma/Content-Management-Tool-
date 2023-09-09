import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

 
const  Register = () => {
    const [inputs,setInputs] = useState({
        username:"",
        email:"",
        password:"",

    });

    const[err,setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
      };

      console.log(inputs);

      const handleSubmit = async (e) => {
        e.preventDefault();   // to use when click on button prevent refreshing all page
        try {
         // const res = await axios.post("/auth/register",inputs); if everything is okay after register 
         //console.log(res);                                        redirect to login page
          await axios.post("/auth/register",inputs);
          navigate("/login");

        } catch (err) {
          setError(err.response.data);
         // console.log(err);
        }
      };
    
    return(
        <div className="auth">
            <h1>Register page</h1>
            <form>
               
                Enter uid:
                <input required type="text" name="username" placeholder="username" onChange={handleChange}/> <br/>

                Enter Email:
                <input required type="email" name="email" placeholder="email" onChange={handleChange}/> <br/>

                Enter pwd:
                <input required type="password" name="password" placeholder="password" onChange={handleChange}/> <br/>
                <button onClick={handleSubmit}>Register </button>
                {err && <p>{err}</p>}
                <span>Do you have account <Link to="/login">Login</Link></span>
            </form>
        </div>
         
    )
}

export default Register;