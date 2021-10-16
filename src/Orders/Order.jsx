import React from 'react'
import './Order.css';
import moment from "moment";
import Checkout__Product from '../Checkout/Checkout__Product.jsx'
import CurrencyFormat from 'react-currency-format';

function Order({order}) {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY,h:mma")}</p>

            <p className="order__id">
                <small>{order.id}</small>
            </p>

            {order.data.basket?.map(element=>(
                <Checkout__Product 
                    image_slider={element.Image_Slider}
                    id={element.ID}
                    title={element.description}
                    image={element.Image}
                    price={element.Price}
                    rating={element.rating}
                    button_disable={true}
                ></Checkout__Product>
            ))}
            <CurrencyFormat
                    renderText={(value)=>(
                        <>
                            <p>
                                Subtotal ({basket.length} items): 
                                <strong>{` ${ value}`}</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox"></input>
                                This order contains a gift
                            </small>
                        </>
                    )}
                    decimalScale={2}
                    value={order.data.amount}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                />
        </div>
    )
}

export default Order;
