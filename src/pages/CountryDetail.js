import {useParams,  useHistory} from 'react-router-dom';

import useHttp from "../hooks/use-http";
import {getSingleCountry} from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import classes from "../index.css";
import NotFound from './NotFound'
import BorderCountryList from "../components/Countries/BorderCountryList";
import styled from 'styled-components';
import cssCountryDetails from './CountryDetails.module.css'

import DarkModeContext from '../store/darkmode-context'

import React, { useContext, Fragment, useEffect } from 'react';

const CountryDetail = (props) => {
    const params = useParams();
    const {countryNameId } = params ;
    const {sendRequest, status, data: loadedCountry, error} = useHttp(getSingleCountry, true)
    const history = useHistory();
    const ctx = useContext(DarkModeContext);

    useEffect( () => {

        sendRequest(countryNameId)
    }, [sendRequest, countryNameId])



    const goBackToPreviousPage = () =>{
        history.goBack();
    }
    if(status === 'pending'){
        return <div className={classes.centered}>
            <LoadingSpinner/>
        </div>
    }

    const errorStyles = classes.centered + ' '+ classes.focused
    if(error){
        return <p className={errorStyles}>{error}</p>
    }

    if(status === 'completed' && (!loadedCountry.nativeName )){
        return <NotFound />
    }

    let borderCountries = null ;

    if( loadedCountry.borders !== null ||  loadedCountry.borders !== undefined){

       borderCountries = (
            <ul className={cssCountryDetails.ulStyle}>
                {
                    loadedCountry.borders.map( ( country) => (

                       <BorderCountryList key={country} borderCountry={country}/>
                        )
                    )
                 }
            </ul>
        )
    }

    let arrayOfLangForEachCountry = [];


    for(let lang in loadedCountry.languages){
        //console.log(`${lang}: ${loadedCountry.languages[lang].name}`);
        arrayOfLangForEachCountry.push(loadedCountry.languages[lang].name);
    }

    let languagesOfEachCountry = null;
    languagesOfEachCountry = (
        <ul className={cssCountryDetails.ulLangStyle}>
            {
                arrayOfLangForEachCountry.map(( lang, index) => {
                    if(index+1 === arrayOfLangForEachCountry.length){
                        return <ListOfLangEachCtry ctx={ctx} className={cssCountryDetails.eachLangList} key={lang}>{lang}</ListOfLangEachCtry>
                    }else{
                        return <ListOfLangEachCtry ctx={ctx} className={cssCountryDetails.eachLangList} key={lang}>{lang},</ListOfLangEachCtry>
                    }

                }
                )
            }
        </ul>
    )


    return (
        <Fragment>

           <DivForBTNandDetails id='divbtnndetails'>

               <button className={cssCountryDetails.backBtnLink} onClick={goBackToPreviousPage} id='btnbck'>
                  {/* <i className={`${cssCountryDetails.leftArrowBtn} fa fa-long-arrow-left`}></i>*/}
                   <LeftArrowIcon ctx={ctx} className= "fa fa-long-arrow-left"></LeftArrowIcon>
                   <BackSpan ctx={ctx}>Back</BackSpan>
               </button>



               <Details id='details'>
                   <CountryImage src={loadedCountry.flagimage} />
                   <div className={cssCountryDetails['sub-details']}>
                       <div className={cssCountryDetails['country-name']}>
                           <CountryNamePtag ctx={ctx}><strong >{countryNameId}</strong></CountryNamePtag>
                       </div>
                       <div className={cssCountryDetails['full-details']}>
                           <Ptag ctx={ctx}><strong >Native Name:</strong> {loadedCountry.nativeName}</Ptag>
                           <Ptag ctx={ctx}><strong >Population:</strong> {loadedCountry.population}</Ptag>
                           <Ptag ctx={ctx}><strong >Region: </strong>{loadedCountry.region}</Ptag>
                           <Ptag ctx={ctx}><strong >Sub Region: </strong>{loadedCountry.subregion}</Ptag>
                           <Ptag ctx={ctx}><strong >Capital: </strong>{loadedCountry.capital}</Ptag>
                           <Ptag ctx={ctx}><strong >Top Level Domain: </strong>{loadedCountry.topLevelDomain}</Ptag>
                           <Ptag ctx={ctx}><strong >Currencies: </strong>{loadedCountry.currencies[0].name}</Ptag>
                          {/* <Ptag ><strong >Languages: </strong></Ptag>{languagesOfEachCountry}*/}
                           {/*<Ptag ><strong >Languages: </strong>{loadedCountry.languages[0].name}</Ptag>*/}
                           <div >
                               <SpanBorder ctx={ctx}><strong>Languages:</strong>
                               </SpanBorder>
                               {languagesOfEachCountry}
                           </div>

                       </div>


                      <div className={cssCountryDetails['brdlist']}>
                          <SpanBorder  ctx={ctx}><strong>Border Countries:</strong>
                            </SpanBorder>
                          {borderCountries !== null ? borderCountries: null}
                      </div>


                   </div>

               </Details>
           </DivForBTNandDetails>


        </Fragment>

    )
}

const DivForBTNandDetails = styled.div`

     display: grid;
     grid-template-columns: 1fr;
     grid-template-rows: 110px auto;
     justify-content: center;
     align-items: center;
     row-gap: 0;
     column-gap: 0;   
     outline: none;
     
     @media only screen and (max-width: 500px){ 
     
        grid-template-rows: 110px auto auto;
        
     }
`
const LeftArrowIcon = styled.i`
     padding:0;
    margin: 0;
    font-size: 1.6em;
    color: ${props => (props.ctx.isDarkMode ? 'white' : 'hsl(0, 100%, 5%)')};
`

const BackSpan= styled.span`
    text-align: center;
   
    padding:0;
    font-family: inherit;
    font-size: 11px;
   justify-self:start;
   color: ${props => (props.ctx.isDarkMode ? 'white' : 'hsl(0, 100%, 5%)')};
`

const Details = styled.div`
            font-weight: lighter;
            display: grid;
     grid-template-columns: 1fr 1fr;
     grid-template-rows: 1fr;
     justify-content: center;
     align-items: center;
     row-gap: 0;
     column-gap: 0;   
     outline: none;
     
     @media only screen and (max-width: 500px){ 
        grid-template-columns: 1fr;
        grid-template-rows: 13em 2fr;
        justify-content: center;
        align-items: center;
     }
            
`
const CountryImage = styled.img`
                
                width:75%;
                height:70%;
                border:none;
                object-fit:fill;
                margin:0.5em 0 0 2em;
                border:none;
                padding:none;
                align-self:center;
               
                @media only screen and (max-width: 500px){
                    align-self: start ;
                    height:78%;
                    object-fit: contain;
                    margin:0.5em 0 0 1.3em;
                    width: 50%;
                }
                
`
const CountryNamePtag = styled.p`
        font-size:16px;
        color: ${props => (props.ctx.isDarkMode ? 'white' : 'hsl(0, 100%, 5%)')};
        
        @media only screen and (max-width: 500px){ 
            font-size:1.7em;
        }
`
const Ptag = styled.p`
         
     font-size:10px;
     color: ${props => (props.ctx.isDarkMode ? 'white' : 'hsl(0, 100%, 5%)')};
    
      @media only screen and (max-width: 500px){ 
            font-size:1em;
            margin: .4em 0 .4em 0;
        }
    
`
const SpanBorder= styled.span`
     font-size:10px;
     color: ${props => (props.ctx.isDarkMode ? 'white' : 'hsl(0, 100%, 5%)')}; 
     @media only screen and (max-width: 500px){ 
            font-size:1em;
        }
`

const ListOfLangEachCtry = styled.li`
     list-style: none;
    padding: 0;
    margin: 0 0 0 0.2em;
    font-family: inherit;
    text-decoration: none;
    font-size: 10px;
    color: ${props => (props.ctx.isDarkMode ? 'white' : 'hsl(0, 100%, 5%)')};
     @media only screen and (max-width: 500px){ 
            font-size:1em;
        }
     
`




/*
const Div = styled.div`
     display: grid;
     grid-template-columns: 1fr;
     grid-template-rows: 150px auto;
     justify-content: center;
     align-items: center;
     row-gap: 0;
     column-gap: 0;   
     outline: none;

`*/

/*const BackBtn = styled.a`
    margin:0; 
    width: 7em;
    margin:4.5% 0 0 3.2em;
    align-self: start;
    font-size:unset;
    border-width: thin;
    border-color: hsl(0, 15%, 91%);
    border-radius: .2em;
    box-shadow: 0 0 .5em 0 hsl(0, 28%, 79%);
    font-family: inherit;
    text-decoration: none;
    text-align: center;
    padding: .3em .5em .3em .5em;
    
    display:grid;
     grid-template-columns: 1fr 1fr;
     grid-template-rows: auto;
     justify-content: center;
     align-items: center;
              
`*/






export default CountryDetail;