
import React from 'react';
import './ProductNavBar.css';
import { Container, Typography, Grid, CardMedia } from '@material-ui/core';

function ProductNavBar(){

    return(
    <Container maxWidth="lg" style={{marginTop:20}} justify="space-between">
    <Grid container justify="space-between">
        <Grid item >
            <Grid container justify="flex-start" spacing={2}>
                <Grid item>T-shirty</Grid>
                <Grid item>Longsleve</Grid>
                <Grid item>Gadzety</Grid>
                <Grid item>Bluzy</Grid>
            </Grid>
        </Grid>

        <Grid item>
            <Grid container> 
                <Grid item>
                    <Typography >Sortuj: </Typography>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    </Container>
    );
}

export default ProductNavBar;