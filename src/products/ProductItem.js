import React from 'react';
import './ProductItem.css';
import {Grid, CardMedia, Typography, Button} from '@material-ui/core'
import {Link} from 'react-router-dom';

function ProductItem({imageUrl = "https://cdn.shoplo.com/4326/products/th480/aaae/1406-05.jpg", nameUrl="DEFAULT", name ="DOMYŚLNY(R)",category, price="-10.00(R)", imageHover }){

    return(
        <Grid item md={4}>
            <Grid container direction="column">
            <Link to={"/kategoria/" + category + "/" + nameUrl}>
                <Grid item className="image-wrapper">
                        <CardMedia className="imageStyle" 
                        component="img"
                        image={imageUrl}/>

                        <CardMedia className="image-hover"
                        component="img"
                        image={imageUrl + "/" + nameUrl +"-hovered"}/>
                </Grid>
            </Link>
                <Typography className="productItemPadding">
                {name}
                </Typography>

                <Typography className={"productPrice", "productItemPadding"}>
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