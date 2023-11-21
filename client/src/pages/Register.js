import React, { useState } from 'react'
/* base design credit goes to a github friend */
import { AiOutlineUserAdd, AiOutlineMail } from 'react-icons/ai'
import { BiBuilding } from 'react-icons/bi'
import { GiSunglasses } from 'react-icons/gi'
import { RiLockPasswordLine } from 'react-icons/ri'
import axios from '../axios.js'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [profilePic, setProfilePic] = useState('')
  const [profession, setProfession] = useState('')
  const [institute, setInstitute] = useState('')
  const [lives_in, setLives_in] = useState('')
  const [aboutMe, setAboutMe] = useState('')
  
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const res = await axios.post('/api_v1/auth/register', {
        username,
        email,
        password,
        profession,
        institute,
        lives_in,
        aboutMe
      })
      localStorage.removeItem('user_token')
      res && window.location.replace("/login");
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="bg-gradient-to-r from-red-500 to-red-300">
    <div className="flex h-screen text-gray-900">
        <div className="w-11/12 p-8 m-auto bg-white rounded-lg sm:w-96 bg-opacity-80 bg-clip-padding">
            <div className="space-y-2">
                <div>
                    <h1 className="text-2xl font-medium text-center md:text-4xl font-roboto">Create Account</h1>
                </div>
                <div>
                    <div className="space-x-1 text-sm text-center md:text-base font-nunito">
                        <span>
                            Already have an account?
                        </span>
                        {/* link to sing in pg */}
                        <a className="font-semibold text-blue-500" href='http://localhost:3000/login'>Sign In</a>
                    </div>
                </div>
            </div>
            <div className="mt-10">
              {/* form */}
                <form className="text-base font-nunito">
                    <div className="space-y-4">
                        <div className="relative flex items-center">
                            <AiOutlineMail className='absolute w-5 h-5 ml-3 text-gray-400'/>
                            {/* input 1/5 */}
                            <input
                                className="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                                type="email" 
                                placeholder="Email" 
                                required
                                value={email} 
                                onChange={(e) => {setEmail(e.target.value)}}/>
                        </div>
                        <div className="relative flex items-center">
                            <RiLockPasswordLine className='absolute w-5 h-5 ml-3 text-gray-400'/>
                            {/* input 2/5 */}
                            <input
                                className="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                                type="password" 
                                placeholder="Password" 
                                required
                                value ={password}
                                onChange={(e) => {setPassword(e.target.value)}}
                                autoComplete='on'
                                />
                        </div>
                        <div className="relative flex items-center">
                            <AiOutlineUserAdd className='absolute w-5 h-5 ml-3 text-gray-400'/>
                            {/* input 3/5 */}
                            <input
                                className="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                                type="text" 
                                placeholder="username" 
                                required
                                value={username} 
                                onChange={(e) => {setUsername(e.target.value)}}/>
                        </div>
                        <div className="relative flex items-center">
                            <BiBuilding className='absolute w-5 h-5 ml-3 text-gray-400'/>
                            {/* input 4/5 */}
                            <input
                                className="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                                type="text" 
                                placeholder="profession" 
                                value={profession} 
                                onChange={(e) => {setProfession(e.target.value)}}/>
                        </div>
                        <div className="relative flex items-center">
                            <GiSunglasses className='absolute w-5 h-5 ml-3 text-gray-400'/>
                            {/* input 5/5 */}
                            <input
                                className="w-full p-2 pl-10 text-gray-800 placeholder-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                                type="text" 
                                placeholder="institute" 
                                value={institute} 
                                onChange={(e) => {setInstitute(e.target.value)}}/>
                        </div>
                        {/*//@dev::: TERMS OF SERVICE AND CONDITIONS */}
                        {/* <div class="flex items-start space-x-2 md:items-center">
                            <input class="focus:outline-none" type="checkbox" id="serviceTerms"/>
                            <label class="-mt-1 text-sm sm:mt-0" for="serviceTerms">
                                <span>I have read and agree to the</span>
                                <a class="font-semibold text-blue-500" href="">Terms&nbsp;of&nbsp;Service</a>
                            </label>
                        </div> */}
                        <div>
                          {/* handleSubmit runs */}
                            <button 
                              className="w-full p-2 text-sm font-semibold text-center text-white transition duration-100 rounded-md md:text-lg font-nunito bg-gradient-to-r from-blue-600 to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-lg"
                              onClick={handleSubmit}>
                              Sign Up</button>
                        </div>
                    </div>
                </form>
                <div className='flex justify-center items-center mt-4'>
                  <p>or continue with</p>
                </div>
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

export default Register