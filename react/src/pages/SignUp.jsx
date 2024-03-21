import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { actions } from '../redux/actions/auth.actions'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"


const SignUp = () => {
    const [userData, setUserData] = useState({ firstName: '', lastName: '', email: '', password: '' });
    const dispatch = useDispatch();
    const { login, current } = actions;
    const navigate = useNavigate();
    
    const handleSignUp = async (e) => {
        e.preventDefault();
        axios.post("/api/auth/register", userData)
            .then((res) => {
                console.log(res.data);
                navigate('/signin')
                 toast.success("Register OK");

            })
            .catch((err) => {
                console.log(err);
            });
    }

    const handleInput = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }
    
    return (
        <main>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign up for an account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSignUp} className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                                First Name
                            </label>
                            <div className="mt-2">
                                <input onInput={handleInput}
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    autoComplete="firstName"
                                    value={userData.firstName}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                                Last Name
                            </label>
                            <div className="mt-2">
                                <input onInput={handleInput}
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    autoComplete="lastName"
                                    value={userData.lastName}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

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
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-2">
                                <input onInput={handleInput}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
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
                                Sign up
                            </button>
                        </div>
                    </form>
    
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account?{' '}

                        <Link className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" to="/signin">Sign in</Link>
                        
                    </p>
                </div>
            </div>
        <ToastContainer/>
        </main>
    );
}

export default SignUp;
