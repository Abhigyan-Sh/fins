import React, { useState } from 'react'
import { RiLockPasswordLine } from 'react-icons/ri'
import { AiOutlineMail } from 'react-icons/ai'
import axios from '../axios.js'

const Login = () => {
      /* to make */
  const user = {}
      /* till here */
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async () => {
    try {
      const res = await axios.post('/api_v1/auth/login', {
        email,
        password,
      })
      /* to make */
      user = res
      /* till here */
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div class="bg-gradient-to-r from-red-500 to-red-300">
      <div class="flex h-screen text-gray-900">
        <div class="w-11/12 p-8 m-auto bg-white rounded-lg sm:w-96 bg-opacity-80 bg-clip-padding">
            <div class="space-y-2">
                <div>
                    <h1 class="text-2xl font-medium text-center md:text-4xl font-roboto">Welcome Back!</h1>
                </div>
                <div>
                    <div class="space-x-1 text-sm text-center md:text-base font-nunito">
                        <span>
                            New to SimpleForm?
                        </span>
                        {/* link to sign up pg */}
                        <a class="font-semibold text-blue-500" href="http://localhost:3000/register">Sign Up</a>
                    </div>
                </div>
            </div>
            <div class="mt-10">
                <form class="text-base font-nunito">
                    <div class="space-y-4">
                        <div class="relative flex items-center">
                          {/* email input */}
                            <AiOutlineMail className='absolute w-5 h-5 ml-3 text-gray-400'/>
                            <input
                                class="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                                type="email" 
                                placeholder="Email" 
                                required
                                value= {email}
                                onChange= {(e)=>{setEmail(e.target.value)}}/>
                        </div>
                        <div class="relative flex items-center">
                          {/* password input */}
                            <RiLockPasswordLine  className='absolute w-5 h-5 ml-3 text-gray-400'/>
                            <input
                                class="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                                type="password" 
                                placeholder="Password" 
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
                        <div>
                            <button
                                class="w-full p-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg"
                                onClick={handleSubmit}>
                                  Sign In</button>
                        </div>
                    </div>
                </form>
                <div class="mt-4">
                    <button
                        class="w-full p-2 text-sm font-normal text-center transition duration-100 bg-white rounded-md md:text-lg font-roboto focus:outline-none hover:shadow-lg">
                        <span class="flex items-center justify-center gap-4">
                            <img class="w-5 h-5 text-xs"
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