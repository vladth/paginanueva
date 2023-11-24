import React, {useState} from 'react';
import { RiMenuLine } from "react-icons/ri";
import IMG1 from '../assets/Bchiri.png'

const NavBar = () => {
    const [showMenu, setShowMenu]=useState(false);
    const [navbar, setNavBar]=useState(false);
    const changeBackground = () =>{
        if(window.scrollY >= 80){
            setNavBar(true);
        }else{
            setNavBar(false);
        }
    };
    window.addEventListener('scroll', changeBackground);

    return (
        <header className={`fixed flex items-center justify-between w-full ${navbar ? "grad active" : "grad"} py-2 px-4 z-50 `}>
            <div className='w-36 text-center cursor-pointer transi'>
                <img className='h-16' src={IMG1} alt="Logo" />
            </div>
            <nav className={`fixed lg:static bg-white lg:bg-transparent w-[100%] md:min-h-fit min-h-[60vh] lg:w-full md:h-[80%]  ${showMenu ? "left-0" : "-left-full"} top-[80px] flex-1 flex flex-col
             lg:flex-row items-center justify-center  gap-8 transition-all duration-300 md:text-black lg:text-white text-xl font-bold`}>
                <a className='hover:text-secondary ' href="">Inicio</a> 
                <a className='hover:text-secondary' href="">Productos</a>
                <a className='hover:text-secondary' href="">Servicios</a>
                <a className='hover:text-secondary' href="">Galeria</a>
                <a className='hover:text-secondary' href="">Contactos</a>
            </nav>
            <div className='px-2 flex items-center gap-2'>
                <button className='bg-yellow-500 px-4 py-2 rounded-lg font-bold hover:bg-primary hover:scale-110 transition-all duration-300'>
                    Login
                </button>
                <button onClick={()=>setShowMenu(!showMenu)} className='text-white text-2xl lg:hidden'>
                    <RiMenuLine/>
                </button>
            </div>
        </header>
    );
};

export default NavBar;