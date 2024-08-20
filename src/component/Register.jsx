import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Register = ({openLogIn}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [err, setErr] = useState(null)
    const navigate = useNavigate()

    const [inputs, setInputs] = useState({
      username:'',
      email: '',
      password:'',
      password2:''
    })

    const handleChange =  (e) =>{
      const {name, value} = e.target
      setInputs((prev) => ({...prev, [name]: value, }))

      // console.log(inputs)

    } 

    const handleSubmit = async (e) =>{
      e.preventDefault()
      if(password  !== password2){
        setErr("Password not matched");
        return
      }
      
      try {
        const res = await axios.post("http://localhost:3000/register", 
        {
          username: inputs.username,
          email: inputs.email,
          password: inputs.password
        })
        navigate("/login")
      } catch (err) {
        setErr(err.response.data || "Error registering user" )
      }
    }

    
  
    
  return (
    <div className="flex justify-center items-center min-h-screen gray-100 ">
      <div className="w-full max-w-sm bg-black bg-opacity-80 p-8 rounded-lg shadow-lg border-2 ">
        <h2 className="text-2xl font-rubik font-semibold mb-4">Sign In</h2>
        <form action="" onSubmit={handleSubmit}>
          
          <div>
            <label htmlFor="username" className="block text-sm mb-4 font-medium">
              {" "}
              Username
            </label>
            <input
              type="username"
              value={inputs.username}
              placeholder="Enter Your Username"
              className="w-full p-2 rounded-md border"
              onChange={handleChange}
              name='username'
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mb-4 pt-4 font-medium">
              {" "}
              Email
            </label>
            <input
              type="email"
              value={inputs.email}
              placeholder="Enter Your Email"
              className="w-full p-2 rounded-md border"
              onChange={handleChange}
              name='email'
            />
          </div>
          <div className="relative">
            <label
              htmlFor=""
              className="block text-sm mb-4 mt-4 font-medium"
            >
              {" "}
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={inputs.password}
              onChange={ handleChange}
               name='password'
              
              placeholder="Enter Your Password"
              className="w-full p-2 rounded-md border text-black"
            />
            <div className="absolute top-12 right-4 text-black" onClick={()=> setShowPassword(!showPassword)}>
             
                {showPassword ? <FaEyeSlash /> : <FaEye />}
                
            </div>
          </div>
          <div className="relative">
            <label
              htmlFor="password2"
              className="block text-sm mb-4 mt-4 font-medium"
            >
              {" "}
              Re-Enter Password
            </label>
            <input
              type={showPassword2 ? "text" : "password"}
              value={inputs.password2}
              onChange={handleChange}
              name='password2'
              placeholder="Enter Your Password"
              className="w-full p-2 rounded-md border text-black"
            />
            <div className="absolute top-12 right-4 text-black" onClick={()=> setShowPassword2(!showPassword2)}>
             
                {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                
            </div>
          </div>
          

          <button type='submit' className="w-full p-2 mt-4 text-white rounded-lg bg-red-500" onClick={handleSubmit}>Sign In</button>
            {err && <p className='text-red-500'>{err}</p> }
            <div className='flex justify-between items-center py-4 mr-2'>
                <span>Already have an account?</span>
            <Link   className=' text-red-400' onClick={openLogIn}>Sign in</Link>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Register