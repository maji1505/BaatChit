
import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { NavLink } from 'react-router-dom'
import useSignup from '../../hooks/useSignup';

function Signup() {

	const [inputs,setInputs]=useState({
		userName:"",fullName:"",password:"",confirmPassword:"",gender:""
	});

	const {loading,signup}=useSignup();

	const handleCheckboxChange=(gender)=>{
		setInputs({...inputs,gender})
	}

	const handleSubmit=async(e)=>{
		e.preventDefault();
		const data= await signup(inputs);
 console.log(data);

	}

  return (
    <div className='flex flex-col items-center justify-center min-w-80 mx-auto'>
			<div className='w-full p-6 pt-3 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
 					SignUp <span className='text-blue-500'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
 					<div>
 						<label className='label p-2 pb-1' htmlFor='fullname'>
 							<span className='text-base label-text'>Full Name</span>
 						</label>
						<input type='text' id='fullname'  name='fullName' placeholder='Enter Name'
						 className='w-full input input-bordered  h-10'
						 value={inputs.fullName}
						 onChange={(e)=>{  setInputs({...inputs,fullName:e.target.value})}}
						 />
					</div>

					<div>
						<label className='label p-2 pb-1 ' htmlFor='username'>
							<span className='text-base label-text'>Username</span>
						</label>
						<input type='text' id='username' placeholder='Enter username' className='w-full input input-bordered h-10'
						value={inputs.userName}
						onChange={(e)=>setInputs({...inputs,userName:e.target.value})}
						/>
					</div>

				<div>
						<label className='label p-2 pb-1' htmlFor='password'><span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password' id='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={inputs.password}
						 onChange={(e)=>setInputs({...inputs,password:e.target.value})}
						/>
					</div>

					<div>
						<label className='label p-2 pb-1' htmlFor='confirm'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<input
							type='password' id='confirm'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
							value={inputs.confirmPassword}
						 onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
						/>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

					<NavLink className='text-sm hover:underline hover:text-blue-600 mt-0 inline-block' to='/login'>
						Already have an account?
					</NavLink>

					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700' 
						 disabled={loading}>
						{loading ? 'Signing Up...' : 'Sign Up'}
						</button>
					</div>
				</form>
			</div>
		</div>
  )
}

export default Signup