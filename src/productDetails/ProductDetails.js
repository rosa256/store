import React, { useState, useEffect } from 'react';
import axios from 'axios';


const FetchProductDetails = ({productCategory, productNameUrl}) => {
    const [productDetails, setProductDetails] = useState([]);
    const [productImages, setProductImages] = useState([]);
    
    const urlProductDetails = "http://localhost:8080/kategoria/" + productCategory + "/" + productNameUrl; 
    const getProductDetails = () => {
        axios.get(urlProductDetails)
        .then(res => {
            setProductDetails(res.data);
        })    
    }

    const urlProductImages = "http://localhost:8080/imgs/kategoria/" + productCategory + "/" + productNameUrl;
    const getProductImages = () =>{
        
        axios.get(urlProductImages)
        .then(res => {
            setProductImages(res.data);
            console.log(res.data);
        }, [])
    }
    useEffect(() => {
        getProductDetails();
        getProductImages();
    }, [])
    return(
        <h2>Ezz</h2>
    )
}


function ProductDetails(props) {
    return(
        <FetchProductDetails productCategory={props.category} productNameUrl={props.match.params.productNameUrl}/>
        
    );
}
export default  ProductDetails;
