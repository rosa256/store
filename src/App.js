import React from 'react';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import CustomCarusel from './CustomCarusel';
import Recomended from './Recomended';
import Footer from './Footer';
import TwoPhotos from './TwoPhotos';
import FooterSpacer from './FooterSpacer';
import Separator from './Separator';
import Subscribe from './Subscribe';
import PoolPhoto from './PoolPhoto';
import Describe from './Describe';

import {makeStyles } from '@material-ui/core/styles';
import {Grid, Container, CardMedia, Typography, Button, TextField} from '@material-ui/core';

import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles({
  sectionPadding: {
    paddingTop: 64,
  },
  recomend:{
    paddingBottom: 12,
  },
  banerPadding:{
    paddingTop:64,
  },
  separatorEnd:{
    backgroundColor:"#e4e7eb",
    height:"2px",
    marginTop:"40px",
  },
});


export default function App() {
  const classes = useStyles();

  return (
    <div className="App">

      <Header/>
      <Nav/>
      <CustomCarusel/>

      <TwoPhotos />

      <Recomended/>

      <Describe />

      <PoolPhoto />

      <Separator />
      <Subscribe />
      <Separator />
      <Footer />

      <Container maxWidth="lg">
        <div className={classes.separatorEnd}/>
      </Container>

      <FooterSpacer />
    </div>
  );
}