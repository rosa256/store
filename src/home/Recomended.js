import React from 'react';
import {Grid, Container, CardMedia, Typography, Button} from '@material-ui/core';

import './Recomended.css'


function Recomended(){
    return(
    <Container maxWidth="lg" className="sectionPadding">
        <Grid container spacing="3">
            <Grid item xs="12">
            <Typography variant="h3" className="recomend" >Polecamy</Typography>
            </Grid>
            
            <Grid item md="4" sm="6" xs="12">
            <Grid container direction="column">
                <CardMedia component="img"
                image="https://cdn.shoplo.com/4326/products/th480/aaae/1406-05.jpg"/>

                <Typography className="productItemPadding">
                T-Shirt TONAL Biały
                </Typography>

                <Typography className={["productPrice", "productItemPadding"]}>
                od 54.99 zł
                </Typography>

                <Grid item className="productItemPadding">
                <Button variant="outlined" className="addToCartButton">
                    Do koszyka
                </Button>
                </Grid>
            </Grid>    
            </Grid>

            <Grid item md="4" sm="6" xs="12">
            <Grid container direction="column" alignContent="space-around">
                <CardMedia component="img"
                image="https://cdn.shoplo.com/4326/products/th480/aaag/1424-24-tonal.jpg"/>

                <Typography className="productItemPadding">
                T-Shirt TONAL Czerwony
                </Typography>

                <Typography className={["productPrice", "productItemPadding"]}>
                od 54.99 zł
                </Typography>

                <Grid item className="productItemPadding">
                <Button variant="outlined" className="addToCartButton">
                    Do koszyka
                </Button>
                </Grid>
            </Grid>  
            </Grid>
            
            <Grid item md="4" sm="6" xs="12">
            <Grid container direction="column">
                <CardMedia component="img"
                image="https://cdn.shoplo.com/4326/products/th480/aaac/1420-25-tonal.jpg"/>
            </Grid>
            
            <Typography className="productItemPadding">
            T-Shirt TONAL Czarny
            </Typography>

            <Typography className={["productPrice", "productItemPadding"]}>
                od 54.99 zł
            </Typography>

            <Grid item className="productItemPadding">
                <Button variant="outlined" className="addToCartButton">
                Do koszyka
                </Button>
            </Grid>
            </Grid>

            <Grid item md="4" sm="6" xs="12">
            <Grid container direction="column">
                <CardMedia component="img"
                image="https://cdn.shoplo.com/4326/products/th480/aaaa/1372-03.jpg"/>
            </Grid>
            
            <Typography className="productItemPadding">
            T-Shirt EKIPATONOSI KOLOR 40
            </Typography>

            <Typography className={["productPrice", "productItemPadding"]}>
                od 69.99 zł
            </Typography>

            <Grid item className="productItemPadding">
                <Button variant="outlined" className="addToCartButton">
                Do koszyka
                </Button>
            </Grid>
            </Grid>

            <Grid item md="4" sm="6" xs="12">
            <Grid container direction="column">
                <CardMedia component="img"
                image="https://cdn.shoplo.com/4326/products/th480/aaao/1360-tromba-kolor40.jpg"/>
            </Grid>
            
            <Typography className="productItemPadding">
                Bluza EKIPATONOSI KOLOR 40
            </Typography>

            <Typography className={["productPrice", "productItemPadding"]}>
                od 189.99 zł
            </Typography>

            <Grid item className="productItemPadding">
                <Button variant="outlined" className="addToCartButton">
                Do koszyka
                </Button>
            </Grid>
            </Grid>

            <Grid item md="4" sm="6" xs="12">
            <Grid container direction="column">
                <CardMedia component="img"
                image="https://cdn.shoplo.com/4326/products/th480/aaa5/1328-sesja-la-fire-08-3.jpg"/>
            </Grid>
            
            <Typography className="productItemPadding">
                T-Shirt LA Fire
            </Typography>

            <Typography className={["productPrice", "productItemPadding"]}>
                od 89.99 zł
            </Typography>

            <Grid item className="productItemPadding">
                <Button variant="outlined" className="addToCartButton">
                Do koszyka
                </Button>
            </Grid>
            </Grid>
        </Grid>
    </Container>
    );
}

export default Recomended;