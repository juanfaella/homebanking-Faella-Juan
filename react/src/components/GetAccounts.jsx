import React from 'react';
import { Link } from 'react-router-dom';
import personImg from '../assets/person.jpg'

const GetAccounts = ({ id, number, creationDate, balance }) => {
  return (
    <div className="w-full flex items-center justify-center">
                <div className="xl:w-1/4 sm:w-1/2 w-full 2xl:w-1/5 flex flex-col items-center py-16 md:py-12 bg-gradient-to-r from-sky-950 to-slate-500 rounded-lg">
                    <div className="w-full flex items-center justify-center">
                        <div className="flex flex-col items-center">
                            <img src="https://cdn.tuk.dev/assets/templates/olympus/profile.png" alt="profile" />
                            <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center text-white">{number}</p>
                        </div>
                    </div>
                    <div className="flex items-center px-5">
                        <div>
                            <p className="text-xs text-gray-300">Id Account</p>
                            <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-50">{id}</p>
                        </div>
                        <div className="ml-12">
                            <p className="text-xs text-gray-300">Balance Account</p>
                            <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-50">${balance}</p>
                        </div>
                          <div className="ml-12">
                              <p className="text-xs text-gray-300">Date</p>
                              <p className="mt-2 text-base sm:text-base md:text-lg 2xl:text-xl text-gray-50">{creationDate}</p>
                          </div>
                    </div>
                    <Link className="my-5 p-2 rounded-full text-black bg-gradient-to-r from-white to-slate-300" to="/accounts/new">New Account</Link>
                </div>
    </div>
  );
};

export default GetAccounts;
