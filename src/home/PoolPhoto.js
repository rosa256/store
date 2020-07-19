import React from 'react';
import './PoolPhoto.css';
import {Container, CardMedia} from '@material-ui/core';

function PoolPhoto(){
    return(
        <Container maxWidth="lg" className="sectionPadding">
        <CardMedia component="img"
        image="https://cdn.shoplo.com/4326/s/40/assets/banner_15644321382.png" />
        
        <div className="sectionPadding"/>

        <CardMedia component="img"
        image="https://cdn.shoplo.com/4326/s/46/assets/banner_15930109090.jpg"/>

      </Container>
    );
  }
  
  export default PoolPhoto;