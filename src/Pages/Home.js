import React from 'react';
import ChooseUs from '../Components/ChooseUs/ChooseUs';
import CustomerReview from '../Components/CustomerReview/CustomerReview';
import Pricing from '../Components/Pricing/Pricing';
import SpecialDiscount from '../Components/SpecialDiscount/SpecialDiscount';
import Header from './../Components/Header/Header';
import Package from './../Components/Package/Package';
import Blog from './../Components/Blog/Blog';

const Home = () => {
    return (
        <>
           <Header/>
           <Package/> 
           <ChooseUs/>
           <CustomerReview/>
           <Pricing/>
           <SpecialDiscount/>
           <Blog/>
        </>
    );
};

export default Home;