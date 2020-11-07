import React, { useState, useEffect } from 'react';
import {Grid, Container, TextField, Button} from '@material-ui/core';
import axios from 'axios';

const LOGIN = 'user1'
const PASSWORD = 'user1'

function TriggerBasicAuth () {
    console.log("Triggered Basic Auth");
    const[productImages, setProductImages] = useState([]);
    var authUrl = "/basicauth";
    const invokeAuth = () =>{
        axios.get(authUrl, { headers: {authorization: createBasicAuthToken(LOGIN,PASSWORD)}})
    }
  
    useEffect(() => {
        invokeAuth();
    }, []);
    return(<p>;)</p>)
}

function createBasicAuthToken(username, password) {
    return 'Basic ' + window.btoa(username + ":" + password)
}


const LoginForm = ()=> {
    TriggerBasicAuth();
    const onSubmit = ((data) => {
        
    });
    return(
        <Container maxWidth="xs">
            <form onSubmit={onSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Username" name="username" size="small" variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Password" name="password" size="small" type="password" variant="outlined"/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button color="default" fullWidth type="submit" variant="contained">
                            Zaloguj
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default LoginForm;
