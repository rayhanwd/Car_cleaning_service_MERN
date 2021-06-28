import React from 'react';

const Pricing = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="pricing-title">
                        <h3>Choose Your Pricing Plan</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis saepe, magnam id laborum autem explicabo.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="pricing-table">
                            <h5>Starter Plan</h5>
                            <h1><span>$</span>23</h1>
                            <p>Vacuum interior including all mats, footwells, seats and boot</p>
                            <p>Clean interior glass to remove smears and streaks</p>
                            <p>Cleaning and conditioning of dashboard</p>
                            <p>Wipe door and boot jambs</p>
                            <p>High-pressure rinse to remove built-up grime and debris</p>
                            <button>Order now</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="pricing-table">
                            <h5>Standard Plan</h5>
                            <h1><span>$</span>49</h1>
                            <p>Vacuum interior including all mats, footwells, seats and boot</p>
                            <p>Clean interior glass to remove smears and streaks</p>
                            <p>Cleaning and conditioning of dashboard</p>
                            <p>Wipe door and boot jambs</p>
                            <p>High-pressure rinse to remove built-up grime and debris</p>
                            <button>Order now</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="pricing-table">
                            <h5>Premium Plan</h5>
                            <h1><span>$</span>78</h1>
                            <p>Vacuum interior including all mats, footwells, seats and boot</p>
                            <p>Clean interior glass to remove smears and streaks</p>
                            <p>Cleaning and conditioning of dashboard</p>
                            <p>Wipe door and boot jambs</p>
                            <p>High-pressure rinse to remove built-up grime and debris</p>
                            <button>Order now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;