import React, {useState, useEffect} from 'react';
import './Products.css';
import { Container, Grid} from '@material-ui/core';
import Categories from './Categories';
import ProductNavBar from './ProductNavBar';
import ProductItem from './ProductItem';
import axios from "axios";


const CategoryProducts = (props) => {
    console.log(props.category)
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        axios.get("http://localhost:8000/api/products/kategoria/" + props.category)
        .then(res => {            
            setProducts(res.data)
        });
    };

    useEffect(() => {
        getProducts();
    }, [])

    return (
        products.map((product, index) => {
            return(
                <ProductItem key={product.nameUrl} imageUrl={product.imageUrl} nameUrl={product.nameUrl} name={product.name} category={product.category} price={product.price} imageHover={product.hoveredImageUrl}/>                
            );                
        })
    );
};

function Products(props){
    const category = props.category;
    return(
        <div>
            <Categories category={category}/>
            <ProductNavBar/>
            <Container style={{marginTop:'24px'}} maxWidth="lg">
                <Grid container spacing={3}>
                    <CategoryProducts category={category}/>
                </Grid>
            </Container>
        </div>
    );
}

export default Products;