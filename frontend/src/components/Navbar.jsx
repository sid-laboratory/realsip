    import  {useState} from 'react'
    import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai'
    import { Link } from 'react-router-dom';
   
    
    
    
    
    const Navbar = () =>
    { 
        
        const [nav,setNav] = useState(true)

        const handleNav = () =>
        {
            setNav(!nav)
        }
      




        return (
            
            <div className="text-black  flex justify-between items-center h-24 max-w-[1240px] mx-auto px-2" >
                <h1 className="w-full text-3xl font-bold text-white ">SPORTS ORGANISER.</h1>
                <ul className="hidden"  >

                <button className="p-4">HOME </button>
                    <button className="p-4">SPORTS</button>
                    <button className="p-4">NCC</button>
                    
                    <button className="p-4">CONTACT</button>
                </ul>
                <div onClick={handleNav} className=" flex hover:cursor-pointer">
                    {!nav ? <AiOutlineClose size={35}/> :  <AiOutlineMenu size={25} />}
                               
                </div>
               
                <div className={!nav ? " fixed left-0 top-0 w-[30%] h-screen border-r border-r-gray-200 bg-stone-200 ease-in-out duration-500" : "fixed left-[-100%]  h-screen ease-in duration-500"}>
                    <p className="w-full text-3xl font-bold text-stone-600 m-4 pl-20 pt-4 pointer-events-none">SPORTS ORGANISER</p>
                    <ul className="uppercase p-4">
                    <Link to='/' onClick={handleNav}> <button className="p-4  block border-b w-[100%] border-black  bold text-xl font-bold"> HOME </button> </Link>
                    <Link to='/Sports'> <button className="p-4 block border-b w-[100%] border-black text-xl font-bold">SPORTS</button>      </Link>
                    <Link to='/NCC'> <button className="p-4 block border-b w-[100%] border-black text-xl font-bold">NCC</button> </Link>
                    <Link to='/AddEvent'> <button className="p-4 block border-b w-[100%] border-black text-xl font-bold">ADD EVENT</button> </Link>
                    <button className="p-4 block border-b w-[100%] border-black text-xl font-bold">CONTACT</button>
                    </ul>
                </div>
        
            </div>
            
        );
    };
    export default Navbar;