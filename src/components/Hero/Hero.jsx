import React from 'react'
import bgImg from '../../assets/website/vector3.png'
import Food1 from '../../assets/food/food1.png'
import Food2 from '../../assets/food/food2.png'
import Food3 from '../../assets/food/food3.png'
import Food4 from '../../assets/food/food4.png'


const Imagelist = [
    {
        id: 1,
        image: Food1
    },
    {
        id: 2,
        image: Food2
    },
    {
        id: 3,
        image: Food3
    },
    {
        id: 4,
        image: Food4
    },
]

const bgImage = {
    backgroundImage : `url(${bgImg})`,
    backgroundPosition : 'center',
    backgroundSize : 'cover',
    backgroundRepeat : 'no-repeat',
    width : '100%',
    height : '100%'
}

const Hero = () => {
    const [ imageId , setImageId ] = React.useState(Food1)
    return (
        <div style={bgImage} className='min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center'>
            <div className='container pb-8 sm:pb-0'>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    {/* image section */}
                    <div 
                        data-aos = 'zoom-out'
                        data-aos-duration = '400'
                        data-aos-once = 'true'
                        className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
                        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>Welcome to the</h1>
                        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold">
                        <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Karam AL Sham
                        </span>
                        </h1>
                        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'> Restaurant</h1>  

                        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae vulputate turpis. Nullam nec dolor vitae elit venenatis accumsan imperdiet lacinia orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                        <div>
                            <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200'>Order Now</button>
                        </div>
                    </div>
                    {/* image section */}

                    <div className='order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative'>
                        {/* main image section */}
                        <div className='flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden '>
                            <img
                                data-aos = 'zoom-in'
                                data-aos-duration = '300'
                                data-aos-once = 'true'
                                src = {imageId} 
                                alt=''
                                className='w-[300ox] sm:w-[450px] mx-auto spin'
                            />
                        </div>
                        {/*image list  section */}
                        <div className='flex lg:flex-col lg:top-3/2 lg:-translate-y-3/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full'>
                            {
                                Imagelist.map((item) => (
                                    <img
                                        data-aos = 'zoom-in'
                                        data-aos-duration = '400'
                                        data-aos-once = 'true'
                                        key={item.id}
                                        src= {item.image}
                                        className='max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200'
                                        onClick={
                                            () => {
                                                setImageId(
                                                    item.id === 1 ? 
                                                    Food1 : item.id === 2?
                                                    Food2 : item.id === 3 ?
                                                    Food3 :Food4
                                                )
                                            }
                                        }
                                    />
                                ))
                            }
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero