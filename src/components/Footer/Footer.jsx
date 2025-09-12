import React from 'react'
import Logo from '../../assets/Logo.png'
import { FaFacebook, FaInstagram, FaLocationArrow } from 'react-icons/fa6'
import { FaMobileAlt } from 'react-icons/fa'
const Footer = () => {
    return (
        <>
            <div className='bg-gray-100 dark:bg-gray-950 dark:text-white '>
                <div className='max-w-[1200px] mx-auto'>
                    <div className='grid md:grid-cols-3 py-5'>
                        <div className='py-8 px-4'>
                            <h1 className='flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left'>
                            <img src={Logo} alt="" className='max-w-[100px]'  />
                                Karam AL Shame
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae vulputate turpis. Nullam nec dolor vitae elit venenatis accumsan imperdiet lacinia orci. 
                            </p>
                            <br />
                            <div  className='flex items-center gap-3'>
                                <FaLocationArrow/>
                                <p>Noida, Uttar Peadesh</p>
                            </div>
                            <div className='flex items-center gap-3 mt-3'>
                                <FaMobileAlt/>
                                <p>+91 123 4567</p>
                            </div>
                            {/* Social handles */}
                            <div>
                                <div className='flex items-center gap-3 mt-6'>
                                    <a href="#">
                                        <FaInstagram className='text-3xl'/>
                                    </a>
                                    <a href="#">
                                        <FaFacebook className='text-3xl'/>
                                    </a>
                                    <a href="#">
                                        <FaInstagram className='text-3xl'/>
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl font-bold text-justify sm:tex mb-3'>Important Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Services</li>
                                    <li>Login</li>
                                </ul>
                            </div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl font-bold text-justify sm:tex mb-3'>Important Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Services</li>
                                    <li>Login</li>
                                </ul>
                            </div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl font-bold text-justify sm:tex mb-3'>Important Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Services</li>
                                    <li>Login</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='text-center py-10 border-t-2 border-gray-300/50'>
                            @copyright 2025 All rights reserved || Made with ❤️ by Hanadi Okla
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
