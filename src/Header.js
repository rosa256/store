import React from 'react';
import './Header.css';
import {Grid, Container, CardMedia, Typography} from '@material-ui/core';
import {AddShoppingCart, Instagram, YouTube, Search} from '@material-ui/icons'
import {Link} from 'react-router-dom';

function Header(){
    return(
        <Container maxWidth="md" className="rootHeader">
            <Grid container  justify="flex-start" alignItems="center" >

            <Grid item sm='12' md='4'>
                <Grid container spacing={1} >
                    <Grid item> <Instagram/> </Grid>
                    <Grid item> <YouTube/> </Grid>

                </Grid>
            </Grid>

            <Grid item sm='12' md='4'>
                <Grid container>
                    <Link className="link" to="/">
                            <CardMedia
                            component="img"
                            image="https://cdn.shoplo.com/4326/s/46/assets/logo.png?2037"/>
                    </Link>
                </Grid>
            </Grid>

            <Grid item sm='12' md='4'>
                <Grid container justify="flex-end" alignItems="center" spacing={1}>
                    <Grid item>
                        <Typography className="loginHeader">Zaloguj się</Typography>
                    </Grid>
                    <Grid item> <AddShoppingCart className="iconHeader"/> </Grid>
                    <Grid item> <Search className="iconHeader"/> </Grid>
                </Grid>
            </Grid>
            </Grid>
        </Container>
    );
}

export default Header;