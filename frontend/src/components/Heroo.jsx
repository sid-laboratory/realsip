
import 'react-typed/dist/animatedCursor.css';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import OurNav from './Navbar';
const Heroo = () => {

return (
    <> 
  <OurNav />
        <div className="text-black">
        <div className="flex flex-start justify-end pr-10 pb-4">
           
            </div>
            <div className="max-w-[800px] mt-[-106px] text-4xl w-full h-screen mx-auto text-center flex flex-col justify-center">
         
            <h1 className="text-slate-100 font-extrabold text-5xl ">Sports and NCC updates ON THE GO!</h1>
            <div>
                <p className="text-slate-100 p-4 text-3xl font-bold">Registrations open on </p>
                <Typed className="text-white text-4xl font-bold"
                 strings={['SPORTS','NCC','EVENTS']} typeSpeed={100} backSpeed={100} loop/>
                 
            </div>
            <div className="pt-10 ">
            <Link to={'/login'}>
            <button className="bg-gradient-to-r from-blue-900 to-teal-700  hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 p-4 border-blue-900 hover:border-blue-700 rounded">
  Login
</button>
            </Link>
            </div>
            
           

<div className="p-5">
            <Link to={'/Date'} className="hidden">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py- px-4 border-b-1 border-blue-700 hover:border-blue-500 rounded pr-20">
 Date
</button>
            </Link>
            </div>
            
            </div>
        </div>
     
       

    </>
    ); 
};


export default Heroo;