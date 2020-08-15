import React, {useState, useEffect} from 'react';
import './Nav.css';
import {Grid, Container, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

const btnList = [
    {
        id:1,
        name:"TSHIRT"
    },
    {
        id:2,
        name:"gadzety"
    },
    {
        id:3,
        name:"bluzy"
    },
    {
        id:4,
        name:"longsleeve"
    },
    {
        id:5,
        name:"los-angeles"
    },
    {
        id:6,
        name:"buirka"
    },
];

function Nav (){
  
    const[activeButtonId, setActiveButtonId] = useState(0);

    const handleClickOption = (e) => {
        setActiveButtonId(Number(e.currentTarget.getAttribute('value')));
        console.log(e.currentTarget.getAttribute('value'));
   }

    return(
        <div className="navBarSticky">
            <Container maxWidth="md">
            <Grid container spacing={1} className="navBar" justify="space-evenly"  direction="row">
                {btnList.map(btn =>(
                    <Link 
                        key = {btn.id}
                        onClick={handleClickOption}
                        value={btn.id} 
                        className={[btn.id === activeButtonId ? "is_active" : "", "link"].join(' ')} 
                        to={"/kategoria/" + btn.name}
                    >
                        {btn.name}
                    </Link>
                ))}


            </Grid>
            </Container>
      </div>
    );
}

export default Nav;