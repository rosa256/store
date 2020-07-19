import React from 'react';
import {Grid, Container,Typography} from '@material-ui/core';

import {Instagram, YouTube} from '@material-ui/icons'

function FooterSpacer(){
    return(
    <Container style={{marginTop: "8px", marginBottom: "8px"}}>
        <Grid container justify="space-between">
        <Grid item>
            <Grid container>
            <Grid item>
                <Instagram/>
            </Grid>
            <Grid item>
                <YouTube/>
            </Grid>
            </Grid>
        </Grid>
        <Grid item>
            <Typography align="left">
            Copyright © 2020 EKIPATONOSI. Sklepy internetowe Shoplo
            </Typography>
        </Grid>
        </Grid>
    </Container>
    );
}

export default FooterSpacer;