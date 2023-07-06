import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function FormExample5()  {

    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [rollNumber, setRollNumber] = useState('');
    let [password, setPassword] = useState('');

    const validateForm = async() => {
        if (firstName === '' || lastName === '' || rollNumber === '' || password === '') {
            toast.error('Please fill all the fields');

        } 
        else if(firstName.length < 3 || lastName.length < 3){
            toast.error('First Name and Last Name should be atleast 3 characters long');
        }
        else if(rollNumber.length !== 10){
            toast.error('Roll Number should be atleast 10 characters long');
        }
        else if(password.length < 8){
            toast.error('Password should be atleast 8 characters long');
        }
        else {
            axios.post('http://localhost:3000/api/signup', { firstName : firstName, lastName : lastName, rollNumber : rollNumber, password : password, "test" : "HERo" })
            .then((response) => {
                if(response?.data?.msg === 'User already exists'){
                    toast.warn('User already exists');
                }
                else{
                    toast.success('Successfully Signed Up');
                }
            })
            .catch((error) => {
                console.log(error);
                toast.error('Error Signing Up');
            });
        }
    }

    // const sampleObj = [
    //     {
    //         "title": "This is a sample event",
    //         "description": "This is a sample event",
    //         "location": "This is a sample location",
    //         "event_start": "2020-07-20T18:30:00.000Z",
    //         "event_end": "2020-07-20T18:30:00.000Z",
    //         "event_organiser": "5f15b0b1e1b9a71b1c4b0b1c"
    //     },
    //     {
    //         "title": "This is a sample event",
    //         "description": "test",
    //         "location": "This is a sample location",
    //         "event_start": "2020-07-20T18:30:00.000Z",
    //         "event_end": "2020-07-20T18:30:00.000Z",
    //         "event_organiser": "5f15b0b1e1b9a71b1c4b0b1c"
    //     }
    // ]



    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-emerald-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase udnerline">
                    Sign UP
                </h1>



                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Firstname
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setFirstName(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />

                    </div>
                    {/* <div className="mb-2">
                        {sampleObj.map((item, index) => (
                            <div className="pt-2" key={index}>
                                <h1>EVENT TITLE : {item.title}</h1>
                                <h1>EVENT DESCRIPTION : {item.description}</h1>
                                <h1>EVENT LOCATION : {item.location}</h1>
                                <h1>EVENT START : {item.event_start}</h1>
                                <h1>EVENT END : {item.event_end}</h1>
                                <h1>EVENT ORGANISER : {item.event_organiser}</h1>
                            </div>
                        ))}
                    </div> */}
                    <div className="mb-2">
                        <label
                            
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Lastname
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setLastName(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Roll Number
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setRollNumber(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                          
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button type="button" onClick={validateForm} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                            Sign Up
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <Link to='/login'>
                    <a
                        href="#"
                        className="font-medium text-indigo-600 hover:underline"
                    >
                        Sign in
                    </a></Link>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
}
