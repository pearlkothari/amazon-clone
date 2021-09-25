import React from 'react';
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import SimpleImageSlider from "react-simple-image-slider";
import './Product.css';
import {useStateValue} from '../State/StateProvider.jsx'

function Product({ID,Image,description,Price,Image_Slider,rating}){
    const [{basket},dispatch] = useStateValue();

    const Add_To_Cart = () =>{
        //dispatch the item into the data layer
        // console.log(rating);
        dispatch({
            type:'ADD_TO_BASKET',
            item: {
                ID:ID,
                description:description,
                Image:Image,
                Price:Price,
                rating:rating
            }
        })
    }
        return(
            <div className="Product__Basic">
                {!Image_Slider && <img src={Image} alt=""/>}
                {Image_Slider && 
                    <SimpleImageSlider
                        width={500}
                        height={350}
                        images={Image}
                        showBullets={true}
                        showNavs={true}
                    />
                }
                <strong className="description">{description}</strong>
                <div className="Product__Info">
                    <p className="Price">
                        <small>₹ </small>
                        <strong>{Price}</strong>
                    </p>
                    <div className="Product__Rating">
                        <Rating className="half-rating" size="small" defaultValue={rating} precision={0.5} />
                    </div>
                    <Button variant="contained" onClick={Add_To_Cart}>Add to cart</Button>
                </div>
            </div>
        )
}

export default Product;