import React,{Component} from "react";
import './Subtotal.css';
import Button from '@mui/material/Button'
import CurrencyFormat from "react-currency-format";


class Subtotal extends Component{
    render(){
        return(
            <div className='Subtotal'>
                <CurrencyFormat
                    renderText={(value)=>(
                        <>
                            <p>
                                Subtotal ({this.props.total} items): 
                                <strong>{` ${ value}`}</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox"></input>
                                This order contains a gift
                            </small>
                        </>
                    )}
                    decimalScale={2}
                    value={this.props.amount}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                />
                <Button variant="contained">Proceed to Checkout</Button>
            </div>
        )
    }
}

export default Subtotal;