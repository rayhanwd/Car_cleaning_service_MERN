import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
import T_photo from '../../Images/customer.png';

const ReviewData = [
    {
        photo: T_photo,
        name: 'Jhon due',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
        country: 'New York,US'
    },
    {
        photo: T_photo,
        name: 'Brondon Runkel',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
        country: 'London,UK'
    },
    {
        photo: T_photo,
        name: 'Justin brevier',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
        country: 'California,US'
    },
    {
        photo: T_photo,
        name: 'Timber lake',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
        country: 'Jamaica,US'
    }
]

const CustomerReview = () => {
    SwiperCore.use([Pagination, Autoplay]);
    return (
        <section className="review">
            <div className="container">
                <div className="row">
                    <h3 className="review-title">What Customers Say</h3>
                    <Swiper
                        loop={true}
                        slidesPerView={1}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false

                        }}

                    >
                        {
                            ReviewData.map(item =>
                                <SwiperSlide>
                                    <div className="col-md-6 mx-auto">
                                        <div className="content">
                                            <p>{item.description}</p>
                                            <div className="image">
                                                <img src={item.photo} alt="" srcset="" />
                                            </div>
                                            <h5>{item.name}</h5>
                                            <h6>{item.country}</h6>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default CustomerReview;