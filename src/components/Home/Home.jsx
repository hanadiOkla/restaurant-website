import React from 'react'
import Banner from '../Banner/Banner'
import AppStore from '../AppStore/AppStore'
import Testimonial from '../Testimonial/Testimonial'
import FavoriteMeals from '../FavoriteMeals/FavoriteMeals'
import Meals from '../Meals/Meals'
const Home = () => {
    return (
        <>
            <div>
                <FavoriteMeals />
                <Banner />
                <AppStore />
                <Testimonial />
            </div>
        </>
    )
}

export default Home
