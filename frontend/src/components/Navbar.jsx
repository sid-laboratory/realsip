    import  {useEffect, useState} from 'react'
    import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai'
    import { Link } from 'react-router-dom';
   
    const Navbar = () =>
    { 
        const [name, setName] = useState('')
        const [nav,setNav] = useState(true)
        const handleNav = () =>
        {
            setNav(!nav)
        }
        useEffect(() => {
            const user = JSON.parse(localStorage.getItem('user'))
            if(user){
                setName(user.firstName + " " + user.lastName)
            }
            else{
                window.location.href = '/login'
            }

        }, [])
        return (
            
            <div className="text-black  flex justify-between items-center h-24 max-w-[1240px] mx-auto  " >
                <h1 className="w-full text-3xl font-bold text-white   ">SPORTS ORGANISER.</h1>
                <ul className="hidden"  >

                <button className="p-4">HOME </button>
                    <button className="p-4">SPORTS</button>
                    <button className="p-4">NCC</button>
                    
                    <button className="p-4">EVENTS</button>
                </ul>
                <div className="flex items-center">
                    <p className="text-xl font-bold text-white mr-4">{name}</p>
                    <Link to='/login'> <button onClick={()=> localStorage.clear()} className="p-4 border-2 border-white text-white font-bold">LOGOUT</button> </Link>
                </div>
                <div onClick={handleNav} className=" flex hover:cursor-pointer">
                    {!nav ? <AiOutlineClose size={35}/> :  <AiOutlineMenu size={25} />}
                </div>
               
                <div className={!nav ? " fixed left-0 top-0 w-[30%] h-screen border-r max-w-[400px] border-r-gray-200 lg:pr-10 :text-[10px]  bg-stone-200 ease-in-out duration-500" : "fixed left-[-100%]  h-screen ease-in duration-500"}>
                    
                    <p className=" relative w-full text-3xl font-bold text-stone-600 m-4 pl-10 pt-4 pointer-events-none ">SPORTS ORGANISER</p>
                    <ul className="uppercase p-4">
                    <Link to='/' onClick={handleNav}> <button className="p-4  block border-b w-[100%] border-black  bold text-xl font-bold"> HOME </button> </Link>
                    <Link to='/Sports'> <button className="p-4 block border-b w-[100%] border-black text-xl font-bold">SPORTS</button>      </Link>
                    <Link to='/NCC'> <button className="p-4 block border-b w-[100%] border-black text-xl font-bold">NCC</button> </Link>
                    <Link to='/AddEvent'> <button className="p-4 block border-b w-[100%] border-black text-xl font-bold">ADD EVENT</button> </Link>
                    <Link to='/ShowEvent'><button className="p-4 block border-b w-[100%] border-black text-xl font-bold">EVENTS</button> </Link>
                    </ul>
                </div>
        
            </div>
            
        );
    };
    export default Navbar;