import React from 'react';
import {Container} from '@material-ui/core';
import Carousel from 'react-bootstrap/Carousel'
import './CustomCarusel.css';

function CustomCarusel(){
    return(
        <Container maxWidth="xl" className="sectionPadding"> 
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
                src="https://cdn.shoplo.com/4326/s/46/assets/banner_15951635470.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>KOLOR 40</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default CustomCarusel;