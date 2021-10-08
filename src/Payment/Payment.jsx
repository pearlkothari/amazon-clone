import React from "react";
import { useStateValue } from "../State/StateProvider";
import Checkout__Product from '../Checkout/Checkout__Product'
import './Payment.css'
import { Link } from "react-router-dom";

function Payment(){
    const [{basket,user},dispatch]=useStateValue();
    return(
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout(
                        <Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>Address: Rupa ki Nangal, Post-Sumel, Via, Jamdoli, Jaipur</p>
                        <p>Rajasthan 302031</p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(element=>(
                            <Checkout__Product 
                                image_slider={element.Image_Slider}
                                id={element.ID}
                                title={element.description}
                                image={element.Image}
                                price={element.Price}
                                rating={element.rating}
                            ></Checkout__Product>
                        ))}
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;