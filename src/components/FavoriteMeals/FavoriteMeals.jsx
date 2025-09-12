import React from 'react'
import food1 from '../../assets/food/food1.png'
import food2 from '../../assets/food/food2.png'
import food3 from '../../assets/food/food3.png'
import food4 from '../../assets/food/food4.png'
const FavoriteMealsData = [
    {
        id:1 ,
        img: food1,
        name: 'Grilled chicken',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae vulputate turpis. Nullam nec dolor vitae elit venenatis accumsan imperdiet lacinia orci.'
    },
    // {
    //     id:2 ,
    //     img: food2,
    //     name: 'Hamburger',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae vulputate turpis. Nullam nec dolor vitae elit venenatis accumsan imperdiet lacinia orci.'
    // },
    {
        id:3 ,
        img: food3,
        name: 'Shawerma',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae vulputate turpis. Nullam nec dolor vitae elit venenatis accumsan imperdiet lacinia orci.'
    },
    {
        id:4 ,
        img: food4,
        name: 'Fried Chicken',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae vulputate turpis. Nullam nec dolor vitae elit venenatis accumsan imperdiet lacinia orci.'
    },
]
const FavoriteMeals = () => {
    return (
        <>
            <div className='py-10'>
                <div className='container'>
                    {/* Header Section */}
                    <div className='text-center mb-20 max-w-[400px] mx-auto'>
                        <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Oue Favorite Meals</p>
                        <h1 className='text-3xl font-bold text-darck dark:text-white'>Favorite Meals</h1>
                        <p className='text-xs text-gray-400'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae vulputate turpis. Nullam nec dolor vitae elit venenatis accumsan imperdiet lacinia orci. 
                        </p>
                    </div>
                    {/* Card Section */}
                    <div>
                         <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
                            {FavoriteMealsData.map((item) =>{
                                return(
                                    <div 
                                        data-aos = 'zoom-in'
                                        data-aos-duration = '300'
                                        key={item.id} className='max-w-[300px] mt-16 group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white duration-300 shadow-xl '>
                                       <div className='h-[100px]'>
                                         <img className='max-w-[200px] mx-auto block transform -translate-y-20 group-hover:scale-105 group-hover:rotate-6 duration-300' src={item.img} alt="" />
                                       </div>
                                        <div className='p-4 text-center'>
                                            <h1 className='text-xl font-bold dark:text-white '>{item.name}</h1>
                                            <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{item.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FavoriteMeals
