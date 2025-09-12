import React from 'react'
import AboutImg from '../../assets/About.png'
const About = () => {
    return (
        <>
<div className='min-h-screen flex flex-col lg:flex-row justify-center items-center gap-8 lg:px-32 px-5'>
    
    <div 
        data-aos = 'fade-up'
        data-aos-duration = '300' 
        className='w-full lg:w-1/3 p-4 drop-shadow-2xl rounded-lg'
    >
        <img src={AboutImg} alt="" className="w-full rounded-md" />
    </div>

    <div 
        data-aos = 'zoom-in'
        data-aos-duration = '300'
        className='space-y-4 lg:pt-14 w-full lg:w-1/2'
    >
        <h1 className='font-semibold text-4xl text-center md:text-start'>Why Choose Us?</h1>
        <br />
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae vulputate turpis. Nullam nec dolor vitae elit venenatis accumsan imperdiet lacinia orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
        <br />
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae vulputate turpis. Nullam nec dolor vitae elit venenatis accumsan imperdiet lacinia orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
        <br />
        <div className='flex justify-center lg:justify-start'>
            <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-3'>
                Learn More
            </button>
        </div>
    </div>
</div>
        </>
    )
}

export default About
