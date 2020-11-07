import React, { useState, useEffect } from 'react';
import './ProductDetails.css';
import ImagesSection from './ImagesSection';
import { Container, Grid, Typography } from '@material-ui/core';
import axios from 'axios';


const FetchProductDetails = (props) => {
    const [productDetails, setProductDetails] = useState([]);
    
    const urlProductDetails = "/api/products/kategoria/" + props.productCategory + "/details/" + props.productNameUrl; 
    const getProductDetails = () => {
        axios.get(urlProductDetails)
        .then(res => {
            setProductDetails(res.data);
        }, [])    
    }
    useEffect(() => {
        getProductDetails();
    }, [])
    return(
        <Grid item sm={12}>
            <Typography>Product name</Typography>
        </Grid>
    )
}

function ProductDetails(props) {
    return(
        <Grid container className="product-content" maxWidth="xl" spacing={4}>
            <Grid item sm={8}>
                <Grid container spacing={4}>
                    <ImagesSection productCategory={props.category} productNameUrl={props.match.params.productNameUrl}/>
                </Grid>
            </Grid>
            <Grid item className="product-details-info" sm={4}>
                <Grid container>
                    <FetchProductDetails productCategory={props.category} productNameUrl={props.match.params.productNameUrl}/>            
                </Grid>
            </Grid>
        </Grid>
    );
}
export default  ProductDetails;
