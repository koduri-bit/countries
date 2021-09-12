import {Fragment, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom';
import useHttp from "../../hooks/use-http";
import {getCountriesFromSingleRegion} from "../../lib/api";
import classes from "../../index.css";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoCountriesFound from "./NoCountriesFound";
import RegionDropDown from "../UI/RegionDropDown";
import CountryList from "./CountryList";
import SearchBox from "../UI/SearchBox";
import styled from "styled-components";

const RegionalCountries = (props) =>{
    const {sendRequest, status, data: loadedCountries, error} = useHttp(getCountriesFromSingleRegion, true);
    const { regionNameId} = useParams();
    const history = useHistory();


    useEffect( () => {
        sendRequest(regionNameId);
    }, [sendRequest, regionNameId])

    if(status === 'pending'){
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

    return (

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

export default RegionalCountries