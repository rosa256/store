import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, CardMedia } from '@material-ui/core';

function FetchProductImages ({productCategory}, {productNameUrl}) {
    const[productImages, setProductImages] = useState([]);
    var productImagesUrl = "/api/images/kategoria/" + productCategory + "/details/" + productNameUrl;
    const getProductImages = () =>{
        axios.get(productImagesUrl)
        .then(res => {
            setProductImages(res.data);
        }, []);
    }

    useEffect(() => {
        getProductImages();
    }, []);
    return(productImages)
}

const GenerateImages = (props) =>{
    const productImages = props.productImages
    return(
        productImages.map((imageUrl, index) =>{
            return(
                <Grid item key={imageUrl} sm={12} md={6}>
                    <CardMedia className="image-wrapper"
                    component="img"
                    image={imageUrl}/>
                </Grid>
            );        
        })
    );
}

function ImagesSection ({productCategory, productNameUrl}){
    const productDetailImages = FetchProductImages(productCategory={productCategory}, productNameUrl={productNameUrl})
    return(
        <GenerateImages productCategory={productCategory} productNameUrl={productNameUrl} productImages={productDetailImages}/>
    );
}

export default ImagesSection;