

import 'react-typed/dist/animatedCursor.css';
import Typed from 'react-typed';
const Heroo = () => {

return (
    <> 
  
        <div className="text-black">
            <div className="max-w-[800px] mt-[-106px] text-4xl w-full h-screen mx-auto text-center flex flex-col justify-center">
         
            <h1 className="text-slate-100 font-extrabold text-5xl ">Sports and NCC updates ON THE GO!</h1>
            <div>
                <p className="text-slate-100 p-4 text-3xl font-bold">Registrations open on </p>
                <Typed className="text-white text-4xl font-bold"
                 strings={['SPORTS','NCC','EVENTS']} typeSpeed={100} backSpeed={100} loop/>
            </div>
        </div>

        </div>

    </>
    ); 
};


export default Heroo;