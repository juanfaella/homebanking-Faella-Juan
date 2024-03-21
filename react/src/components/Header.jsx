
import { Link } from 'react-router-dom';
import React,{useState} from "react";
import imgLogo from '../assets/logo.png'


export default function index() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push('/signin');
    };
    let arr = [true, false, false, false, false, false]
    const [style, setStyle] = useState(arr);
    const [dropDown, setDropDown] = useState(true);
    const [text, setText] = useState("");

    const selected = (props) => {
        let newArr = [...arr];
        for (let i = 0; i < newArr.length; i++) {
            newArr[i] = false;
        }
        newArr[props] = true;
        setStyle(newArr);
    }

    const setSelectedText = (txt) => {
        setText(txt);
        setDropDown(true);
    }

    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className="bg-white rounded shadow-lg py-5 px-7">
                <nav className="flex justify-between">
                    <div className="flex items-center space-x-3 lg:pr-16 pr-6">
                        <img className="w-12"src={imgLogo} alt="" />
                        <h2 className="font-normal text-2xl leading-6 text-gray-800">Finance Homebanking</h2>
                    </div>
                
                    <ul className="hidden md:flex flex-auto space-x-2">
                        <li className={`${style[0] ? 'font-bold text-white bg-indigo-600': 'font-bold text-gray-600 border border-white bg-gray-50'}  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>
                          <Link to="/home" className="block w-full h-full" onClick={() => selected(0)}>Accounts</Link>
                        </li>
                        <li className={`${style[1] ? 'font-bold text-white bg-indigo-600' : 'font-bold text-gray-600 border border-white bg-gray-50'}  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>
                          <Link to="/cards" className="block w-full h-full" onClick={() => selected(1)}>Cards</Link>
                        </li>
                        <li className={`${style[2] ? 'font-bold text-white bg-indigo-600' : 'font-bold text-gray-600 border border-white bg-gray-50'}  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>
                          <Link to="/loans" className="block w-full h-full" onClick={() => selected(2)}>Loans</Link>
                        </li>
                        <li className={`${style[3] ? 'font-bold text-white bg-indigo-600' : 'font-bold text-gray-600 border border-white bg-gray-50'}  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>
                          <Link to="/transaction" className="block w-full h-full" onClick={() => selected(3)}>Transaction</Link>
                        </li>
                    </ul>
                    {isLoggedIn && (
                        <Link to="/">
                            <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none" onClick={handleLogout}>
                                Logout
                            </button>
                        </Link>
                    )}
                </nav>
                
                <div className="block md:hidden w-full mt-5 ">
                    <div onClick={()=>setDropDown(!dropDown)} className="cursor-pointer px-4 py-3 text-white bg-indigo-600 rounded flex justify-between items-center w-full">
                        <div className="flex space-x-2">
                            <span id="s1" className={`${text.length != 0 ? '' : 'hidden'} font-semibold text-sm leading-3`}>Selected: </span><p id="textClicked" className="font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer ">{text ? text : "Collections"}</p>
                        </div>
                        <svg id="ArrowSVG" className={`${dropDown ? '' : 'rotate-180'} transform duration-100`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className=" relative">
                        <ul id="list" className={`${dropDown ? 'hidden' : 'block'} font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md`}>
                            <li onClick={()=>setSelectedText("Arts")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Arts</li>
                            <li onClick={()=>setSelectedText("Space")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Space</li>
                            <li onClick={()=>setSelectedText("Game")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Game</li>
                            <li onClick={()=>setSelectedText("Utility")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Utility</li>
                            <li onClick={()=>setSelectedText("Cards")} className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Cards</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );

}

