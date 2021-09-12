import useHttp from "../../hooks/use-http";

import { getSingleCountryByThreeLetterCode} from "../../lib/api";
import { Link} from "react-router-dom";
import classes from "../../index.css";
import styled from 'styled-components';
//import cssBorderCountry from './BorderCountryList.module.css'
import DarkModeContext from '../../store/darkmode-context'

import React, { useContext , useEffect} from 'react';

const BorderCountryList = (props) =>{
    const {sendRequest, status, data: loadedCountry, error} = useHttp(getSingleCountryByThreeLetterCode, true)
    const ctx = useContext(DarkModeContext);
    const threeLetterCountryCode = props.borderCountry;

    useEffect( () => {
        sendRequest(threeLetterCountryCode)
    }, [sendRequest, threeLetterCountryCode])



    if(status === 'pending'){
        return <div className={classes.centered}>
                   ...Loading
               </div>
    }

  // const errorStyles = classes.centered + ' '+ classes.focused
   /* if(error){
        return <p className={errorStyles}>{error}</p>
    }*/
    if(error){
        return null
    }

    if(status === 'completed' && (!loadedCountry.name )){
        return null
    }

    return   (<ListStyle ctx={ctx}  id='listinctry'>
                <StyledLink
                      to={`/country/${loadedCountry.name}`}>
                        {loadedCountry.name}
                </StyledLink>
             </ListStyle>)

}

const StyledLink = styled(Link)`

    font-size: 9px;
    padding: .3em .5em .3em .5em;
    border-width: thin;
    border-color: hsl(0, 15%, 91%);
    border-radius: .2em;
    box-shadow: 0 0 .5em 0 hsl(0 , 28%, 79%);
    font-family: inherit;
    text-decoration:none;
    color: inherit;
    
    @media only screen and (max-width: 500px){
         
         font-size: .8em;
         padding: 0.3em 0.6em 0.3em 0.6em;
         box-shadow: 0 0 .5em 0 hsl(0 , 6%, 67%);
         border-radius: .3em;
    }
    
`
/*const linkStyle = styled.Link`
    font-size: 9px;
    padding: .3em .5em .3em .5em;
    border-width: thin;
    border-color: hsl(0, 15%, 91%);
    border-radius: .2em;
    box-shadow: 0 0 .5em 0 hsl(0 , 28%, 79%);
    font-family: inherit;
    text-decoration:none;
    color: inherit;
`*/
const ListStyle = styled.li`

    list-style: none;
    margin: 0 0 0 .35em;
    padding: 0;
    color: ${props => (props.ctx.isDarkMode ? 'white' : 'hsl(0, 100%, 5%)')}; 
    
    @media only screen and (max-width: 500px){
         'justify-self': 'flex-start';
          margin: 0.4em 0 0 0.3em;
          
          &:nth-child(1){
           margin-left: 0;
          }
          
    }

`
/*const linkStyle = {
    'fontSize': '9px',
    'padding': '.3em .5em .3em .5em',
    'borderWidth': 'thin',
    'borderColor': 'hsl(0, 15%, 91%)',
    'borderRadius': '.2em',
    'boxShadow': '0 0 .5em 0 hsl(0, 28%, 79%)',
    'fontFamily': 'inherit',
    'textDecoration': 'none',
    'color':'inherit',


}*/



export default BorderCountryList
