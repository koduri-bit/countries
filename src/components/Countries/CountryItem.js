import styled from 'styled-components';

import DarkModeContext from "../../store/darkmode-context";

import React, { useContext } from 'react';
import {colors} from "../UI/SearchBox";

const CountryItem = (props) => {

    const ctx = useContext(DarkModeContext);

    return (
        <CtryList style={{backgroundColor : ctx.isDarkMode ? colors.topHeaderDarkBgCol : colors.topHeaderLightBgCol,
                          color:  ctx.isDarkMode ? 'white': 'black',
                          boxShadow:ctx.isDarkMode ? colors.darkModeBoxShadow : colors.lightModeBoxShadow}}  >

            <CountryImage src={props.flagimage} {...props}/>
            <Div>
                <CountryName id='countryname'>{props.name}</CountryName>
                <Ptag ctx={ctx}><strong >Population:</strong> {props.population}</Ptag>
                <Ptag ctx={ctx}><strong >Region: </strong>{props.region}</Ptag>
                <Ptag ctx={ctx}><strong >Capital: </strong> {props.capital}</Ptag>
            </Div>


        </CtryList>
    )
}

const Ptag = styled.p`
     color: ${props => (props.ctx.isDarkMode ? 'white' : 'hsl(0, 100%, 5%)')}; 
     margin-top: .5em;
     font-size: 0.9em;
     
     @media only screen and (max-width: 500px){
        font-size:1.5em;
     }
    
`

const CtryList = styled.li`    
              list-style: none;
              font-weight:normal;    
              font-size:10px;
              width:80%;
              height: 85%;
              background-color: white;
              font-weight: lighter;
              
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 50% 50%;
              
    
              border-color: hsl(0, 15%, 91%);
              border-radius: .3em;
              box-shadow: 0 0 .5em 0 hsl(0, 15%, 91%);
              margin: 0 0 0.2em 0;
              
               @media only screen and (max-width: 500px){
                     width:90%;
                     border-radius: .5em;
                     height: 92%;
                }
              
`

const CountryImage = styled.img`
                
                width:100%;
                height:100%;
                border:none;
                object-fit:fill;
               
                
`

const Div = styled.div`
    padding:0;
    margin: 1em 1em 0 1em;
    
     @media only screen and (max-width: 500px){
     
        margin: 1.5em 1em 0 2em;
     }

`

const CountryName = styled.p`
    font-weight:bold;
    margin:0;
    padding: 0 0 0.5em 0;
    font-size:1.3em;
    
     @media only screen and (max-width: 500px){
        font-size:2em;
     }
    
`



/*
<Link
                to={`/countries/${props.name}`}
            >
                Details
            </Link>
 */
export default CountryItem