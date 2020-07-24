import React from 'react';
import './ProductItem.css';
import {Grid, CardMedia, Typography, Button, Fade, Card} from '@material-ui/core'


function ProductItem({imageUrl = "https://cdn.shoplo.com/4326/products/th480/aaae/1406-05.jpg",name ="DOMYŚLNY(R)",price="-10.00(R)", imageHover}){

    return(
        <Grid item md="4" sm="6" xs="12">
            <Grid container direction="column">
                
                <Grid item className="image-wrapper">
                        <CardMedia className="imageStyle" 
                        component="img"
                        image={imageUrl}/>

                        <CardMedia className="image-hover"
                        component="img"
                        image={imageHover}/>
                </Grid>


                <Typography className="productItemPadding">
                {name}
                </Typography>

                <Typography className={["productPrice", "productItemPadding"]}>
                od {price} zł
                </Typography>

                <Grid item className="productItemPadding">
                <Button variant="outlined" className="addToCartButton">
                    Do koszyka
                </Button>
                </Grid>
            </Grid>    
        </Grid>

    );
}

export default ProductItem;