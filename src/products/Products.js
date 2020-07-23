import React, {useState, useEffect} from 'react';
import './Products.css';
import { Container, Typography, Grid, CardMedia } from '@material-ui/core';
import Categories from './Categories';
import ProductNavBar from './ProductNavBar';
import axios from "axios";


const CategoryProducts = () => {

    const [products, setProducts] = useState([]);
    const productsLinks = [ "https://cdn.shoplo.com/4326/products/th480/aaae/1406-05.jpg",
                            "https://cdn.shoplo.com/4326/products/th480/aaag/1424-24-tonal.jpg",
                            "https://cdn.shoplo.com/4326/products/th480/aaac/1420-25-tonal.jpg",
                            "https://cdn.shoplo.com/4326/products/th480/aaaa/1372-03.jpg",
                            "https://cdn.shoplo.com/4326/products/th480/aaa5/1328-sesja-la-fire-08-3.jpg",
                            "https://cdn.shoplo.com/4326/products/th480/aaa3/1312-sesja-la-fire-01.jpg"]

    const getProducts = () => {
        axios.get("http://localhost:8080/products")
        .then(res => {
            setProducts(res.data)            
        });
    };

    useEffect(() => {
        getProducts();
    }, [])

    return (
        products.map((product, index) => {
            return(
                <Grid item md="4" sm="6" xs="12">
                    <CardMedia component="img"
                    image={productsLinks[index]}/>
                </Grid>
            );                
        })
    );
};


class Products extends React.Component{

    render(){
        return(
            <div>
                <Categories/>
                <ProductNavBar/>
                <Container style={{marginTop:'24px'}} maxWidth="lg">
                    <Grid container spacing="3">
                        <CategoryProducts/>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default Products;