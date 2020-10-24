import React from 'react';
import './Categories.css';
import { Container, Typography, Grid} from '@material-ui/core';

function ProductCategory(props){
    const category = props.category
    return(
    <Container className="category" maxWidth="md">
        <Grid container  justify="center" alignItems="center" direction="column">
            <Grid item style={{marginTop:16},{marginBottom:16}}>
                <Typography variant="h4">{category}</Typography>
            </Grid>
            
            <Grid item>
                <Typography>SKLEP / {category}</Typography>
            </Grid>
        </Grid>
    </Container>
    );
}

export default ProductCategory;