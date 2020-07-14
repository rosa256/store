import React from 'react';
import './Nav.css';
import {Grid, Container} from '@material-ui/core';


function Nav(){
    return(
        <div className="navBarSticky">
            <Container maxWidth="md">
            <Grid container spacing={1} className="navBar" justify="space-evenly"  direction="row">
                <Grid item>T-SHIRT</Grid>
                <Grid item>GADŻETY</Grid>
                <Grid item>LONGSLEEVE</Grid>
                <Grid item>BLUZY</Grid>
                <Grid item>BIURKA</Grid>
                <Grid item>NOWOŚCI</Grid>
                <Grid item>LOS ANGELES</Grid>
            </Grid>
            </Container>
      </div>
    );
}

export default Nav;