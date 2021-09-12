import {  useState } from 'react';
import {useHistory} from "react-router-dom";
import classes from './SearchBox.module.css';

import DarkModeContext from "../../store/darkmode-context";
import React, { useContext } from 'react';

const SearchBox = (props) => {

    const [enteredCountry, setEnteredCountry] = useState('');
    const ctx = useContext(DarkModeContext);
    const history = useHistory();

    const countrySearchHandler = (event) => {
        setEnteredCountry(event.target.value);
    };

    const pressingEnterKeyForSearch = (event) =>{
        if (event.key === 'Enter') {
            history.push(`/country/${enteredCountry}`)
        }
    }



    const styles =  classes['input_searchbox']
    let stylesForSearch = ctx.isDarkMode ? `${classes['input-search-and-icon'] }` :
                                         `${classes['input-search-and-icon']}` ;
    return (
            <div className={stylesForSearch}
                 style={{backgroundColor : ctx.isDarkMode ? colors.topHeaderDarkBgCol : colors.topHeaderLightBgCol,
                         boxShadow:ctx.isDarkMode ? colors.darkModeBoxShadow : colors.lightModeBoxShadow,
                         color:  ctx.isDarkMode ? 'white': 'black'}} id='search' >
                <button className={classes['btn-search']} >
                    <i className={`fa fa-search ${classes.searchIconColor}`} ></i>
                </button>
               <input
                    className={styles}
                    type='text'
                    value={enteredCountry}
                    onChange={countrySearchHandler}
                    onKeyDown={pressingEnterKeyForSearch}
                    placeholder="Search for a country..."
                    style={{backgroundColor : ctx.isDarkMode ? colors.topHeaderDarkBgCol : colors.topHeaderLightBgCol,
                            color:  ctx.isDarkMode ? 'white': 'black'}}

                />

            </div>
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


export default SearchBox


