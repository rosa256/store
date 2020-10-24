import React, {useState, useEffect } from 'react';
import {Grid, Container, Typography} from '@material-ui/core';
import ProductItem from '../products/ProductItem'
import './Recomended.css'
import axios from "axios";



const RetriveRecomendedProducts = () => {

    const[recomendedProducts, setRecomendedProducts] = useState([]);
    const getRecomendedProducts = () =>{
        axios.get("http://localhost:8000/api/products/recommended")
        .then(res=> {
            console.log(res);
            
            setRecomendedProducts(res.data)
        });
    };

    useEffect(() =>{
        getRecomendedProducts()
    }, [])


        const productsLinks = [ 
        "https://cdn.shoplo.com/4326/products/th480/aaae/1406-05.jpg",
        "https://cdn.shoplo.com/4326/products/th480/aaag/1424-24-tonal.jpg",
        "https://cdn.shoplo.com/4326/products/th480/aaac/1420-25-tonal.jpg",
        "https://cdn.shoplo.com/4326/products/th480/aaaa/1372-03.jpg",
        "https://cdn.shoplo.com/4326/products/th480/aaa5/1328-sesja-la-fire-08-3.jpg",
        "https://cdn.shoplo.com/4326/products/th480/aaa3/1312-sesja-la-fire-01.jpg",
        "https://cdn.shoplo.com/4326/products/th480/aaaa/1372-03.jpg",
        "https://cdn.shoplo.com/4326/products/th480/aaa5/1328-sesja-la-fire-08-3.jpg",
        "https://cdn.shoplo.com/4326/products/th480/aaa3/1312-sesja-la-fire-01.jpg"
    ]
    const hoverImages = [
        "https://cdn.shoplo.com/4326/products/th480/aaa3/1312-sesja-la-fire-01.jpg",
        "https://cdn.shoplo.com/4326/products/th480/aaa5/1328-sesja-la-fire-08-3.jpg",
        "https://cdn.shoplo.com/4326/products/th480/aaaa/1372-03.jpg",
        "https://cdn.shoplo.com/4326/products/th480/aaac/1420-25-tonal.jpg",
        "https://cdn.shoplo.com/4326/products/th480/aaag/1424-24-tonal.jpg",
        "https://cdn.shoplo.com/4326/products/th480/aaaa/1372-03.jpg",
        "https://cdn.shoplo.com/4326/products/th480/aaa5/1328-sesja-la-fire-08-3.jpg",
        "https://cdn.shoplo.com/4326/products/th480/aaa3/1312-sesja-la-fire-01.jpg",
        "https://cdn.shoplo.com/4326/products/th480/aaae/1406-05.jpg",
    ]

    return(
        recomendedProducts.map((recomendedProducts, index) => {
            return(
                <ProductItem key={recomendedProducts.name} name={recomendedProducts.name} imageUrl={productsLinks[index]} price={recomendedProducts.price} imageHover={hoverImages[index]}/>
            );                
        })
    );
};

function Recomended(){

    return(
    <Container maxWidth="lg" className="sectionPadding">
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <Typography variant="h3" className="recomend" >Polecamy</Typography>
            </Grid>
            
            <RetriveRecomendedProducts/>
        
        </Grid>
    </Container>
    );
}

export default Recomended;