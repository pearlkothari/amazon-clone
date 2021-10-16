import React from "react";
import './Checkout.css'
import Subtotal from './Subtotal.jsx'
import {useStateValue } from "../State/StateProvider";
import SimpleImageSlider from "react-simple-image-slider";
import FlipMove from 'react-flip-move';
import Checkout__Product from "./Checkout__Product";

function Checkout(){
    const [{user,basket},dispatch]=useStateValue();
    const Ad=[
        {url:"https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/LPAIndia/Header/170_AP_1500x300.jpg"},
        {url:"https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/LPAIndia/Offers/Yatra/LPA_201_1500x250.jpg"}
    ]
    return(
            <div className="checkout">
                <div className="checkout_left">
                    <SimpleImageSlider
                        width={1150}
                        height={150}
                        images={Ad}
                        showNavs={true}
                    />
                    <>
                        <h3 className="name">Hello,{user?user.email:'Guest'}</h3>
                        <h2 className="checkout__title">
                            Your Shopping Basket
                        </h2>
                        {basket.map(element => (
                                <Checkout__Product 
                                    image_slider={element.Image_Slider}
                                    id={element.ID}
                                    title={element.description}
                                    image={element.Image}
                                    price={element.Price}
                                    rating={element.rating}
                                    button_disable={false}
                                ></Checkout__Product>
                        ))}
                    </>
                </div>
                <div className="checkout__right">
                    <Subtotal></Subtotal>
                </div>
            </div>
        )
}

export default Checkout;