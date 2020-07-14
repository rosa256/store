import React from 'react';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import CustomCarusel from './CustomCarusel';
import Recomended from './Recomended';
import {makeStyles } from '@material-ui/core/styles';
import {Grid, Container, CardMedia, Typography, Button, TextField} from '@material-ui/core';
import {Instagram, YouTube} from '@material-ui/icons'

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
  section:{
    fontSize:21,
    lineHeight:"1.56",
    justifyContent:"flex-end",
  },
  separator:{
    backgroundColor:"#e4e7eb",
    height:"2px",
    marginTop:"40px",
    marginBottom:"40px",
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

      <Container maxWidth="xl" className={classes.sectionPadding}>
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
      </Container>

      <Recomended/>

      <Container maxWidth="lg" className={classes.sectionPadding}>
          <CardMedia component="img"
          image="https://cdn.shoplo.com/4326/s/40/assets/banner_15644906830.png"/>
      </Container>

      <Container maxWidth="lg">
        <Typography className={classes.section}>
        Marka, która powstała z myślą o zmianie garderoby EKIPY na sprawdzone produkty najwyższej jakości.
        Projekty naszych ubrań tworzymy dla Was z myślą o nas samych. Dopiero po dokładnym sprawdzeniu ich na własnej skórze oddajemy je w Wasze ręce. 
        Jesteśmy pewni, że nasze produkty pozytywnie zaskoczą Was jakością wykonania oraz dbałością o wykończenie.
        </Typography>
      </Container>

      <Container maxWidth="lg" className={classes.sectionPadding}>
        <CardMedia component="img"
        image="https://cdn.shoplo.com/4326/s/40/assets/banner_15644321382.png" />
        
        <div className={classes.sectionPadding}/>

        <CardMedia component="img"
        image="https://cdn.shoplo.com/4326/s/46/assets/banner_15930109090.jpg"/>

      </Container>

      <Container maxWidth="lg" style={{paddingTop: "20px"}}>
        <div className={classes.separator}/>
      </Container>

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

      <Container maxWidth="lg" style={{paddingTop: "20px"}}>
        <div className={classes.separator}/>
      </Container>

      <Container maxWidth="lg" className={classes.section}>
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

      <Container maxWidth="lg">
        <div className={classes.separatorEnd}/>
      </Container>

      <Container style={{marginTop: "8px", marginBottom: "8px"}}>
        <Grid container justify="space-between">
          <Grid item>
            <Grid container spacing="1">
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

    </div>
  );
}

  // <Container className={classes.sliderSize}>
  // <Grid item>          
  //   <CardMedia component="img"
  //   image="https://cdn.shoplo.com/4326/s/46/assets/banner_15850858471.jpg"/>
  // </Grid>
  // </Container>


// <AwesomeSlider
//             media={[
//               {
//                 source: 'https://cdn.shoplo.com/4326/s/46/assets/banner_15850858471.jpg',
//               },
//               {
//                 source: 'https://cdn.shoplo.com/4326/s/40/assets/banner_15646000441.png',
//               },
//               {
//                 source: 'https://cdn.shoplo.com/4326/s/46/assets/banner_15922254450.jpg',
//               },
//             ]}
//           />