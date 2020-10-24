import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, CardMedia } from '@material-ui/core';

const FetchProductImages = ({productCategory, productNameUrl}) => {
    const[productImages, setProductImages] = useState([]);
    var productImagesUrl = "http://localhost:8000/api/images/links/kategoria/" + productCategory + "/" + productNameUrl;
    const getProductImages = () =>{
        axios.get(productImagesUrl)
        .then(res => {
            setProductImages(res.data);
        }, []);
    }

    useEffect(() => {
        getProductImages();
    });
    return(productImages)
}

const GenerateImages = (props) =>{
    const productImages = FetchProductImages(props);
    return(
        productImages.map((imageUrl, index) =>{
            return(
                <Grid key={imageUrl} item sm={12} md={4}>
                    <CardMedia className="image-wrapper"
                    component="img"
                    image={imageUrl}/>
                </Grid>
            );        
        })
    );
}

function ImagesSection ({productCategory, productNameUrl}){
    return(
        <Grid container >
            <GenerateImages productCategory={productCategory} productNameUrl={productNameUrl}/>
        </Grid>
    );
}

export default ImagesSection;