const RESTCOUNTRIES_DOMAIN = 'https://restcountries.eu/rest/v2';

export async function getAllCountries() {

  //https://restcountries.eu/rest/v2/all

  const response = await fetch(`${RESTCOUNTRIES_DOMAIN}/all`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch countries.');
  }

  const transformedCountries = [];

  for (const countryObject in data) {
    /*console.log( ' line ' + `${data[countryObject].flag}`)*/
    let countryName = `${data[countryObject].name}`;
    const countryObj = {
      id:countryName,
      name:countryName,
      capital:`${data[countryObject].capital}`,
      population:`${data[countryObject].population}`,
      region:`${data[countryObject].region}`,
      flagimage:`${data[countryObject].flag}`
    }
   
   transformedCountries.push(countryObj)
  }

  return transformedCountries;

}

export async function getCountriesFromSingleRegion(regionId) {
  //https://restcountries.eu/rest/v2/region/europe

  const response = await fetch(`${RESTCOUNTRIES_DOMAIN}/region/${regionId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || `Could not fetch countries from region ${regionId}`);
  }

  const transformedCountries = [];

  for (const countryObject in data) {
    let countryName = `${data[countryObject].name}`;
    const countryObj = {
      id:countryName,
      name:countryName,
      capital:`${data[countryObject].capital}`,
      population:`${data[countryObject].population}`,
      region:`${data[countryObject].region}`,
      flagimage:`${data[countryObject].flag}`
    }

    transformedCountries.push(countryObj)
  }

  return transformedCountries;
}

export async function getSingleCountry(countryId) {

  //https://restcountries.eu/rest/v2/name/eesti
  const response = await fetch(`${RESTCOUNTRIES_DOMAIN}/name/${countryId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch country details.');
  }
  let countryInfoDataObj = {
    'nativeName':'',
    'population':'',
    'region':'',
    'subregion':'',
    'capital':'',
    'borders':'',
    'topLevelDomain':'',
    'currencies':'',
    'languages':'',
    'flag' : ''
  }
  if(data.length > 1){
    for(let key in data){
      if(data[key].name === countryId){

        countryInfoDataObj = data[key];
      }
    }
  }else{
    countryInfoDataObj= data[0] ;
  }
  let loadedCountryInfo = { id: countryId, ...countryInfoDataObj , flagimage: countryInfoDataObj.flag}



  return loadedCountryInfo;
}

export async function getSingleCountryByThreeLetterCode(countryId) {


  //https://restcountries.eu/rest/v2/name/eesti
  const response = await fetch(`${RESTCOUNTRIES_DOMAIN}/alpha/${countryId}`);
  const data = await response.json();

  if (!response.ok) { console.log('error')
    throw new Error(data.message || 'Could not fetch country details.');
  }
  const { nativeName,name,
    population, region ,
    subregion,capital ,borders,topLevelDomain, currencies,languages } = data ;

  const loadedCountry = {
    id: countryId,name,
    nativeName,population,region,subregion,capital,borders,topLevelDomain,currencies,languages
  };
  return loadedCountry;
}


