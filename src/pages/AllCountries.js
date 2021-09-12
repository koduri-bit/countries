import {Fragment, useEffect} from 'react'
import CountryList from '../components/Countries/CountryList'
import useHttp from '../hooks/use-http';
import { getAllCountries } from '../lib/api';
import LoadingSpinner from "../components/UI/LoadingSpinner";
import classes from '../index.css'
import NoCountriesFound from "../components/Countries/NoCountriesFound";
import RegionDropDown from "../components/UI/RegionDropDown";
//import RegionalCountries from "../components/Countries/RegionalCountries";
import {  useHistory } from 'react-router-dom';
import SearchBox from "../components/UI/SearchBox";
//import allcountriesclass from './AllCountries.module.css'
import styled from "styled-components";

const AllCountries = (props) => {

    const {sendRequest, status, data: loadedCountries, error} = useHttp(getAllCountries, true)

    const history = useHistory();

    useEffect( () => {
        sendRequest();
    }, [sendRequest])

    if(status === 'pending')
    {
        return <div className={classes.centered}>
                    <LoadingSpinner/>
                </div>
    }

    const errorStyles = classes.centered + ' '+ classes.focused
    if(error){
        return <p className={errorStyles}>{error}</p>
    }

    if(status === 'completed' && (!loadedCountries || loadedCountries.length === 0)){
        return <NoCountriesFound/>
    }

    const pullCountriesFromSelectedRegion = (selectedRegion) =>{

        history.push(`/region/${selectedRegion}`)
    }


    return(
            <Fragment>

                <Div id='sr-reg'>
                    <SearchBox />
                    <RegionDropDown
                        pullCountriesFromSelectedRegion={pullCountriesFromSelectedRegion}
                    />
                </Div>
                <CountryList  countries={loadedCountries}/>
            </Fragment>

    )
}

const Div =  styled.div`
     display:grid; 
     grid-template-columns: 1fr 1fr;
     grid-template-rows: 1fr; 
     
     @media only screen and (max-width: 500px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr; 
     }
`

export default AllCountries