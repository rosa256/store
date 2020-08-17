import React, {useState, useEffect} from 'react';
import './Nav.css';
import {Grid, Container} from '@material-ui/core';
import {Link} from 'react-router-dom';
import axios from "axios";


function Nav(){
    const [activeButtonId, setActiveButtonId] = useState(0);
    const [btnList, setNavButtonsList] = useState([]);


    const generateNavButtons = () =>{
        var categories = [];
        axios.get("http://localhost:8080/categories")
        .then(res =>{
            categories = res.data;
            var tempBtnList = [];
            categories.map((category,index) => {
                tempBtnList.push({
                    "id":index,
                    "categoryName":category
                    }
                )
            })
            setNavButtonsList(tempBtnList);
        });
    }

    const handleClickOption = (e) => {
        setActiveButtonId(Number(e.currentTarget.getAttribute('value')));
        console.log(e.currentTarget.getAttribute('value'));
   }

   useEffect(()=>{
       generateNavButtons();
    }, []);

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
                        to={"/kategoria/" + btn.categoryName}
                    >
                        {btn.categoryName}
                    </Link>
                ))}
            </Grid>
            </Container>
      </div>
    );
}

export default Nav;