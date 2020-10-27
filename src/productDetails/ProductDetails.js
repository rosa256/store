import React, { useState, useEffect } from 'react';
import ImagesSection from './ImagesSection';
import { Container, Grid } from '@material-ui/core';
import axios from 'axios';


const FetchProductDetails = (props) => {
    const [productDetails, setProductDetails] = useState([]);
    
    const urlProductDetails = "http://localhost:8000/api/products/kategoria/" + props.productCategory + "/details/" + props.productNameUrl; 
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
        <p></p>
    )
}

function ProductDetails(props) {
    return(
        <Container maxWidth="xl">
            <Grid container sm={8} spacing={4}>
                <ImagesSection productCategory={props.category} productNameUrl={props.match.params.productNameUrl}/>
            </Grid>
            <FetchProductDetails productCategory={props.category} productNameUrl={props.match.params.productNameUrl}/>            
        </Container>
    );
}
export default  ProductDetails;
