import React from 'react';
import './Describe.css'
import {Container, Typography, CardMedia} from '@material-ui/core';

function Describe(){
    return(
    <div>
        <Container maxWidth="lg" className="sectionPadding">
            <CardMedia component="img"
            image="https://cdn.shoplo.com/4326/s/40/assets/banner_15644906830.png"/>
        </Container>

        <Container maxWidth="lg">
            <Typography className="section">
            Marka, która powstała z myślą o zmianie garderoby EKIPY na sprawdzone produkty najwyższej jakości.
            Projekty naszych ubrań tworzymy dla Was z myślą o nas samych. Dopiero po dokładnym sprawdzeniu ich na własnej skórze oddajemy je w Wasze ręce. 
            Jesteśmy pewni, że nasze produkty pozytywnie zaskoczą Was jakością wykonania oraz dbałością o wykończenie.
            </Typography>
        </Container>
    </div>
    );
}

export default Describe;
