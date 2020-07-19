
import {Grid, Container, CardMedia} from '@material-ui/core';
import React from 'react';
import './TwoPhotos.css';

function TwoPhotos(){

  return(
  <Container maxWidth="xl" className="sectionPadding">
  <Grid container direction="row" wrap="nowrap">
    <Grid item>
      <CardMedia component="img"
      image="https://cdn.shoplo.com/4326/s/46/assets/banner_15922255071.jpg"/>
    </Grid>
  
    <Grid item>
      <CardMedia component="img"
      image="https://cdn.shoplo.com/4326/s/46/assets/banner_15922255072.jpg"/>
    </Grid>
  </Grid>
  </Container>);
}

export default TwoPhotos;
