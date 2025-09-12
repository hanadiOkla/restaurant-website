import React from 'react'
import MealsCard from './MealsCard'
import food1 from '../../assets/food/food1.png'
import food2 from '../../assets/food/food2.png'
import food3 from '../../assets/food/food3.png'
import food4 from '../../assets/food/food4.png'

const MealsData = [
    {
        id:1 ,
        img: food1,
        name: 'Grilled chicken',
        price: '10$',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae vulputate turpis. Nullam nec dolor vitae elit venenatis accumsan imperdiet lacinia orci.'
    },
    {
        id:2 ,
        img: food2,
        name: 'Hamburger',
        price: '25$',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae vulputate turpis. Nullam nec dolor vitae elit venenatis accumsan imperdiet lacinia orci.'
    },
    {
        id:3 ,
        img: food3,
        name: 'Shawerma',
        price: '15$',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae vulputate turpis. Nullam nec dolor vitae elit venenatis accumsan imperdiet lacinia orci.'
    },
    {
        id:4 ,
        img: food4,
        name: 'Fried Chicken',
        price: '30$',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae vulputate turpis. Nullam nec dolor vitae elit venenatis accumsan imperdiet lacinia orci.'
    },
]
const Meals = () => {
    return (
        <>
            <div className='py-10 min-h-screen flex flex-col justify-center items-center lg:px'>
                <div className='container'>
                    {/* Header Section */}
                    <div className='text-center mb-20 max-w-[400px] mx-auto'>
                        <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Oue Meals</p>
                        <h1 className='text-3xl font-bold text-darck dark:text-white'>Meals</h1>
                        <p className='text-xs text-gray-400'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae vulputate turpis. Nullam nec dolor vitae elit venenatis accumsan imperdiet lacinia orci. 
                        </p>
                    </div>
                    {/* Card Section */}
                    <div 
                        data-aos = 'zoom-in'
                        data-aos-duration = '300' 
                        className='flex flex-wrap gap-8 justify-center'>
                        {MealsData.map((item) =>{
                                return(
                                    <MealsCard key={item.id} img = {item.img} title={item.name} price ={item.price} />
                                )
                            })}

                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Meals
