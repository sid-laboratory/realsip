import { useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from '../urls'
import axios from 'axios';


export default function Login() {
    const [email, SetEmail] = useState('');
    const [password, setPassword] = useState('');
    const HandleLogin = () => {
        try{
            console.log("MAKING REQ");
            axios.post(BASE_URL + 'login', { email , password : password, "test" : "HERo" })
            .then((response) => {
                if(response && response.data && response.data.token){
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("user", JSON.stringify(response.data.user));
                    window.location.href = '/';
                }
            })
            .catch((error) => {
                console.log(error);
            });
        }
        catch(err){
            console.error(err);
        }
    }
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-blue-800 underline">
                  Login
                </h1>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            onChange={(e) => SetEmail(e.target.value)}
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-blue-800 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button  onClick={HandleLogin} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-900 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-900">
                            Login
                        </button>
                    </div>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                   
                    Dont have an account?
                    <Link to='/signup'>
                    <button 
                        className="font-medium  hover:underline"
                    >
                        Sign up
                    </button>
                    </Link>
                </p>
            </div>
        </div>
    );
}
