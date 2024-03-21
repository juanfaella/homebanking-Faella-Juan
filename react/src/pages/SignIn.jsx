import React, { useState } from "react";
import {Link, Navigate} from 'react-router-dom'
import axios  from "axios";
import { useDispatch } from "react-redux";
import {actions} from '../redux/actions/auth.actions'
import { useNavigate } from "react-router-dom";
import imgLogo from '../assets/logo.png'
import { toast, ToastContainer } from "react-toastify"


const SignIn = () => {
    const [userData, setUserData] = useState({email: '', password: ''})
    const dispatch = useDispatch()
    const {login, current} = actions
    const navigate = useNavigate();
    
    
    const handleSingIn = async (e) => {
        e.preventDefault()
        axios.post("/api/auth/login", userData)
        .then((res) =>{
    
          dispatch(login(res.data))
          if (res.data){
            axios.get("api/clients/current", {
              headers:{
                Authorization: `Bearer ${res.data}`
              }
            })
            .then((res) =>{
              console.log(res.data)
              dispatch(current(res.data))
              navigate('/home')
            } )
        }

        })

        .catch((err) => {console.log(err);
          toast.error("Failed to log in.");
        })
    }

    const handleInput = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value})
        console.log(userData)

    }
    return (
      <main>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-20 w-auto"
              src={imgLogo}
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSingIn} className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input onInput={handleInput}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={userData.email}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input onInput={handleInput}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={userData.password}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
            
              <Link className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" to="/signup">Register</Link>
            </p>
          </div>
        </div>
        <ToastContainer/>
      </main>
    )
}
export default SignIn;