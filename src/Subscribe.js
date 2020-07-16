import React from 'react';
import './Subscribe.css';
import {Container, Grid, Typography, TextField, Button} from '@material-ui/core';

function Subscribe(){
  return(
  <Container maxWidth="md" style={{maringTop: "40px"}}>
  <Grid container spacing="3">

    <Grid item md="6" xs="12">
      <Grid container direction="column" alignItems="flex-start">
        <Grid item>
          <Typography variant="h3" align="left">
            Zostaw suba!
          </Typography>
        </Grid>
        <Grid item>
          <Typography align="left" style={{fontSize: "20px"}}>
            Bądź na bieżąco ze wszystkim co EKIPATONOSI dla Ciebie przygotuje!
          </Typography>
        </Grid>
      </Grid>  
    </Grid>
    
    <Grid item md="6" xs="12">
      <Grid container direction="row" wrap="nowrap" spacing="2" alignItems="center">
        <Grid item>
          <TextField variant="outlined" label="Twój email" >

          </TextField>
        </Grid>
        <Grid item>
          <Button variant="outlined">
            SUBSKRYBUJ
          </Button>
        </Grid>
      </Grid> 
    </Grid>
  </Grid>
  </Container>
  );
}

export default Subscribe;