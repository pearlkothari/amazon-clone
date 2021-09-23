import React,{Component} from 'react';
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import SimpleImageSlider from "react-simple-image-slider";
import './Product.css';

class Product extends Component{
    render(){
        return(
            <div className="Product__Basic">
                {!this.props.Image_Slider && <img src={this.props.Image} alt=""/>}
                {this.props.Image_Slider && 
                    <SimpleImageSlider
                        width={500}
                        height={350}
                        images={this.props.Image}
                        bac
                        showBullets={true}
                        showNavs={true}
                    />
                }
                <div className="Product__Info">
                    <strong className="description">{this.props.description}</strong>
                    <p className="Price">
                        <small>₹ </small>
                        <strong>{this.props.Price}</strong>
                    </p>
                    <div className="Product__Rating">
                        <Rating className="half-rating" size="small" defaultValue={this.props.Rating} precision={0.5} />
                    </div>
                    <Button variant="contained">Add to cart</Button>
                </div>
            </div>
        )
    }
}

export default Product;