import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

function Login() {
    const [userName,setUserName]=useState();
    const [password,setPassword]=useState();

    const {loading,login}=useLogin();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await login(userName,password);
    } 
    return (
        <div className='flex flex-col items-center min-w-80 mx-auto'>
            <div className='w-full p-6  rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
        bg-opacity-0 backdrop-blur-lg'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Login
                    <span className='text-blue-500'> ChatApp</span>
                </h1>
                <form  onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2 pb-1' htmlFor="username">
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" id='username' placeholder='Enter username' 
                        className='w-full input input-bordered h-10'
                         onChange={(e)=>setUserName(e.target.value)} value={userName} />
                    </div>
                    <div>
                        <label className='label p-2 pb-1' htmlFor="password">
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="text" id='password' placeholder='Enter password' 
                        className='w-full input input-bordered h-10'
                        onChange={(e)=>setPassword(e.target.value)} value={password} />
                    </div>
                    <NavLink to="/signup" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'> 
                      {"Don't"} have an account?
                    </NavLink>
                    <div >
                        <button className='btn btn-block btn-sm mt-2' disabled={loading}>
                        {loading ? 'Login...' : 'Login'}
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login