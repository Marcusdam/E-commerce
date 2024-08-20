import axios from "axios";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = ({openSignUp}) => {

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(null)
    const navigate = useNavigate()

    const [inputs, setInputs] = useState({
      email: '',
      password:''
    })

    const handleChange =  (e) =>{
      const {name, value} = e.target
      setInputs((prev) => ({...prev, [name]: value, }))

      // console.log(inputs)

    } 

    const handleSubmit = async (e) =>{
      e.preventDefault()
      
      
      try {
        const res = await axios.post("http://localhost:3000/login", 
        {
          
          email: inputs.email,
          password: inputs.password
        })
        navigate("/")
      } catch (err) {
        setErr(err.response.data || "Error registering user" )
      }
    }

  return (
    
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-sm bg-black bg-opacity-80  p-8 rounded-lg shadow-lg border-2">
        <h2 className="text-2xl font-rubik font-semibold mb-4">Sign In</h2>
        <form action="">
          <div>
            <label htmlFor="email" className="block text-sm mb-4 font-medium">
              {" "}
              Email
            </label>
            <input
              type="email"
              name="username"
              placeholder="Enter Your Email"
              className="w-full p-2 rounded-md border text-black"
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm mb-4 mt-4 font-medium"
            >
              {" "}
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              name="password"
              onChange={handleChange}
              placeholder="Enter Your Password"
              className="w-full p-2 rounded-md border text-black"
            />
            <div className="absolute top-12 right-4 text-black" onClick={()=> setShowPassword(!showPassword)}>
             
                {showPassword ? <FaEyeSlash /> : <FaEye />}
                
            </div>
          </div>
          <div className="flex justify-between  items-center mt-4">
            <Link className="text-red-700 font-semibold">
              Forgot Password?
            </Link>
            
          </div>
          <button className="w-full p-2 mt-4 text-white bg-red-500 rounded-lg hover:bg-red-600" onClick={handleSubmit}>Sign In</button>
          {err && <p className='text-red-500'>{err}</p> }
          <div className='flex justify-between items-center py-4 mr-2'>
                <span>Don't have an account?</span>
            <Link   className=' text-red-400' onClick={openSignUp } >Sign Up</Link>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
