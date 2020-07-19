import React from 'react';
import './Nav.css';
import {Grid, Container} from '@material-ui/core';
import {Link} from 'react-router-dom';

function Nav(){
    const navStyle = {
        color: 'dark'
    };

    return(
        <div className="navBarSticky">
            <Container maxWidth="md">
            <Grid container spacing={1} className="navBar" justify="space-evenly"  direction="row">
                
                <Link className="link" to="/kategoria/t-shirty"><Grid item>T-SHIRT</Grid></Link>
                <Link className="link" to="/kategoria/gadzety"><Grid item>GADŻETY</Grid></Link>
                <Link className="link" to="/kategoria/longsleeve"><Grid item>LONGSLEEVE</Grid></Link>
                <Link className="link" to="/kategoria/bluzy"><Grid item>BLUZY</Grid></Link>
                <Link className="link" to="/kategoria/biurka"><Grid item>BIURKA</Grid></Link>
                <Link className="link" to="/kategoria/nowosci"><Grid item>NOWOŚCI</Grid></Link>
                <Link className="link" to="/kategoria/los-angeles"><Grid item>LOS ANGELES</Grid></Link>
            </Grid>
            </Container>
      </div>
    );
}

export default Nav;