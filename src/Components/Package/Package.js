import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Package = () => {
    return (
        <div className="container">
            <div className="row package">
                <div className="col-md-12">
                    <h4 className="package-title">Our Package</h4>
                    <p className="package-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum eaque minus explicabo mollitia!</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="package-card">
                        <h4>Residential</h4>
                        <h6>Cleaning</h6>
                        <img src="" alt="" srcset="" />
                        <div className="package-items">
                            <p><span><FaCheck /></span> Full car wash</p>
                            <p><span><FaCheck /></span> Full car wash</p>
                            <p><span><FaCheck /></span> Full car wash</p>
                            <p><span><FaCheck /></span> Full car wash</p>
                            <p><span><FaCheck /></span> Full car wash</p>
                            <p><span><FaCheck /></span> Full car wash</p>
                        </div>
                     <Link className="package-btn" to="/">See details</Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="package-card">
                        <h4>Commercial</h4>
                        <h6>Cleaning</h6>
                        <img src="" alt="" srcset="" />
                        <div className="package-items">
                            <p><span><FaCheck /></span> Full car wash</p>
                            <p><span><FaCheck /></span> Full car wash</p>
                            <p><span><FaCheck /></span> Full car wash</p>
                            <p><span><FaCheck /></span> Full car wash</p>
                            <p><span><FaCheck /></span> Full car wash</p>
                            <p><span><FaCheck /></span> Full car wash</p>
                        </div>
                      <Link className="package-btn" to="/">See details</Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="package-card">
                        <h4>Commercial</h4>
                        <h6>Cleaning</h6>
                        <img src="" alt="" srcset="" />
                        <div className="package-items">
                            <p><span><FaCheck /></span> Full car wash</p>
                            <p><span><FaCheck /></span> Full car wash</p>
                            <p><span><FaCheck /></span> Full car wash</p>
                            <p><span><FaCheck /></span> Full car wash</p>
                            <p><span><FaCheck /></span> Full car wash</p>
                            <p><span><FaCheck /></span> Full car wash</p>
                        </div>
                      <Link className="package-btn" to="/">See details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;