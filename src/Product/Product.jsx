import React,{Component} from 'react';
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import './Product.css';

class Product extends Component{
    constructor(){
        super();
        this.update=this.update.bind(this);
    }
    render(){
        return(
            <div className="Product__Basic">
                <div className="Product__Info">
                    <img src={this.props.Image}/>
                    <strong className="description">{this.props.description}</strong>
                    <br></br>
                    <p className="Price">
                        <small>₹ </small>
                        <strong>{this.props.Price}</strong>
                    </p>
                    <br></br>
                    <Rating className="half-rating" size="small" defaultValue={this.props.Rating} precision={0.5} />
                    <br></br>
                    <Button variant="contained">Add to cart</Button>
                </div>
            </div>
        )
    }
}

export default Product;