import React,{useEffect, useState} from "react";
import { CardElement,useStripe,useElements } from "@stripe/react-stripe-js";
import { useStateValue } from "../State/StateProvider";
import Checkout__Product from '../Checkout/Checkout__Product'
import './Payment.css'
import { Link,useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import axios from '../axios';
import {db} from '../firebase';

function Payment(){
    const history=useHistory();
    const stripe =useStripe();
    const elements =useElements();
    const [{basket,user,Amount},dispatch]=useStateValue();

    const [succeeded,setSucceeded]=useState(false);
    const [processing,setProcessing]=useState("");
    const [error,setError]=useState(null);
    const [disabled,setDisabled] =useState(true);
    const [clientSecret,setClientSecret] = useState("");
    
    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `payments/create?total=${Amount}`,
                data:clientSecret,
            });
            setClientSecret(response.data)
        }

        getClientSecret();
    }, [basket])

    console.log('The Secret is >>>',clientSecret);
    const handlePayment = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
             payment_method:{
                 card:elements.getElement(CardElement)
             }
         }).then(({paymentIntent})=>{

             db.collection('users').doc(user?.uid)
             .collection('orders')
             .doc(paymentIntent.id)
             .set({
                 basket:basket,
                 amount:paymentIntent.amount,
                 created: paymentIntent.created
             })


             setSucceeded(true);
             setError(null);
             setProcessing(false);

             dispatch({
                 type:'EMPTY_BASKET'
             })
             history.replace('/orders');
         })
    }
    const handleChange = (event) =>{
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
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
                            <form onSubmit={handlePayment}>
                                <CardElement
                                    onChange={handleChange}
                                    options={{
                                        style: {
                                          base: {
                                            fontSize: '16px',
                                            color: '#424770',
                                            '::placeholder': {
                                              color: '#aab7c4',
                                            },
                                          },
                                          invalid: {
                                            color: '#9e2146',
                                          },
                                        },
                                      }}
                                />
                                <div className='payment__priceContainer'>
                                        <CurrencyFormat
                                                renderText={(value)=>(
                                                    <>
                                                        <h3>Order total : {value}</h3>
                                                    </>
                                                )}
                                                decimalScale={2}
                                                value={Amount}
                                                displayType={"text"}
                                                thousandSeparator={true}
                                                prefix={"₹"}
                                        />
                                        <button disabled={processing || disabled || succeeded}>
                                            <span>{processing ?<p>Processing</p>:"Buy Now"}</span>
                                        </button>
                                    </div>
                                    {error && <div>{error}</div>}
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;