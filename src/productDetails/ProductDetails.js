import React, { useState, useEffect } from 'react';
import ImagesSection from './ImagesSection';
import { Container } from '@material-ui/core';
import axios from 'axios';


const FetchProductDetails = ({productCategory, productNameUrl}) => {
    const [productDetails, setProductDetails] = useState([]);
    
    const urlProductDetails = "http://localhost:8000/api/products/kategoria/" + productCategory + "/details/" + productNameUrl; 
    const getProductDetails = () => {
        axios.get(urlProductDetails)
        .then(res => {
            setProductDetails(res.data);
        })    
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
        <Container maxWidth="lg"> 
            <ImagesSection productCategory={props.category} productNameUrl={props.match.params.productNameUrl}/>
        </Container>
    );
}
export default  ProductDetails;
