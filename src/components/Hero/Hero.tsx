// import React from 'react'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight } from '@fortawesome/free-regular-svg-icons/faCircleRight'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import item7logo from '../../assets/item7go.png'
import logo from '../../assets/logo.png'
import nutric from '../../assets/nutric-logo.png'


const Hero = () => {
    return (
        <div>

            <div className="container">
                <h1 className='head text-center fw-bold'>UNILORIN E-FOOD</h1>


                <div className="row mt-3">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="food1">
                                    <p>Food1</p>
                                </div>
                                <div className="food4 mt-3">
                                    <p>Food4</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="food2">
                                    <p>Food2</p>
                                </div>
                                <div className="food3 mt-3">
                                    <p>Food2</p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <p className='p-text text-right'>Delicious Produced & Delivered Directly To Your Door</p>
                        <button type='button' className="resturants">Resturants <FontAwesomeIcon icon={faCircleRight} /></button>

                        <div className="row mt-5">
                            <div className="col-sm-12 col-md-4 col-lg-4 text-center">
                                <h1 className='number fw-bold'>5+</h1>
                                <span>Experience</span>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 text-center">
                                <h1 className='number fw-bold'>1K+</h1>
                                <span>Best Clients</span>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 text-center">
                                <h1 className='number fw-bold'>4.99</h1>
                                <span>Reviews</span>
                            </div>
                        </div>

                        <button type='button' className="online mt-5">Online Services <FontAwesomeIcon icon={faUtensils} /></button>
                        <p className='order-text mt-3'>Take Our Online Orders with<br></br>Resturants On Campus</p>
                        <div className=" item">
                            <div className="">
                                <img className='item7' src={item7logo} alt="" />
                                <img className='item7' src={logo} alt="" />
                                <img className='item7' src={nutric} alt="" />
                                <img className='item7' src={item7logo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Hero