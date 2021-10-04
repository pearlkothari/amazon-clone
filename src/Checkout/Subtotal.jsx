import React from "react";
import './Subtotal.css';
import Button from '@mui/material/Button'
import CurrencyFormat from "react-currency-format";
import {useStateValue} from '../State/StateProvider.jsx'
import { useHistory } from "react-router";


function Subtotal(){
        const history=useHistory();
        const [{basket,Amount},dispatch]=useStateValue();
        return(
            <div className='Subtotal'>
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
                    value={Amount}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                />
                <Button variant="contained" onClick={e=>history.push('/payment')}>Proceed to Checkout</Button>
            </div>
        )
}

export default Subtotal;