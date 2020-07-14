import React from 'react';
import './Header.css';
import {Grid, Container, CardMedia, Typography} from '@material-ui/core';
import {AddShoppingCart, Instagram, YouTube, Search} from '@material-ui/icons'

function Header(){
    return(
        <Container maxWidth="md" className="rootHeader">
            <Grid container  justify="flex-start" alignItems="center" >
            <Grid container xs='12' sm='12' md='4' spacing={1} >
                <Grid item> <Instagram/> </Grid>
                <Grid item> <YouTube/> </Grid>
            </Grid>

            <Grid container xs='12' sm='12' md='4'>
                <CardMedia
                component="img"
                image="https://cdn.shoplo.com/4326/s/46/assets/logo.png?2037"/>
            </Grid>
            
            <Grid container xs='12' sm='12' md='4' justify="flex-end" alignItems="center" spacing={1}>
                <Grid item>
                    <Typography className="loginHeader">Zaloguj się</Typography>
                </Grid>
                <Grid item> <AddShoppingCart className="iconHeader"/> </Grid>
                <Grid item> <Search className="iconHeader"/> </Grid>
            </Grid>
            </Grid>
        </Container>
    );
}

export default Header;