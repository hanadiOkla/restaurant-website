import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import { FaCartShopping } from 'react-icons/fa6'

const MealsCard = (props) => {
    return (
        <>
<div className='w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg'>
    <div className='h-72 overflow-hidden'>
        <img src={props.img} alt="img" />
    </div>
    <div className='space-y-4'>
        <h3 className='font-semibold text-left text-xl pt-6'>{props.title}</h3>
        <div className='flex flex-row justify-left'>
            <BsStarFill className='text-primary'/>
            <BsStarFill className='text-primary'/>
            <BsStarFill className='text-primary'/>
            <BsStarFill className='text-primary'/>
            <BsStarFill className='text-primary'/>
        </div>
        <div className='flex flex-row items-center justify-between gap-4'>
            <h3 className='font-semibold text-lg'>{props.price}</h3>
            <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-3'>
                <FaCartShopping/>
                Buy Now
            </button>
        </div>
    </div>
</div>
        </>
    )
}

export default MealsCard
