import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Container, CardMedia, Typography, Button, TextField} from '@material-ui/core';
import {AddShoppingCart, Instagram, YouTube, Search} from '@material-ui/icons'

import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles({
  rootHeader: {
    paddingTop: 24,
    paddingBottom: 24,
    borderStyle: "solid"
  },
  loginHeader:{
    paddingRight: "12px",
    fontWeight: "bold",
  },
  iconHeader:{
    // paddingTop: "5px",
    fontSize: "27px"
  },
  navBar: {
    paddingTop: 17,
    paddingBottom: 17,
    marginTop: 4,
  },
  navBarSticky:{
    position:"-webkit-sticky", /* Safari */
    position: "sticky",
    top: 0,
    zIndex:99,
    backgroundColor: "white",
  },
  sectionPadding: {
    paddingTop: 64,
  },
  productItemPadding:{
    paddingTop: 8,
  },
  productPrice:{
    fontWeight: "bold",
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
      <Container maxWidth="md" className={classes.rootHeader}>
          <Grid container  justify="flex-start" alignItems="center" >
            
            <Grid container xs='12' sm='12' md='4' spacing={1} >
                <Grid item> <Instagram/> </Grid>
                <Grid item> <YouTube/> </Grid>
            </Grid>

            <Grid container xs='12' sm='12' md='4'>
              <CardMedia
              component="img"
              image="https://cdn.shoplo.com/4326/s/46/assets/logo.png?2037"/>
            </Grid>
           
            <Grid container xs='12' sm='12' md='4' justify="flex-end" alignItems="center" spacing={1}>
              <Grid item>
                  <Typography className={classes.loginHeader}>Zaloguj się</Typography>
              </Grid>
              <Grid item> <AddShoppingCart className={classes.iconHeader}/> </Grid>
              <Grid item> <Search className={classes.iconHeader}/> </Grid>
            </Grid>
          </Grid>
      </Container>

      <div className={classes.navBarSticky}>
        <Container maxWidth="md">
          <Grid container spacing={1} className={classes.navBar} justify="space-evenly"  direction="row">
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
      <Container maxWidth="xl" className={classes.sectionPadding}> 
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.shoplo.com/4326/s/46/assets/banner_15850858471.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>BLUZY</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.shoplo.com/4326/s/40/assets/banner_15646000441.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>GADŻETY</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.shoplo.com/4326/s/46/assets/banner_15922254450.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>KOLOR 40</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

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

      <Container maxWidth="lg" className={classes.sectionPadding}>
        <Grid container spacing="3">

          <Grid item xs="12">
            <Typography variant="h3" className={classes.recomend} >Polecamy</Typography>
          </Grid>
          
          <Grid item md="4" sm="6" xs="12">
            <Grid container direction="column">
              <CardMedia component="img"
              image="https://cdn.shoplo.com/4326/products/th480/aaae/1406-05.jpg"/>

              <Typography className={classes.productItemPadding}>
                T-Shirt TONAL Biały
              </Typography>

              <Typography className={[classes.productPrice, classes.productItemPadding]}>
                od 54.99 zł
              </Typography>

              <Grid item className={classes.productItemPadding}>
                <Button variant="outlined" className={classes.addToCartButton}>
                  Do koszyka
                </Button>
              </Grid>
            </Grid>    
          </Grid>

          <Grid item md="4" sm="6" xs="12">
            <Grid container direction="column" alignContent="space-around">
              <CardMedia component="img"
              image="https://cdn.shoplo.com/4326/products/th480/aaag/1424-24-tonal.jpg"/>

              <Typography className={classes.productItemPadding}>
              T-Shirt TONAL Czerwony
              </Typography>

              <Typography className={[classes.productPrice, classes.productItemPadding]}>
              od 54.99 zł
              </Typography>

              <Grid item className={classes.productItemPadding}>
                <Button variant="outlined" className={classes.addToCartButton}>
                  Do koszyka
                </Button>
              </Grid>
            </Grid>  
          </Grid>
          
          <Grid item md="4" sm="6" xs="12">
            <Grid container direction="column">
              <CardMedia component="img"
              image="https://cdn.shoplo.com/4326/products/th480/aaac/1420-25-tonal.jpg"/>
            </Grid>
          
            <Typography className={classes.productItemPadding}>
            T-Shirt TONAL Czarny
            </Typography>

            <Typography className={[classes.productPrice, classes.productItemPadding]}>
              od 54.99 zł
            </Typography>

            <Grid item className={classes.productItemPadding}>
              <Button variant="outlined" className={classes.addToCartButton}>
                Do koszyka
              </Button>
            </Grid>
          </Grid>

          <Grid item md="4" sm="6" xs="12">
            <Grid container direction="column">
              <CardMedia component="img"
              image="https://cdn.shoplo.com/4326/products/th480/aaaa/1372-03.jpg"/>
            </Grid>
          
            <Typography className={classes.productItemPadding}>
            T-Shirt EKIPATONOSI KOLOR 40
            </Typography>

            <Typography className={[classes.productPrice, classes.productItemPadding]}>
              od 69.99 zł
            </Typography>

            <Grid item className={classes.productItemPadding}>
              <Button variant="outlined" className={classes.addToCartButton}>
                Do koszyka
              </Button>
            </Grid>
          </Grid>

          <Grid item md="4" sm="6" xs="12">
            <Grid container direction="column">
              <CardMedia component="img"
              image="https://cdn.shoplo.com/4326/products/th480/aaao/1360-tromba-kolor40.jpg"/>
            </Grid>
          
            <Typography className={classes.productItemPadding}>
              Bluza EKIPATONOSI KOLOR 40
            </Typography>

            <Typography className={[classes.productPrice, classes.productItemPadding]}>
              od 189.99 zł
            </Typography>

            <Grid item className={classes.productItemPadding}>
              <Button variant="outlined" className={classes.addToCartButton}>
                Do koszyka
              </Button>
            </Grid>
          </Grid>

          <Grid item md="4" sm="6" xs="12">
            <Grid container direction="column">
              <CardMedia component="img"
              image="https://cdn.shoplo.com/4326/products/th480/aaa5/1328-sesja-la-fire-08-3.jpg"/>
            </Grid>
          
            <Typography className={classes.productItemPadding}>
              T-Shirt LA Fire
            </Typography>

            <Typography className={[classes.productPrice, classes.productItemPadding]}>
              od 89.99 zł
            </Typography>

            <Grid item className={classes.productItemPadding}>
              <Button variant="outlined" className={classes.addToCartButton}>
                Do koszyka
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>

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
                <TextField variant="outlined" label="Twój email">

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