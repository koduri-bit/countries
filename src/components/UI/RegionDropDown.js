import classes from './RegionDropDown.module.css';
import {Fragment} from "react";

import DarkModeContext from "../../store/darkmode-context";
import React, { useContext } from 'react';


const RegionDropDown = (props) =>{
    const ctx = useContext(DarkModeContext);
    const showCountriesFromRegion = (event) =>{
        event.preventDefault();
        console.log(event.target.value)
        props.pullCountriesFromSelectedRegion(event.target.value)
    }


    return (

            <Fragment>

                <select className={classes.select_dropdown}
                        name="region" id="region" defaultValue={'DEFAULT'}
                        onChange={showCountriesFromRegion}
                        style={{backgroundColor : ctx.isDarkMode ? colors.topHeaderDarkBgCol : colors.topHeaderLightBgCol,
                                boxShadow:ctx.isDarkMode ? colors.darkModeBoxShadow : colors.lightModeBoxShadow,
                                color:  ctx.isDarkMode ? 'white': 'black'}}>

                    <option  value="DEFAULT" disabled>Filter by Region   &nbsp;&nbsp; </option>
                    <option  value="Africa">Africa</option>
                    <option  value="Americas">Americas </option>
                    <option  value="Asia">Asia</option>
                    <option  value="Europe">Europe</option>
                    <option  value="Oceania">Oceania</option>
                </select>
            </Fragment>

    )
}

export const colors = {
    darkModeBackgroundColour : 'hsl(207, 26%, 17%)' ,
    lightModeBackgroundColour : 'hsl(0, 0%, 98%)',
    topHeaderDarkBgCol : 'hsl(207, 16%, 22%)',
    topHeaderLightBgCol : '#ffffff',

    lightModeBoxShadow: '0 0 .5em 0 rgb(235, 229, 229)',
    darkModeBoxShadow:  '0 0 .5em 0 rgb(37, 40, 43)',
}
/*const Select =  styled.select`
                    margin: 2em 2.4em 1em 0;
                    border: none;
                    outline: none;
                    height: 3.2em;
                    padding: 1em 0 1em 1em;
                    width: 45%;
                    border-radius: .2em;
                    align-self: center;
                    justify-self: end;
                    box-shadow: 0 0 .5em 0 hsl(0, 15%, 91%);
                    font-family: inherit;
                    &:focus{
                    box-shadow: 0 0 .5em 0 hsl(0, 15%, 82%);
                }  

`*/
export default RegionDropDown