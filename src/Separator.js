import React from 'react';
import {Container} from '@material-ui/core';
import './Separator.css';

function Separator(){
    return(
    <Container maxWidth="lg" style={{paddingTop: "20px"}}>
        <div className="separator"/>
    </Container>
    );
}
export default Separator;