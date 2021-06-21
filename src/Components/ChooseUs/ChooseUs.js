import React, { useState } from 'react';
import img_1 from '../../Images/service_1.png';
import img_2 from '../../Images/service_2.png';
import img_3 from '../../Images/service_3.png';
import img_4 from '../../Images/service_4.png';

const Service_Data = [
    {
        img: img_1,
        title: 'Premium Services',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eaque sit ipsum qui quo.'
    },
    {
        img: img_2,
        title: 'Cost',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eaque sit ipsum qui quo.'
    },
    {
        img: img_3,
        title: 'Eco-Friendly',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eaque sit ipsum qui quo.'
    },
    {
        img: img_4,
        title: 'Special Equipment',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eaque sit ipsum qui quo.'
    }
]
const ChooseUs = () => {
    return (
        <div className="container">
            <div className="row">
                {
                    Service_Data.map(data =>
                        <div className="col-md-6 col-lg-3">
                            <div className="Service_card">
                                <img src={data.img} alt="" srcset="" />
                                <h4>{data.title}</h4>
                                <p>{data.desc}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ChooseUs;