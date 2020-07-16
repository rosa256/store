import React from 'react';
import {Grid, Container, Typography} from '@material-ui/core';
import './Footer.css';

function Footer(){

return(
    <Container maxWidth="lg" className="section">
        <Grid container>
        <Grid item md="3" sm="4" xs="12">
            <Grid container direction="column" >
                <Typography>Informacje</Typography>
                <Typography>Regulamin</Typography>
                <Typography>Polityka Prywatności</Typography>
                <Typography>Kontakt</Typography>
            </Grid> 
        </Grid>

        <Grid item md="3" sm="4" xs="12">
            <Grid container direction="column" >
            <Typography>Informacje</Typography>
            <Typography>Regulamin</Typography>
            <Typography>Polityka Prywatności</Typography>
            <Typography>Kontakt</Typography>
            </Grid> 
        </Grid>

        <Grid item md="3" sm="4" xs="12">
            <Grid container direction="column">
            <Typography>Informacje</Typography>
            <Typography>Regulamin</Typography>
            <Typography>Polityka Prywatności</Typography>
            <Typography>Kontakt</Typography>
            </Grid> 
        </Grid>
        </Grid>
    </Container>
    );
}

export default Footer