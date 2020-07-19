import React, {useState, useEffect} from 'react';
import './Products.css';
import { Container, Typography, Grid, CardMedia } from '@material-ui/core';
import ProductCategory from './ProductCategory';
import ProductNavBar from './ProductNavBar';
import axios from "axios";


const Productss = () => {
    const getProducts = () => {
        axios.get("http://localhost:8080/products")
        .then(res => {
            console.log(res);            
//            this.setState({persons: res.data})
        });
    };

    useEffect(() => {
        getProducts();
    }, [])

    return <h1>Products in console.</h1>
};


class Products extends React.Component{
    


    // state = {
    //     loading: true,
    // }

    // async componentDidMount(){
    //     const url = " https://api.randomuser.me";
    //     const requestOptions = {
    //         method: "GET",
    //         headers: {
    //             "x-rapidapi-host": "myallies-breaking-news-v1.p.rapidapi.com",
    //             "x-rapidapi-key": "0dca25353dmsh38c86dc0627a493p130d91jsnee12c318c4f4",
    //             "useQueryString": true,  
    //             "Accept": 'application/json'
    //         }
    //     }
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log(data);
        
    // }

    //}
    render(){
        return(
            <div>
                <ProductCategory/>
                <ProductNavBar/>
                <Productss/>
                <Container style={{marginTop:'24px'}} maxWidth="lg">
                    <Grid container spacing="3">
                        <Grid item md="4" sm="6" xs="12">
                            <CardMedia component="img"
                            image="https://cdn.shoplo.com/4326/products/th480/aaae/1406-05.jpg"/>
                        </Grid>

                        <Grid item md="4" sm="6" xs="12">
                            <CardMedia component="img"
                            image="https://cdn.shoplo.com/4326/products/th480/aaag/1424-24-tonal.jpg"/>
                        </Grid>

                        <Grid item md="4" sm="6" xs="12">
                            <CardMedia component="img"
                            image="https://cdn.shoplo.com/4326/products/th480/aaac/1420-25-tonal.jpg"/>
                        </Grid>

                        <Grid item md="4" sm="6" xs="12">
                            <CardMedia component="img"
                            image="https://cdn.shoplo.com/4326/products/th480/aaaa/1372-03.jpg"/>
                        </Grid>

                        <Grid item md="4" sm="6" xs="12">
                            <CardMedia component="img"
                            image="https://cdn.shoplo.com/4326/products/th480/aaa5/1328-sesja-la-fire-08-3.jpg"/>
                        </Grid>

                        <Grid item md="4" sm="6" xs="12">
                            <CardMedia component="img"
                            image="https://cdn.shoplo.com/4326/products/th480/aaa3/1312-sesja-la-fire-01.jpg"/>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default Products;