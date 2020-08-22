import React, { useState, useEffect } from 'react';
import axios from 'axios';


const FetchProductDetails = ({productCategory, productNameUrl}) => {
    const [productDetails, setProductDetails] = useState([]);
    
    const url = "http://localhost:8080/kategoria/" + productCategory + "/" + productNameUrl; 
    console.log(url);
    const getProductDetails = () => {
        axios.get(url)
        .then(res => {
            setProductDetails(res.data);
            console.log(res.data);
        })    
    }

    useEffect(() => {
        getProductDetails();
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
