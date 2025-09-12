import React, { useState, useEffect } from 'react'
import Logo from '../../assets/Logo.png'
import { FaCartShopping } from "react-icons/fa6"
import DarkMode from '../Navbar/DarkMode'
import { AiOutlineClose, AiOutlineMenuFold } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };

    useEffect(() => {
        if (menu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [menu]);

    return (
        <>
            <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
                <div className='container py-3 sm:py-0 '>
                    <div className="flex justify-between items-center">
                        <div>
                            <a href="#" className='flex items-center gap-2 text-2xl sm:text-3xl font-bold'>
                                <img src={Logo} className='w-16' alt="Karam AL Sham" />
                                Karam AL Sham
                            </a>
                        </div>
                        
                        <div className='flex items-center gap-2 sm:gap-4 md:gap-10'>
                            {/* The DarkMode and Order buttons are always visible */}
                            <DarkMode />

                            {/* Desktop menu links (hidden on screens up to 1023px) */}
                            <ul className='hidden lg:flex gap-4'>
                                <li><Link to="/" className='inline-block py-4 px-4 hover:text-primary'>Home</Link></li>
                                <li><Link to="/our-meals" className='inline-block py-4 px-4 hover:text-primary'>Our Meals</Link></li>
                                <li><Link to="/about" className='inline-block py-4 px-4 hover:text-primary'>About</Link></li>
                                <li><Link to="/contact" className='inline-block py-4 px-4 hover:text-primary'>Contact</Link></li>
                            </ul>
                            
                            <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-3'>
                                Order
                                <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
                            </button>
                            
                            {/* Mobile menu icon (visible only on screens up to 1023px) */}
                            <div className='lg:hidden flex items-center transition-all duration-300'>
                                {menu ?
                                    (<AiOutlineClose size={25} onClick={handleChange} className='transform transition-transform duration-300' />) :
                                    (<AiOutlineMenuFold size={25} onClick={handleChange} className='transform transition-transform duration-300' />)
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`${menu ? 'translate-x-0' : '-translate-x-full'} 
                             lg:hidden flex flex-col absolute bg-black/70 text-white 
                             left-0 top-full font-semibold text-2xl text-center 
                             py-8 gap-8 w-full h-[calc(100vh)] transition-transform duration-300 z-50`}>
                    <ul className='w-full'>
                        <li><a href="" className='block py-4 px-4 hover:text-primary' onClick={() => setMenu(false)}>Home</a></li>
                        <li><a href="" className='block py-4 px-4 hover:text-primary' onClick={() => setMenu(false)}>Our Meals</a></li>
                        <li><a href="" className='block py-4 px-4 hover:text-primary' onClick={() => setMenu(false)}>About</a></li>
                        <li><a href="" className='block py-4 px-4 hover:text-primary' onClick={() => setMenu(false)}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;