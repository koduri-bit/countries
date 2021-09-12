import classes from './TopHeader.module.css'
import styled from 'styled-components';
import React, { useContext } from 'react';
import DarkModeContext from "../../store/darkmode-context";

const TopHeader = (props) => {
    const ctx = useContext(DarkModeContext);

    const stylesForToggleLight = ctx.isDarkMode ?  `fas fa-moon ${classes.pointer}` : `far fa-moon ${classes.pointer}`

    return (

            <HeaderSection ctx={ctx} id='header-sec'>

                   <Where  ctx={ctx} id='where'>Where in the world?</Where>
                   <Mode ctx={ctx} id='mode'>
                        {
                            ctx.isDarkMode ? <LightORDarkLogo1><i className={stylesForToggleLight} onClick={ctx.switchBtwDarkAndLight}></i> </LightORDarkLogo1>
                                        : <LightORDarkLogo1><i className={stylesForToggleLight} onClick={ctx.switchBtwDarkAndLight}></i> </LightORDarkLogo1>
                        }
                        <LightOrDarkText ctx={ctx}>Dark Mode</LightOrDarkText>
                   </Mode>
            </HeaderSection>

    )
}

export const colors = {
    darkModeBackgroundColour : 'hsl(207, 26%, 17%)' ,
    lightModeBackgroundColour : 'hsl(0, 0%, 98%)',

    topHeaderDarkBgCol : 'hsl(207, 16%, 22%)',
    topHeaderLightBgCol : '#ffffff',
}

const HeaderSection = styled.div`

     display: grid;
     grid-template-columns: 1fr 1fr;
     justify-content: center;
     align-items: center;
     row-gap: 0;
     column-gap: 0;   
     outline: none;
     height:4em;
     background-color: ${ (props) =>  props.ctx.isDarkMode ? colors.topHeaderDarkBgCol : colors.topHeaderLightBgCol };
     
`

const Where = styled.div`
      justify-self: start;
      margin:1em 0 1em 2em ;
      color: ${ (props) =>  props.ctx.isDarkMode ? '#ffffff' : '#000000' };
      font-weight: bold;
`

const Mode = styled.div`
      justify-self: end;
      margin:1em 2em 1em 0 ;    
      display:flex; 
      color: ${ (props) =>  props.ctx.isDarkMode ? '#ffffff' : '#000000' };      
`



const LightOrDarkText = styled.div`
    margin:0 ;
    padding:0;
    color: ${ (props) =>  props.ctx.isDarkMode ? '#ffffff' : '#000000' };
`

const LightORDarkLogo1 = styled.a`
    margin:0 .5em 0 .1em;
    padding:0;
    border:none;
`


export default TopHeader