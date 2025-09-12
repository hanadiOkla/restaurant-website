import React from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { FaEnvelope, FaPhone } from 'react-icons/fa6';
// If you're using an icon library like react-icons
// you can import the necessary icons here
// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        // Main container for the page with the same background and text colors
        <div className='bg-gray-100 dark:bg-gray-800 py-14'>
            <div className='container'>
                {/* Header Section */}
                <div className='text-center mb-20 max-w-[400px] mx-auto'>
                    <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Contact Us</p>
                    <h1 className='text-3xl font-bold text-darck dark:text-white'>Contact</h1>
                    <p className='text-xs text-gray-400'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae vulputate turpis. Nullam nec dolor vitae elit venenatis accumsan imperdiet lacinia orci.
                    </p>
                </div>

                {/* Main container for the form and info, using Grid for responsiveness */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

                    {/* Contact Form section */}
                    <div  data-aos = 'fade-up'  data-aos-duration = '300' className='bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg'>
                        <h2 className='text-2xl font-semibold mb-6 text-center'>Send us a Message</h2>
                        <form className='space-y-6'>
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium mb-1'>Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className='w-full p-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                                    placeholder="Enter your name..."
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className='block text-sm font-medium mb-1'>Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className='w-full p-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                                    placeholder="Enter your email..."
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className='block text-sm font-medium mb-1'>Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className='w-full p-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>
                            <div className='flex justify-center'>
                                <button className='bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full hover:scale-105 duration-200'>
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Information section */}
                    <div  data-aos = 'zoom-in'  data-aos-duration = '300' className='space-y-8 p-8'>
                        <h2 className='text-2xl font-semibold text-center mb-4'>Contact Information</h2>

                        {/* Phone */}
                        <div className='flex items-center gap-4'>
                            <FaPhone className='text-2xl text-primary' />
                            <div>
                                <h3 className='font-semibold'>Phone</h3>
                                <p>+966 50 123 4567</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className='flex items-center gap-4'>
                            <FaEnvelope className='text-2xl text-primary' />
                            <div>
                                <h3 className='font-semibold'>Email</h3>
                                <p>contact@karam-alsham.com</p>
                            </div>
                        </div>

                        {/* Address */}
                        <div className='flex items-center gap-4'>

                            <FaMapMarkedAlt className='text-2xl text-primary' />
                            <div>
                                <h3 className='font-semibold'>Address</h3>
                                <p>Karam El Sham, Nasr City Branch, Cairo, Egypt.</p>
                            </div>
                        </div>

                        {/* Map section */}
                        <div className='w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.0664176565374!2d31.314386176056914!3d30.09228411630154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f4b24a481bb%3A0xb20709e98f2b4a8d!2z2YPYsdmFINin2YTYtNin2YUg2YHYsdi5INmF2LXYsSDYp9mE2KzYr9mK2K_YqQ!5e0!3m2!1sen!2ssa!4v1757691870222!5m2!1sen!2ssa"
                                className="w-full h-full border-0"
                                allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">

                            </iframe>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;