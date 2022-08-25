import React, { useState, useContext } from 'react'
import { RiLockPasswordLine } from 'react-icons/ri'
import { TiUserOutline } from 'react-icons/ti'
import axios from '../axios.js'
import { NoteContext } from '../context/NoteContext.js'

const Login = () => {
    const context = useContext(NoteContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            axios.post('/api_v1/auth/login', {
              username,
              password,
            })
            .then((res) => {
                context.setToken(res.data)
                // console.log(context.token)
                // console.log(res.data)
                window.location.replace('http://localhost:3000/')
            })
            .catch((err) => {
                setMsg(err.response.data)
            })
        }   catch (err) {
            console.log(err)
        }
  }
  return (
    <div className="bg-gradient-to-r from-red-500 to-red-300">
      <div className="flex h-screen text-gray-900">
        <div className="w-11/12 p-8 m-auto bg-white rounded-lg sm:w-96 bg-opacity-80 bg-clip-padding">
            <div className="space-y-2">
                <div>
                    <h1 className="text-2xl font-medium text-center md:text-4xl font-roboto">Welcome Back!</h1>
                </div>
                <div>
                    <div className="space-x-1 text-sm text-center md:text-base font-nunito">
                        <span>
                            New to SimpleForm?
                        </span>
                        {/* link to sign up pg */}
                        <a className="font-semibold text-blue-500" href="http://localhost:3000/register">Sign Up</a>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <form className="text-base font-nunito">
                    <div className="space-y-4">
                        <div className="relative flex items-center">
                          {/* username input */}
                            <TiUserOutline className='absolute w-5 h-5 ml-3 text-gray-400'/>
                            <input
                                className="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                                type="text" 
                                placeholder="Username"
                                autoComplete="username" 
                                required
                                value= {username}
                                onChange= {(e)=>{setUsername(e.target.value)}}/>
                        </div>
                        <div className="relative flex items-center">
                          {/* password input */}
                            <RiLockPasswordLine  className='absolute w-5 h-5 ml-3 text-gray-400'/>
                            <input
                                className="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                                type="password" 
                                placeholder="Password" 
                                autoComplete="current-password"
                                required
                                value= {password}
                                onChange= {(e)=>{setPassword(e.target.value)}}/>
                        </div>
                        {/* <div class="flex items-start space-x-2 md:items-center">
                            <input class="focus:outline-none" type="checkbox" name="terms" id="serviceTerms"/>
                            <label class="-mt-1 text-sm sm:mt-0" for="serviceTerms">
                                <span>Remember Me</span>
                            </label>
                        </div> */}
                        {msg && (
                            <div className='flex justify-center items-center'>
                                <p className='text-rose-600'>{msg}</p>
                            </div>
                        )}
                        <div>
                            <button
                                className="w-full p-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg"
                                onClick={handleSubmit}>
                                  Sign In</button>
                        </div>
                    </div>
                </form>
                <div className="mt-4">
                    <button
                        className="w-full p-2 text-sm font-normal text-center transition duration-100 bg-white rounded-md md:text-lg font-roboto focus:outline-none hover:shadow-lg">
                        <span className="flex items-center justify-center gap-4">
                            <img className="w-5 h-5 text-xs"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
                                alt="google_logo"/>
                            <span>Continue with Google</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Login