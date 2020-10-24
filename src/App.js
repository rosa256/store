import React, {useState, useEffect} from 'react';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import CustomCarusel from './home/CustomCarusel';
import Recomended from './home/Recomended';
import Footer from './Footer';
import TwoPhotos from './home/TwoPhotos';
import FooterSpacer from './FooterSpacer';
import Separator from './Separator';
import Subscribe from './home/Subscribe';
import PoolPhoto from './home/PoolPhoto';
import Describe from './home/Describe';
import Products from './products/Products';
import ProductDetails from './productDetails/ProductDetails'
import axios from "axios";


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {makeStyles } from '@material-ui/core/styles';
import {Container} from '@material-ui/core';

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

const ProductsByCategoryOrDetails = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    axios.get("http://localhost:8000/api/products/categories")
    .then(res => {
      console.log(res);
      setCategories(res.data);
    })
  }

  useEffect(()=> {
    getCategories();
  }, []);
  return (
    categories.map((category, index) =>{
      return(
        <React.Fragment key = {category}>
          <Route path={"/kategoria/" + category} exact>
            <Products category={category}/>
          </Route>,
          <Route path={"/kategoria/" + category + "/:productNameUrl"} render={(props) => <ProductDetails category={category} {...props}/> } />
        </React.Fragment>
      );
    })
  );
};


export default function App() {
  const classes = useStyles();

  return (
    <div className="App">

      <Router>
        <Header/>
        <Nav/>
        <Switch>
          <Route path="/" exact>
            <CustomCarusel/>
            <TwoPhotos />
            <Recomended/>
            <Describe />
            <PoolPhoto />
            <Separator />
            <Subscribe />
            <Separator />
            <Footer />
          </Route>
          <ProductsByCategoryOrDetails/> 
        </Switch>
      </Router>

      
      <Container maxWidth="lg">
        <div className={classes.separatorEnd}/>
      </Container>

      <FooterSpacer />
    </div>
  );
}





