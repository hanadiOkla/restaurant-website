import React from 'react'
import Slider from 'react-slick'


const testimonialData = [
    {
        id:1 ,
        name: 'Ahmad',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae vulputate turpis. Nullam nec dolor vitae elit venenatis accumsan imperdiet lacinia orci.',
        img: 'https://picsum.photos/101/101'
    },
    {
        id:2 ,
        name: 'Khaled',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae vulputate turpis. Nullam nec dolor vitae elit venenatis accumsan imperdiet lacinia orci.',
        img: 'https://picsum.photos/102/102'
    },
    {
        id:3 ,
        name: 'Abullah',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae vulputate turpis. Nullam nec dolor vitae elit venenatis accumsan imperdiet lacinia orci.',
        img: 'https://picsum.photos/103/103'
    },
    {
        id:4 ,
        name: 'Samer',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae vulputate turpis. Nullam nec dolor vitae elit venenatis accumsan imperdiet lacinia orci.',
        img: 'https://picsum.photos/104/104'
    },
]
const Testimonial = () => {
    var setting = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500 ,
        slidesToShow:1 , 
        slidesToScroll: 1,
        autoplay:true,
        cssEase: 'linear',
        pauseOnHover: true,
        pauseOnFocus: true
    }
    return (
        <>
            <div  data-aos = 'fade-up' data-aos-duration = '300' className='py-10'>
                <div className="container">
                    {/* Header Section */}
                    <div className='text-center mb-20 max-w-[400px] mx-auto'>
                        <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Oue Testimonial</p>
                        <h1 className='text-3xl font-bold text-darck dark:text-white'>Testimonial</h1>
                        <p className='text-xs text-gray-400'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae vulputate turpis. Nullam nec dolor vitae elit venenatis accumsan imperdiet lacinia orci.
                        </p>
                    </div>

                    {/* Testimonial Section */}
                    <div data-aos = 'zoom-in' data-aos-duration = '300' className='grid grid-cols-1 max-w-[600px] mx-auto gap-6'>
                        <Slider {...setting}>
                            {
                                testimonialData.map((item) =>{
                                    return(
                                        <div key={item.id} className='my-6'>
                                            <div className='flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'>
                                                <img src={item.img} alt=""  className='rounded-full block mx-auto'/>
                                                <p className='text-gray-500 text-sm'>{item.text}</p>
                                                <h1 className='text-xl font-bold dark:text-white '>{item.name}</h1>
                                                <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                                            </div>

                                        </div>
                                    )
                                })
                            }

                        </Slider>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Testimonial
