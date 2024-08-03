import React from 'react'

function Login() {
    return (
        <div className='flex flex-col items-center min-w-80 mx-auto'>
            <div className='w-full p-6  rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
        bg-opacity-0 backdrop-blur-lg'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Login
                    <span className='text-blue-500'> ChatApp</span>
                </h1>
                <form action="#">
                    <div>
                        <label className='label p-2' for="username">
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" id='username' placeholder='Enter username' 
                        className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label p-2' for="password">
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="text" id='password' placeholder='Enter password' 
                        className='w-full input input-bordered h-10' />
                    </div>
                    <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'> 
                      {"Don't"} have an account?
                    </a>
                    <div >
                        <button className='btn btn-block btn-sm mt-2'>Login</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login