
import CountryItem from "./CountryItem";

import styled from 'styled-components';

const CountryList = (props) => {

    const countries = props.countries;

    return (

            <Countrylist >
                {   countries.map((country) => (
                        <CountryItem
                            key={country.id}
                            id={country.id}
                            name={country.name}
                            capital={country.capital}
                            population={country.population}
                            region={country.region}
                            flagimage={country.flagimage}
                        />
                ))}
            </Countrylist>

    )
}


const Countrylist = styled.ul`
    margin: 1em 0 1em 2em;
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    grid-template-rows:17em;
    grid-auto-rows:17em;
    column-gap:1em;
    padding:0;     
      @media only screen and (max-width: 500px){
    
         grid-template-columns: 1fr;
         grid-template-rows:25em;
         grid-auto-rows:25em;
         column-gap:0;
    }
`


export default CountryList