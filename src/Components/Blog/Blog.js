import React from 'react';
import { Link } from 'react-router-dom';

import B1_photo from '../../Images/blog1.png';
import B2_photo from '../../Images/blog2.png';
import B3_photo from '../../Images/blog3.png';

const BlogData = [
    {
        photo: B1_photo,
        title: 'New Cleaning With Hydrogen Peroxide Tips',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.'
    },
    {
        photo: B2_photo,
        title: 'New Cleaning With Hydrogen Peroxide Tips',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.'
    },
    {
        photo: B3_photo,
        title: 'New Cleaning With Hydrogen Peroxide Tips',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.'
    }
]
const Blog = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="blog-title">
                        <h2>LATEST NEWS ABOUT CLEANING</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe eveniet magni tempora minima laborum?</p>
                    </div>
                    {
                        BlogData.map(item => (
                            <div className="col-sm-12 col-md-6 col-lg-4 blog-item">
                                <div className="blog-content">
                                    <img src={item.photo} alt="" srcset="" />
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                    <Link to="/">Learn more</Link>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    );
};

export default Blog;