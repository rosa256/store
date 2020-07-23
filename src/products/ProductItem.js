import React from 'react';
import './ProductItem.css';
import {Grid, CardMedia, Typography, Button} from '@material-ui/core'

function ProductItem({imageUrl = "https://cdn.shoplo.com/4326/products/th480/aaae/1406-05.jpg",name ="DOMYŚLNY",price="-10.00"}){

    return(
        <Grid item md="4" sm="6" xs="12">
            <Grid container direction="column">
                <CardMedia component="img"
                image={imageUrl}/>

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