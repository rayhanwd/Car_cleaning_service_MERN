import React from 'react';
import ChooseUs from '../Components/ChooseUs/ChooseUs';
import Header from './../Components/Header/Header';
import Package from './../Components/Package/Package';

const Home = () => {
    return (
        <>
           <Header/>
           <Package/> 
           <ChooseUs/>
        </>
    );
};

export default Home;